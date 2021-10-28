<template>
  <div class="tt-header-cell-content-list">
    <div
        :key="idx"
        v-for="(item, idx) in parseCellText(text)"
    >{{ item }}</div>
  </div>
</template>

<script>
export default {
  name: "tt-header-cell-content",
  props: {
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    parseCellText: text => text.split('\n')
  }
}
</script>

<style scoped>
.tt-header-cell-content-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: var(--baze-font-size);
}
</style>