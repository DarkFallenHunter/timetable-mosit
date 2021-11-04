<template>
  <div class="tt-column-header">
      <tt-header-cell-content :text="text"/>
  </div>
</template>

<script>
import TtHeaderCellContent from "@/components/UI/TtHeaderCellContent";
export default {
  name: "tt-column-header",
  components: {TtHeaderCellContent},
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.tt-column-header {
  padding: 5px;

  border-radius: 10px;
  background-color: var(--mosit-black-color);
  color: var(--mosit-white-color);

  font-weight: bold;
}
</style>
