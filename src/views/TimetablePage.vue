<template>
  <div class="page-container">
    <loading-circle v-if="isParsing"/>
    <file-load-dialog :show="false"></file-load-dialog>
    <error-dialog :header="errorHeader" :args="errorArgs" v-model:show="parseErrorDialog"/>
    <div class="tl-load" v-if="isTeacherListLoading">Идет загрузка...</div>

    <div class="tt-page" v-else>
      <div
          class="filter-btn"
          @mousedown="$el.querySelector('.filter-btn').classList.toggle('active')"
          :class="{'active': !isAllSelected}"
      >
        <div class="filter-title">
          {{isAllSelected ? `${teacherName()} ${weekName()}` : 'Фильтры'}}
        </div>
        <img
            src="../assets/arrow-down.svg"
            alt="\/"
            class="open-arrow"
        >
      </div>
      <div class="control-block" ref="control">
        <div class="select-teacher">
          <div class="sel-lbl">Преподаватель:</div>
          <my-select
              v-model="selectedTeacherId"
              :options="teachersList"
              :on-change-func="changeTeacher"
              @change="hideControlBlock"
          />
        </div>

        <div class="select-week">
          <div class="sel-lbl">Неделя:</div>
          <my-select
              v-model="selectedWeek"
              :options="weeks"
              :on-change-func="changeWeek"
              @change="hideControlBlock"
          />
        </div>

        <img
            src="../assets/arrow-up.svg"
            alt="/\"
            class="close-button"
            @mousedown="hideControlBlock"
        >
      </div>
      <div class="tt-error" v-if="ttLoadError">
        Ой, что-то пошло не так.
      </div>
      <div class="tt-warn" v-else-if="selectTeacherMes">
        Выберите преподавателя.
      </div>
      <div class="tt-warn" v-else-if="selectWeekMes">
        Выберите неделю.
      </div>
      <div class="tt-load" v-else-if="isTimeTableLoading">
        Идёт загрузка расписания...
      </div>
      <timetable-placeholder v-else-if="clssIsEmpty"/>
      <div v-show="!clssIsEmpty && !isTimeTableLoading" class="timetable">
        <div class="tt-control" v-if="classes.length > 0">
          <button
              class="tt-button"
              :class="{ 'small-button': isSmallDevice }"
              @mousedown="showingDay--"
              :disabled="showingDay <= 0"
          >
            &#10094; <span v-if="!isSmallDevice">Предыдущий</span>
          </button>
          <button
              class="tt-button"
              :class="{ 'small-button': isSmallDevice }"
              @mousedown="showingDay++"
              :disabled="showingDay >= 5"
          >
            <span v-if="!isSmallDevice">Следующий</span> &#10095;
          </button>
        </div>
        <timetable-base
            :showing-day="showingDay"
            :classes="classes"
            :type="timetableType"
        />
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import MySelect from "@/components/UI/MySelect";
import LoadingCircle from "@/components/UI/LoadingCircle";
import ErrorDialog from "@/components/UI/ErrorDialog";
import FileLoadDialog from "@/components/UI/FileLoadDialog";
import TimetableBase from "../components/TimetableBase";
import TimetablePlaceholder from "../components/TimetablePlaceholder";

export default {
  name: "TimetablePage",
  components: {TimetablePlaceholder, TimetableBase, FileLoadDialog, ErrorDialog, LoadingCircle, MySelect},
  data() {
    return {
      classes: [],
      clssIsEmpty: true,
      teachersList: [],
      isTimeTableLoading: false,
      ttLoadError: false,
      selectedWeek: '-1',
      isTeacherListLoading: false,
      tlLoadError: false,
      errorHeader:'',
      errorArgs: {},
      selectedTeacherId: '',
      selectTeacherMes: true,
      selectWeekMes: false,
      parseErrorDialog: false,
      isSmallDevice: false,
      showingDay: -1,
      weeks: [
        { id: "-1", name: 'Все недели' },
        { id: "1", name: '1 неделя' },
        { id: "2", name: '2 неделя' },
        { id: "3", name: '3 неделя' },
        { id: "4", name: '4 неделя' },
        { id: "5", name: '5 неделя' },
        { id: "6", name: '6 неделя' },
        { id: "7", name: '7 неделя' },
        { id: "8", name: '8 неделя' },
        { id: "9", name: '9 неделя' },
        { id: "10", name: '10 неделя' },
        { id: "11", name: '11 неделя' },
        { id: "12", name: '12 неделя' },
        { id: "13", name: '13 неделя' },
        { id: "14", name: '14 неделя' },
        { id: "15", name: '15 неделя' },
        { id: "16", name: '16 неделя' },
        { id: "17", name: '17 неделя' },
      ],
      headerContent: [
        '1 пара 9:00-10:30',
        '2 пара 10:40-12:10',
        '3 пара 12:40-14:10',
        '4 пара 14:20-15:50',
        '5 пара 16:20-17:50',
        '6 пара 18:00-19:30',
        '7 пара 19:40-21:10',
        '7 пара маг. 18:30-20:00',
        '8 пара маг. 20:10-21:40',
      ],
      // apiUrl: 'http://localhost:8088',
      apiUrl: 'https://api-mosit.venomroms.com/',
      isParsing: false,
      timetableType: 'full'
    }
  },
  methods: {
    async fetchTeachesList() {
      try {
        this.isTeacherListLoading = true;
        const response = await axios.get(
            `${this.apiUrl}/teachers`
        );
        this.teachersList = response.data;
        this.tlLoadError = false;
      } catch (e) {
        this.tlLoadError = true;
      } finally {
        this.isTeacherListLoading = false;
      }
    },
    async fetchTeacherClassesForWeek() {
      try {
        this.isTimeTableLoading = true;
        const response = await axios.get(
            `${this.apiUrl}/teacher_classes/${this.selectedTeacherId}/${this.selectedWeek}`
        );
        this.classes = this.formatWeekTimetableClasses(response.data);
        this.ttLoadError = false;
        this.timetableType = 'week';

        if (this.showingDay !== -1)
          this.showingDay = 0;
      } catch (e) {
        console.log(e);
        this.ttLoadError = true;
      } finally {
        this.isTimeTableLoading = false;
      }
    },
    async fetchTeacherAllClasses() {
      try {
        this.isTimeTableLoading = true;
        const response = await axios.get(
            `${this.apiUrl}/teacher_classes/${this.selectedTeacherId}`
        );

        this.classes = this.formatFullTimetableClasses(response.data);
        this.ttLoadError = false;
        this.timetableType = 'full';

        if (this.showingDay !== -1)
          this.showingDay = 0;
      } catch (e) {
        console.log(e)
        this.ttLoadError = true;
      } finally {
        this.isTimeTableLoading = false;
      }
    },
    async parseXlsxs() {
      try {
        this.isParsing = true;
        const response = await axios.get(
            `${this.apiUrl}/parse`,
        ).catch((err) => {
          if (err.response) {
            let err_res = err.response;

            if (err_res.status === 500) {
              let data = err_res.data;
              let argNames = [
                'Группа',
                'Предмет',
                'День недели',
                'Номер пары'
              ];
              let args = {}

              this.errorHeader = data['message'];

              data['args'].forEach((arg, idx) => args[argNames[idx]] = arg);
              this.errorArgs = args;
            }
          }
        });
        console.log(response.data);
        this.parseErrorDialog = false;
      } catch (e) {
        this.parseErrorDialog = true;
      } finally {
        this.isParsing = false;
      }
    },
    changeTeacher() {
      if (this.selectedWeek !== '') {
        if (this.selectedWeek === '-1')
          this.fetchTeacherAllClasses()
        else
          this.fetchTeacherClassesForWeek();
      }
      else
        this.selectWeekMes = true;

      this.selectTeacherMes = false;
    },
    changeWeek() {
      if (this.selectedTeacherId !== '') {
        if (this.selectedWeek === '-1')
          this.fetchTeacherAllClasses()
        else
          this.fetchTeacherClassesForWeek();
      }
      else
        this.selectTeacherMes = true;

      this.selectWeekMes = false;
    },
    formatFullTimetableClasses(classes) {
      let result = [[],[],[],[],[],[]];

      for ( let [pairIdx, pairClasses] of classes.entries(classes) )
      {
        let classInfo = null;
        let oddClasses = pairClasses['odd'];
        let evenClasses = pairClasses['even'];

        for ( let classIdx = 0; classIdx < 6; classIdx++ )
        {
          let oddClass = oddClasses[classIdx];
          let evenClass = evenClasses[classIdx];

          if ( oddClass.length <= 0 && evenClass.length <= 0 )
          {
            continue;
          }

          classInfo = {
            'odd': oddClass,
            'even': evenClass,
            'header': this.headerContent[pairIdx]
          }

          result[classIdx].push(classInfo);
        }
      }

      return result;
    },
    formatWeekTimetableClasses(classes) {
      let result = [[],[],[],[],[],[]];

      for ( let [pairIdx, pairClasses] of classes.entries(classes) )
      {
        let classInfo = null;
        let cls = null;

        for ( let classIdx = 0; classIdx < 6; classIdx++ )
        {
          cls = pairClasses[classIdx];
          if ( cls === 0 )
            continue;

          classInfo = {
            'info': cls,
            'header': this.headerContent[pairIdx]
          };

          result[classIdx].push(classInfo);
        }
      }

      return result;
    },
    checkDeviceWidth() {
      const windowWidth = window.innerWidth;

      if ( windowWidth < 1200 && ( this.lastWidth > 1200 || this.showingDay === -1 ))
        this.showingDay = 0;

      this.lastWidth = windowWidth;
      this.isSmallDevice = windowWidth <= 375;
    },
    teacherName() {
      return this.$el.querySelector('.select-teacher > .select').selectedOptions[0].text;
    },
    weekName() {
      return this.$el.querySelector('.select-week > .select').selectedOptions[0].text;
    },
    hideControlBlock() {
      this.$el.querySelector('.filter-btn').classList.remove('active');
    }
  },
  computed: {
    isAllSelected: function () {
      return this.selectedTeacherId !== '' && this.selectedWeek !== '';
    }
  },
  watch: {
    classes() {
      this.clssIsEmpty = this.classes.every(i => i.length <= 0);
    }
  },
  mounted() {
    this.fetchTeachesList();
    this.checkDeviceWidth();

    // document.querySelector('.logo').addEventListener('click', this.parseXlsxs.bind(this));
    window.addEventListener('resize', this.checkDeviceWidth)
  }
}
</script>

<style scoped>
  .tt-page {
    padding: 0 var(--app--horiz-padding);
  }

  .control-block {
    display: flex;
    justify-content: space-around;
  }

  .select-teacher,
  .select-week {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .select-week {
    justify-self: end;
  }

  .sel-lbl {
    margin-right: 10px;
  }

  .tt-control {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin: 10px 0;
  }

  .tt-control > .tt-button {
    display: none;
    padding: 10px;
    border-radius: 20px;
    border: none;

    background-color: var(--mosit-blue-color);
    color: var(--tt-bg-color);

    font-size: var(--baze-font-size);
    cursor: pointer;
  }

  .tt-control > .tt-button:disabled {
    visibility: hidden;
  }

  .tt-control > .tt-button.small-button {
    width: 50px;
    border-radius: 50%;

    font-size: 25px;
  }

  .tt-error,
  .tt-warn,
  .tt-load {
    margin: 15px 0;
  }

  .filter-btn {
    display: none;
    align-items: flex-end;

    padding: 5px 10px;

    border-radius: 10px;
    background-color: var(--mosit-black-color);
    color: var(--mosit-white-color);

    font-weight: bold;
    cursor: pointer;

    --arrow-width: 20px;
  }

  .filter-btn > .filter-title {
    margin: 0 auto;
  }

  .filter-btn > .open-arrow {
    height: var(--arrow-width);
    margin-left: calc(var(--arrow-width) * -1);
  }

  .filter-btn.active {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .control-block > .close-button {
    display: none;
    align-self: flex-end;
    height: 45px;

    margin: -45px 10px 10px 0;

    color: var(--mosit-white-color);
    background-color: var(--mosit-black-color);
    border-radius: 50%;

    cursor: pointer;
  }

  @media all and (device-width: 1200px), all and (max-width: 1200px) {
    .tt-control > .tt-button {
      display: block;
    }
  }

  @media all and (device-width: 900px), all and (max-width: 900px) {
    .control-block {
      display: none;
      flex-direction: column;
      align-items: center;

      background-color: var(--mosit-white-color);
      border-radius: 10px;
    }

    .filter-btn {
      display: flex;
    }

    .filter-btn.active + .control-block {
      display: flex;
      padding-top: 10px;

      border-top-right-radius: 0;
      border-top-left-radius: 0;
    }

    .filter-btn.active > .open-arrow {
      display: none;
    }

    .select-teacher {
      margin-bottom: 10px;
    }

    .control-block > .close-button {
      display: block;
    }
  }

  @media all and (max-width: 425px), all and (device-width: 425px) {
    .select-teacher,
    .select-week {
      flex-direction: column;
    }

    .sel-lbl {
      margin-right: 0;
      margin-bottom: 5px;
    }
  }

  @media all and (max-width: 320px), all and (device-width: 320px) {
    .control-block > .close-button {
      height: 40px;
      margin-right: 5px;
      margin-top: -38px;
    }
  }
</style>
