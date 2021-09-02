<!-- Подумать над KEY -->
<template>
  <div class="tt-header">
    <div class="placeholders">
    <tt-vertical-header :cell-text="'00:00'" :is-placeholder="true"/>
    <tt-vertical-header v-if="isWeeksMark" :cell-text="'2'" :is-placeholder="true"/>
    </div>
    <div
        class="tt-header-cell"
        :key="idx"
        v-for="(text, idx) in cellsText"
    >
      <tt-header-cell-content :text="text"/>
    </div>
  </div>
</template>

<script>
import TtHeaderCellContent from "@/components/UI/TtHeaderCellContent";
import TtVerticalHeader from "@/components/UI/TtVerticalHeader";
export default {
  name: "tt-header",
  components: {TtVerticalHeader, TtHeaderCellContent},
  props: {
    isWeeksMark: {
      type: Boolean,
      default: false
    },
    cellsText: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
.tt-header {
  display: grid;
  grid-template-columns: min-content 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-content: space-evenly;

  font-weight: normal;
}

/*.tt-header.with-week-marks {*/
/*  grid-template-columns: min-content min-content 1fr 1fr 1fr 1fr 1fr 1fr;*/
/*}*/

.tt-header > .tt-header-cell {
  padding: 5px;
  background-color: var(--tt-head-bg-clr);
  color: var(--tt-head-clr);
  border: 1px solid var(--tt-head-brd-clr);
  border-left: none;
}

.tt-header > .placeholders {
  display: flex;
  flex-direction: row;
  border-right: 1px solid var(--tt-head-brd-clr);
}
</style>
