<template>
  <div class="tt-even-odd-item">
    <div class="cls-header">{{headerText}}</div>
    <div v-if="classesInfo['odd'].length > 0" class="odd-even-item">
      <div class="odd-even-header">нечетные</div>
      <div class="clss">
        <div class="cls-info" :key="idx" v-for="(clsInfo, idx) in classesInfo['odd']">
          <class :class-info="clsInfo"/>
        </div>
      </div>
    </div>
    <div v-if="classesInfo['even'].length > 0" class="odd-even-item">
      <div class="odd-even-header">четные</div>
      <div class="clss">
        <div class="cls-info" :key="idx" v-for="(clsInfo, idx) in classesInfo['even']">
          <class
              :class-info="clsInfo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Class from "@/components/Class";

export default {
  name: "timetable-even-odd-item",
  components: {Class},
  props: {
    classesInfo: {
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
.tt-even-odd-item {
  display: flex;
  flex-direction: column;

  margin: 10px 0;
  border-radius: 10px;

  background-color: var(--mosit-white-color);
}

.tt-even-odd-item > .cls-header {
  padding: 2px 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  background-color: var(--mosit-blue-color);
  color: var(--mosit-white-color);

  font-weight: bold;
}

.tt-even-odd-item > .odd-even-item {
  width: auto;
  box-sizing: border-box;
}

.tt-even-odd-item > .odd-even-item > .odd-even-header {
  background-color: var(--mosit-gray-color);
  font-style: italic;
}

.tt-even-odd-item > .odd-even-item > .clss {
  display: grid;
  grid-template-columns: 1fr;
}

.tt-even-odd-item > .odd-even-item > .clss > .cls-info {
  padding: 5px;
  word-wrap: anywhere;
}

@media all and (device-width: 1200px), all and (max-width: 1200px) {

}
</style>