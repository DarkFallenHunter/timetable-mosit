<template>
  <div class="timetable-container">
    <timetable-placeholder v-if="classes.length <= 0"/>
    <timetable-full
        v-else-if="type === 'full'"
        :weekClasses="classes"
        :header-content="headerContent"
        :week-days="weekDays"
    />
    <timetable-for-week
        v-else-if="type === 'week'"
        :weekClasses="classes"
        :header-content="headerContent"
        :week-days="weekDays"
    />
  </div>
</template>

<script>
import TimetableFull from "./TimetableFull";
import TimetableForWeek from "./TimetableForWeek";
import TimetablePlaceholder from "./TimetablePlaceholder";

export default {
  components: {TimetablePlaceholder, TimetableForWeek, TimetableFull},
  name: "timetable-base",
  data() {
    return {
      headerContent: [
        '1 пара\n9:00\n10:30',
        '2 пара\n10:40\n12:10',
        '3 пара\n12:40\n14:10',
        '4 пара\n14:20\n15:50',
        '5 пара\n16:20\n17:50',
        '6 пара\n18:00\n19:30',
        '7 пара\n19:40\n21:10',
        '7 пара\nмаг.\n18:30\n20:00',
        '8 пара\nмаг.\n20:10\n21:40',
      ],
      weekDays: [
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
      ]
    }
  },
  props: {
    type: {
      type: String,
      require: true,
      validator(value) {
        return value === 'full' || value === 'week';
      }
    },
    classes: {
      type: Object,
      require: true
    }
  },
  computed: {
    classHeaders() {
      return this.headerContent.slice(0, this.classes.length())
    }
  }
}
</script>

<style scoped>
.timetable-container {
  display: grid;
}
</style>
