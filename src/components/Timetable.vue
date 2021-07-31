<template>
  <div class="timetable-container">
    <tt-header class="top-header" :orientation="'h'" :cells-text="weekDays" ></tt-header>
    <tt-header class="left-header" :orientation="'v'" :cells-text="clsNums"></tt-header>
    <div class="timetable-info">
      <timetable-row
          :key="weekDay"
          :classes="classes"
          v-for="(classes, weekDay) in weekClasses"
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
          '1 пара\n\n9:00\n-\n10:30',
          '2 пара\n\n10:40\n-\n12:10',
          '3 пара\n\n12:40\n-\n14:10',
          '4 пара\n\n14:20\n-\n15:50',
          '5 пара\n\n16:20\n-\n17:50',
          '6 пара\n\n18:00\n-\n19:30'
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