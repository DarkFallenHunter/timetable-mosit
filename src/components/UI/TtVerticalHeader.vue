<template>
  <div class="tt-vertical-header" :class="{'header-placeholder no-select': isPlaceholder}">
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
    },
    isPlaceholder: {
      type: Boolean,
      default: false
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

.tt-vertical-header.header-placeholder:first-of-type {
  border-left: 1px solid white;
}

.tt-vertical-header.header-placeholder {
  border-left: 1px solid white;
  border-right: none;
}

.tt-vertical-header.header-placeholder > .tt-header-cell {
  background-color: white;
  color: white;
}
</style>