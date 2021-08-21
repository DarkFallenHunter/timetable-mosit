<template>
  <div class="tt-even-odd-row">
    <div class="odd-even-row">
<!--      <div class="odd-mark">I</div>-->
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
<!--      <div class="even-mark">II</div>-->
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
export default {
  name: "timetable-even-odd-row",
  components: {Class},
  props: {
    classesInfo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.odd-even-row {
  display: grid;
  /*grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;*/
  grid-template-columns: repeat( 6, 1fr );
  /*grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));*/
  border-bottom: 1px solid var(--mosit-gray-color);

  width: auto;
  box-sizing: border-box;
}

.clss {
  display: grid;
  grid-template-columns: 1fr;

  border-right: 1px solid var(--tt-brd-clr);
}

.clss:last-child {
  border-right: none;
}
</style>