<template>
  <timetable-base>
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
export default {
  name: "TimetableFull",
  components: {TimetableEvenOddRow, TimetableBase},
  data() {
    return {
      headerContent: [
        '1 пара\n9:00\n10:30',
        '2 пара\n10:40\n12:10',
        '3 пара\n12:40\n14:10',
        '4 пара\n14:20\n15:50',
        '5 пара\n16:20\n17:50',
        '6 пара\n18:00\n19:30'
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