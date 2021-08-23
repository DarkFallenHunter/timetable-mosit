<template>
  <timetable-base>
    <tt-header :is-weeks-mark="true" class="top-header" :cells-text="weekDays" ></tt-header>
    <timetable-even-odd-row
        :key="idx"
        :classes-info="classes"
        :header-text="headerContent[idx]"
        v-for="(classes, idx) in weekClasses"
    />
  </timetable-base>
</template>

<script>
import TimetableBase from "@/components/TimetableBase";
import TimetableEvenOddRow from "@/components/TimetableEvenOddRow";
import TtHeader from "@/components/UI/TtHeader";

export default {
  name: "TimetableFull",
  components: {TimetableEvenOddRow, TimetableBase, TtHeader},
  data() {
    return {
      headerContent: [
        '1 пара\n9:00\n10:30',
        '2 пара\n10:40\n12:10',
        '3 пара\n12:40\n14:10',
        '4 пара\n14:20\n15:50',
        '5 пара\n16:20\n17:50',
        '6 пара\n18:00\n19:30'
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
    weekClasses: {
      type: Object,
      required: true
    }
  },
  headerContent: [

  ]
}
</script>

<style scoped>

</style>