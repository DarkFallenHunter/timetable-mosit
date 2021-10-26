<template>
  <div class="class-container">
    <div class="name">{{ classInfo.name }}</div>
    <div class="group">{{ classInfo.group }}</div>
    <div class="type">{{ classInfo.type.toUpperCase() }}</div>
    <div class="room">{{ classInfo.room }}</div>
    <div class="weeks" v-if="'week_nums' in classInfo">{{ weeks }}</div>
  </div>
</template>

<script>
export default {
  name: "class",
  props: {
    classInfo: {
      type: [Object, Number],
      required: true
    }
  },
  computed: {
    weeks: function () {
      const weekNums = this.classInfo.week_nums;
      const firstWeekNum = weekNums[0];
      const weeksSum = weekNums.reduce((a, b) => a + b, 0);
      if (firstWeekNum === 1 && weeksSum === 64)
        return '1-15 н.';
      else if (firstWeekNum === 2 && weeksSum === 72 )
        return '2-16 н.';
      else
        return weekNums.join(', ') + ' н.';
    }
  }
}
</script>

<style scoped>
  .class-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
  }

  .group {
    white-space: pre-wrap;
  }
</style>