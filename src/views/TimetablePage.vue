<template>
  <loading-circle v-if="isParsing"/>
  <error-dialog :header="errorHeader" :args="errorArgs" v-model:show="parseErrorDialog"/>
  <div class="tl-load" v-if="isTeacherListLoading">Идет загрузка...</div>

  <div class="tt-page" v-else>
    <div class="control-block">
      <div class="select-teacher">
        <div class="sel-teacher-lbl">Преподаватель:</div>
        <my-select
            v-model="selectedTeacherId"
            :options="teachersList"
            :on-change-func="changeTeacher"
        />
      </div>

      <div class="select-week">
        <div class="sel-week-lbl">Неделя:</div>
        <my-select
            v-model="selectedWeek"
            :options="weeks"
            :on-change-func="changeWeek"
        />
      </div>
    </div>
    <div class="timetable">
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
      <timetable-full :weekClasses="classes" v-else-if="selectedWeek === '-1'"/>
      <timetable-for-week :weekClasses="classes" v-else/>
    </div>
  </div>
</template>

<script>
import TimetableForWeek from "@/components/TimetableForWeek";
import axios from "axios";
import MySelect from "@/components/UI/MySelect";
import TimetableFull from "@/components/TimetableFull";
import LoadingCircle from "@/components/UI/LoadingCircle";
import ErrorDialog from "@/components/UI/ErrorDialog";
// import TeacherSelect from "@/components/UI/TeacherSelect";
export default {
  name: "TimetablePage",
  components: {ErrorDialog, LoadingCircle, TimetableFull, TimetableForWeek, MySelect},
  data() {
    return {
      classes: [],
      teachersList: [],
      isTimeTableLoading: false,
      ttLoadError: false,
      selectedWeek: '',
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
      // apiUrl: 'http://ec2-18-184-205-187.eu-central-1.compute.amazonaws.com:8088',
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
        this.classes = response.data;
        this.ttLoadError = false;
      } catch (e) {
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
        this.classes = response.data;
        this.ttLoadError = false;
      } catch (e) {
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

    }
  },
  mounted() {
    this.fetchTeachesList();
    document.querySelector('.logo').addEventListener('click', this.parseXlsxs.bind(this));
  }
}
</script>

<style scoped>
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

  .sel-teacher-lbl,
  .sel-week-lbl {
    margin-right: 10px;
  }
</style>
