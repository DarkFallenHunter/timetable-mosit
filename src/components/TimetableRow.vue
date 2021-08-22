<template>
  <div class="timetable-row">
    <tt-vertical-header :cell-text="headerText"/>
    <div class="classes-row">
      <class
          :key="classInfo.id"
          :class-info="classInfo"
          v-for="classInfo in classes"
      />
    </div>
  </div>
</template>

<script>
import Class from "@/components/Class";
import TtVerticalHeader from "@/components/UI/TtVerticalHeader";
export default {
  name: "timetable-row",
  components: {TtVerticalHeader, Class},
  props: {
    classes: {
      type: Array,
      required: true
    },
    headerText: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.timetable-row {
  display: grid;
  grid-template-columns: min-content 1fr;
  box-sizing: border-box;
}

.classes-row {
  grid-column: 2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}
</style>