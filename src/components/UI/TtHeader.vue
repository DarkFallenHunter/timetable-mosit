<!-- Подумать над KEY -->
<template>
  <div class="tt-header">
    <tt-vertical-header :cell-text="'00:00'" :class="'header-placeholder'"/>
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
    weeksNumPlaceholder: {
      type: Boolean,
      default: false
    },
    cellsText: {
      type: String,
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

.tt-header > .tt-header-cell {
  padding: 5px;
  background-color: var(--tt-head-bg-clr);
  color: var(--tt-head-clr);
  border: 1px solid var(--tt-head-brd-clr);
  border-left: none;
}


.tt-header.v {
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: auto;

  border-right: none;
}

.tt-header.v > .tt-header-cell {
  display: flex;
  padding: 5px;
  border-bottom: 1px solid var(--tt-head-brd-clr);
  border-right: none;

  background-color: var(--tt-head-bg-clr);
  white-space: pre-wrap;
}

.tt-vertical-header.header-placeholder {
  /*padding: 0 5px;*/
  /*border-right: 1px solid var(--tt-head-brd-clr);*/
  border-left: 1px solid white;
  /*border-bottom: none;*/
  border-top: none;
}

.tt-vertical-header.header-placeholder > .tt-header-cell {
  background-color: white;
  color: white;
}
</style>
