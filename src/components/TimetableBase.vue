<template>
  <div class="timetable-container">
<!--    <div class="timetable-info">-->
    <slot></slot>
<!--    </div>-->
  </div>
</template>

<script>

export default {
  name: "timetable-base",
  data() {
    return {
      weekDays: [
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
      ]
    }
  }
}
</script>

<style scoped>
.timetable-container {
  display: grid;
}

/*.timetable-container > .timetable-info {*/
/*  display: grid;*/
/*  justify-content: stretch;*/

/*  border-bottom: none;*/

/*  font-size: 16px;*/
/*}*/
</style>