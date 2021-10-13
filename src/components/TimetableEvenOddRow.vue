<template>
  <div class="tt-even-odd-row">
    <tt-vertical-header :cell-text="headerText"/>
    <div class="odd-even-row">
      <tt-vertical-header cell-text="1"/>
      <div
          class="clss"
          :key="idx"
          v-for="(clssInfo, idx) in classesInfo['odd']"
      >
        <class
            v-for="clsInfo in clssInfo"
            :class-info="clsInfo"
            :key="clsInfo.id"
        />
      </div>
    </div>
    <div class="odd-even-row">
      <tt-vertical-header cell-text="2"/>
      <div
          class="clss"
          :key="idx"
          v-for="(clssInfo, idx) in classesInfo['even']"
      >
        <class
            v-for="clsInfo in clssInfo"
            :class-info="clsInfo"
            :key="clsInfo.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Class from "@/components/Class";
import TtVerticalHeader from "@/components/UI/TtVerticalHeader";
export default {
  name: "timetable-even-odd-row",
  components: {TtVerticalHeader, Class},
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
.tt-even-odd-row {
  display: grid;
  grid-template-columns: min-content 1fr;
}

.tt-even-odd-row > .tt-vertical-header {
  grid-column: 1;
  grid-row: 1 / 3;
}

.tt-even-odd-row > .odd-even-row {
  grid-column: 2;

  display: grid;
  grid-template-columns: min-content repeat( 6, 1fr );

  width: auto;
  box-sizing: border-box;
}

.tt-even-odd-row > .odd-even-row > .clss {
  display: grid;
  grid-template-columns: 1fr;
}

.tt-even-odd-row > .odd-even-row > .tt-vertical-header {
  border-left: none;
}
</style>