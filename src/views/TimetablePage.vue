<template>
  <loading-circle v-if="isParsing"/>
  <file-load-dialog :show="false"></file-load-dialog>
  <error-dialog :header="errorHeader" :args="errorArgs" v-model:show="parseErrorDialog"/>
  <div class="tl-load" v-if="isTeacherListLoading">Идет загрузка...</div>

  <div class="tt-page" v-else>
    <div class="control-block">
      <div class="select-teacher">
        <div class="sel-lbl">Преподаватель:</div>
        <my-select
            v-model="selectedTeacherId"
            :options="teachersList"
            :on-change-func="changeTeacher"
        />
      </div>

      <div class="select-week">
        <div class="sel-lbl">Неделя:</div>
        <my-select
            v-model="selectedWeek"
            :options="weeks"
            :on-change-func="changeWeek"
        />
      </div>
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
    <timetable-base v-else :classes="classes" :type="selectedWeek === '-1' ? 'full' : 'week'"/>
  </div>
</template>

<script>
import axios from "axios";
import MySelect from "@/components/UI/MySelect";
import LoadingCircle from "@/components/UI/LoadingCircle";
import ErrorDialog from "@/components/UI/ErrorDialog";
import FileLoadDialog from "@/components/UI/FileLoadDialog";
import TimetableBase from "../components/TimetableBase";

export default {
  name: "TimetablePage",
  components: {TimetableBase, FileLoadDialog, ErrorDialog, LoadingCircle, MySelect},
  data() {
    return {
      classes: [],
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
      isParsing: false
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
        this.classes = this.sliceWeekTimetableClasses(response.data);
        this.ttLoadError = false;
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
        let classInfo = {};
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
    sliceWeekTimetableClasses(classes) {
      let result = [[],[],[],[],[],[]];

      console.log(classes);
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

      console.log(result);
      return result;
    }
  },
  mounted() {
    this.fetchTeachesList();
    document.querySelector('.logo').addEventListener('click', this.parseXlsxs.bind(this));
  }
}
</script>

<style scoped>
  .tt-page {
    padding: 0 var(--app--horiz-padding);
  }

  .control-block {
    display: flex;
    margin: 15px 0;
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

  @media all and (device-width: 900px), all and (max-width: 900px) {
    .control-block {
      flex-direction: column;
      align-items: center;
    }

    .select-teacher {
      margin-bottom: 10px;
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
</style>
