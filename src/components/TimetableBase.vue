<template>
  <div class="timetable-container">
    <tt-header class="top-header" :cells-text="weekDays" ></tt-header>
<!--    <tt-header class="left-header" :orientation="'v'" :cells-text="clsNums"></tt-header>-->
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
      ]
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
  justify-content: stretch;

  border-bottom: none;

  font-size: 16px;
}
</style>