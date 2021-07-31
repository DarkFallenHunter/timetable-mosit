<template>
  <div class="timetable">
    <timetable :weekClasses="classes"/>
  </div>
</template>

<script>
import Timetable from "@/components/Timetable";
export default {
  name: "TimetablePage",
  components: {Timetable},
  data() {
    return {
      classes: {
        '1 пара': [
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
        '2 пара': [
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
        '3 пара': [
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
        '4 пара': [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        '5 пара': [
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
        '6 пара': [
          0,
          0,
          0,
          0,
          0,
          0
        ],

      },
      teachersList: []
    }
  }
}
</script>

<style scoped>

</style>