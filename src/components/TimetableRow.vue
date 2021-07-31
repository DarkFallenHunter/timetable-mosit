<template>
  <div class="timetable-row">
    <class
        :key="classInfo.id"
        :class-info="classInfo"
        v-for="classInfo in classes"
    />
  </div>
</template>

<script>
import Class from "@/components/Class";
export default {
  name: "timetable-row",
  components: {Class},
  props: {
    classes: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
  .timetable-row > .header {
    background-color: var(--mosit-gray-color);
    color: white;
  }

  .timetable-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

    border-bottom: 1px solid var(--mosit-gray-color);
  }
</style>