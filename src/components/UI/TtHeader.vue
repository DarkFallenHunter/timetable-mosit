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
    >{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "tt-header",
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

  border: 1px solid var(--mosit-gray-color);
  border-bottom: none;
  font-weight: bold;
}

.tt-header > .tt-header-cell {
  padding: 6px 0;
  background-color: var(--tt-head-bg-clr);
  border-right: 1px solid var(--mosit-gray-color);
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
  /*align-self: center;*/
  padding: 0 5px;
  border-bottom: 1px solid var(--mosit-gray-color);
  border-right: none;

  background-color: var(--tt-head-bg-clr);
  white-space: pre-wrap;
}

.tt-header.h > .tt-header-cell:last-child {
  border-bottom: none;
}

</style>
