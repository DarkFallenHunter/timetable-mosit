<template>
  <div class="tt-vertical-header">
    <div class="tt-header-cell">
      <tt-header-cell-content :text="cellText"/>
    </div>
  </div>
</template>

<script>
import TtHeaderCellContent from "@/components/UI/TtHeaderCellContent";
export default {
  name: "tt-vertical-header",
  components: {TtHeaderCellContent},
  props: {
    cellText: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.tt-vertical-header {
  display: grid;
  grid-template-columns: auto;

  border: 1px solid var(--tt-head-brd-clr);
  border-top: none;
}

.tt-vertical-header > .tt-header-cell {
  display: flex;
  padding: 5px;

  background-color: var(--tt-head-bg-clr);
  color: var(--tt-head-clr);
  white-space: pre-wrap;
}
</style>