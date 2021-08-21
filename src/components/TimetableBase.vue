<template>
  <div class="timetable-container">
    <tt-header class="top-header" :orientation="'h'" :cells-text="weekDays" ></tt-header>
    <tt-header class="left-header" :orientation="'v'" :cells-text="clsNums"></tt-header>
    <div class="timetable-info">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import TtHeader from "@/components/UI/TtHeader";

export default {
  name: "timetable-base",
  components: {TtHeader},
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
        '1 пара\n9:00\n10:30',
        '2 пара\n10:40\n12:10',
        '3 пара\n12:40\n14:10',
        '4 пара\n14:20\n15:50',
        '5 пара\n16:20\n17:50',
        '6 пара\n18:00\n19:30'
      ]
    }
  }
}
</script>

<style scoped>
.timetable-container {
  display: grid;
  grid-template-columns: min-content;
}

.timetable-container > .timetable-info {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-content: stretch;

  border: 1px solid var(--tt-head-brd-clr);
  border-right: 1px solid var(--tt-brd-clr);
  border-bottom: none;

  font-size: 16px;
}

.timetable-container > .top-header {
  grid-column: 2;
}

.timetable-container > .left-header {
  grid-column: 1;
  grid-row: 2;
}
</style>