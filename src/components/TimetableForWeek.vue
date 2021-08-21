<template>
  <timetable-base>
    <timetable-row
        :key="idx"
        :classes="classes"
        v-for="(classes, idx) in weekClasses"
    />
  </timetable-base>
</template>

<script>
import TimetableRow from "@/components/TimetableRow";
import TimetableBase from "@/components/TimetableBase";
export default {
  name: "timetable-for-week",
  components: {TimetableBase, TimetableRow},
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