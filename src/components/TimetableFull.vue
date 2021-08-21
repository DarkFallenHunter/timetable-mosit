<template>
  <timetable-base>
    <timetable-even-odd-row
        :key="idx"
        :classes-info="classes"
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
  props: {
    weekClasses: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>