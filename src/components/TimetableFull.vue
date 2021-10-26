<template>
  <tt-header :is-weeks-mark="true" class="top-header" :cells-text="weekDays" ></tt-header>
  <timetable-even-odd-row
      :key="idx"
      :classes-info="classes"
      :header-text="headerContent[idx]"
      v-for="(classes, idx) in weekClasses"
  />
</template>

<script>
import TimetableEvenOddRow from "@/components/TimetableEvenOddRow";
import TtHeader from "@/components/UI/TtHeader";

export default {
  name: "TimetableFull",
  components: {TimetableEvenOddRow, TtHeader},
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
  },
  headerContent: [

  ]
}
</script>

<style scoped>

</style>