<template>
  <div
      class="tt-header-cell-content-list"
      v-if="typeof text === 'object'"
  >
    <div
        :key="idx"
        v-for="(item, idx) in text"
    >{{ item }}</div>
  </div>
  <div class="tt-header-cell-content" v-else>
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "tt-header-cell-content",
  props: {
    text: {
      type: [Object, String],
      required: true
    }
  }
}
</script>

<style scoped>
.tt-header-cell-content-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>