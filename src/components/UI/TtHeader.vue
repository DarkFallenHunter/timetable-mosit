<!-- Подумать над KEY -->
<template>
  <div
      class="tt-header"
      :class="{ v: orientation === 'v' }"
  >
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
export default {
  name: "tt-header",
  components: {TtHeaderCellContent},
  props: {
    orientation: {
      type: String,
      default: 'h'
    },
    cellsText: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.tt-header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-content: space-evenly;

  border: 1px solid var(--tt-head-brd-clr);
  border-bottom: none;
  font-weight: normal;
}

.tt-header > .tt-header-cell {
  padding: 5px;
  background-color: var(--tt-head-bg-clr);
  color: var(--tt-head-clr);
  border-right: 1px solid var(--tt-head-brd-clr);
}

.tt-header > .tt-header-cell:last-child {
  border-right: none;
}

.tt-header.v {
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: auto;

  border-right: none;
  /*align-items: center;*/
  /*justify-items: center;*/
}

.tt-header.v > .tt-header-cell {
  display: flex;
  padding: 5px;
  border-bottom: 1px solid var(--tt-head-brd-clr);
  border-right: none;

  background-color: var(--tt-head-bg-clr);
  white-space: pre-wrap;
}

.tt-header.h > .tt-header-cell:last-child {
  border-bottom: none;
}

</style>
