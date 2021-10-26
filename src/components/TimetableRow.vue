<template>
  <div class="timetable-row">
    <tt-vertical-header :cell-text="headerText"/>
    <div class="classes-row">
      <div class="cls-info" :key="idx" v-for="(clsInfo, idx) in classes">
        <div
            class="class-placeholder"
            v-if="clsInfo === 0"
        ></div>
        <class
            v-else
            :class-info="clsInfo"
        />
      </div>
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

.cls-info {
  border: 1px solid var(--tt-brd-clr);
  border-top: none;
  border-left: none;

  font-size: 16px;
  word-wrap: anywhere;
}

.class-placeholder {
  height: 100%;
  background-color: var(--tt-placaholder-bg-clr);
}
</style>