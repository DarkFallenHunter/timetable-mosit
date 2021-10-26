<template>
  <tt-header class="top-header" :cells-text="weekDays" ></tt-header>
  <timetable-row
      :key="idx"
      :classes="classes"
      v-for="(classes, idx) in weekClasses"
      :header-text="headerContent[idx]"
  />
</template>

<script>
import TimetableRow from "@/components/TimetableRow";
import TtHeader from "@/components/UI/TtHeader";

export default {
  name: "timetable-for-week",
  components: {TimetableRow, TtHeader},
  props: {
    weekClasses: {
      type: Object,
      required: true
    },
    headerContent: {
      type: Array,
      require: true
    },
    weekDays: {
      type: Array,
      require: true
    },

  }
}
</script>

<style scoped>

</style>