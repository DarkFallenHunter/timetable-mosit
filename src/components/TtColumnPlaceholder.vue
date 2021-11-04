<template>
  <div class="tt-column-placeholder">
    Нет пар в этот день
  </div>
</template>

<script>
export default {
  name: "tt-column-placeholder"
}
</script>

<style scoped>
  .tt-column-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    margin: 10px 0;
    padding: 10px;
    border-radius: 10px;

    color: var(--mosit-black-color);
    background-color: var(--mosit-white-color);
  }
</style>