<template>
  <div class="tt-item">
    <div class="cls-header">{{headerText}}</div>
    <div class="cls-info">
      <class
          :class-info="classInfo"
      />
    </div>
  </div>
</template>

<script>
import Class from "@/components/Class";

export default {
  name: "timetable-item",
  components: {Class},
  props: {
    classInfo: {
      type: Object,
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
.tt-item {
  display: flex;
  flex-direction: column;

  margin: 10px 0;
  border-radius: 10px;

  background-color: var(--mosit-white-color);
}

.tt-item > .cls-header {
  padding: 2px 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  background-color: var(--mosit-blue-color);
  color: var(--mosit-white-color);

  font-weight: bold;
}

.cls-info {
  padding: 5px;
  word-wrap: anywhere;
}

@media all and (device-width: 1200px), all and (max-width: 1200px) {

}
</style>