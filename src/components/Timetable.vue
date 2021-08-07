<template>
  <div class="timetable-container">
    <tt-header class="top-header" :orientation="'h'" :cells-text="weekDays" ></tt-header>
    <tt-header class="left-header" :orientation="'v'" :cells-text="clsNums"></tt-header>
    <div class="timetable-info">
      <timetable-row
          :key="idx"
          :classes="classes"
          v-for="(classes, idx) in weekClasses"
      />
    </div>
  </div>
</template>

<script>
import TimetableRow from "@/components/TimetableRow";
import TtHeader from "@/components/UI/TtHeader";
export default {
  name: "timetable",
  components: {TtHeader, TimetableRow},
  data() {
    return {
      weekDays: [
          'Понедельник',
          'Вторник',
          'Среда',
          'Четверг',
          'Пятница',
          'Суббота'
      ],
      clsNums: [
          ['1 пара', '9:00', '\u2013', '10:30'],
          ['2 пара', '10:40', '\u2013', '12:10'],
          ['3 пара', '12:40', '\u2013', '14:10'],
          ['4 пара', '14:20', '\u2013', '15:50'],
          ['5 пара', '16:20', '\u2013', '17:50'],
          ['6 пара', '18:00', '\u2013', '19:30']
      ]
    }
  },
  props: {
    weekClasses: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.timetable-container {
  display: grid;
}

.timetable-container > .timetable-info {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-content: space-evenly;

  border: 1px solid var(--mosit-gray-color);
  border-bottom: none;
}

.timetable-container > .top-header {
  grid-column: 2;
}

.timetable-container > .left-header {
  grid-column: 1;
  grid-row: 2;
}
</style>