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
.timetable-row {
  display: grid;
  /*grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;*/
  grid-template-columns: repeat( 6, 1fr );
  /*grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));*/
  border-bottom: 1px solid var(--mosit-gray-color);

  width: auto;
  box-sizing: border-box;
}
</style>