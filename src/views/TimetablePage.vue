<template>
  <div class="timetable">
    <timetable :weekClasses="classes"/>
  </div>
</template>

<script>
import Timetable from "@/components/Timetable";
import axios from "axios";
export default {
  name: "TimetablePage",
  components: {Timetable},
  data() {
    return {
      classes: [
        [
          0,
          {
            name: 'Системная и программная инженерия',
            group: 'ИВБО-05-18',
            type: 'пр',
            aud: 'Г-304',
            prof: 'Гусев К.В.'
          },
          0,
          0,
          0,
          0
        ],
        [
          0,
          0,
          0,
          0,
          {
            name: 'Системная и программная инженерия',
            group: 'ИВБО-05-18',
            type: 'пр',
            aud: 'Г-304',
            prof: 'Гусев К.В.'
          },
          0
        ],
        [
          0,
          {
            name: 'Системная и программная инженерия',
            group: 'ИВБО-05-18',
            type: 'пр',
            aud: 'Г-304',
            prof: 'Гусев К.В.'
          },
          0,
          0,
          {
            name: 'Технология разработки программных приложений фывйцув',
            group: 'ИВБО-05-18',
            type: 'пр',
            aud: 'Г-304',
            prof: 'Гусев К.В.'
          },
          0
        ],
        [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        [
          0,
          0,
          0,
          0,
          {
            name: 'Системная и программная инженерия',
            group: 'ИВБО-05-18',
            type: 'пр',
            aud: 'Г-304',
            prof: 'Гусев К.В.'
          },
          0
        ],
        [
          0,
          0,
          0,
          0,
          0,
          0
        ],
      ],
      teachersList: [],
      isTimeTableLoading: false
    }
  },
  methods: {
    async fetchTeacherClasses() {
      try {
        this.isTimeTableLoading = true;
        const response = await axios.get(
            'http://127.0.0.1:8000/teacher_classes/%D0%90%D0%BD%D1%88%D0%B8%D0%BD%D0%B0%20%D0%9C.%D0%9B./1'
        );
        this.classes = response.data;
      } catch (e) {
        alert('Ошибка');
      } finally {
        this.isTimeTableLoading = false;
      }
    }
  },
  mounted() {
    this.fetchTeacherClasses();
  }
}
</script>

<style scoped>

</style>