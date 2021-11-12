<template>
  <div class="tt-placeholder">
    У данного преподавателя отсутствуют пары в выбранный период.
  </div>
</template>

<script>
export default {
  name: "timetable-placeholder"
}
</script>

<style scoped>
  .tt-placeholder {
    width: 100%;
    margin: 10px auto;

    color: orangered;
  }
</style>