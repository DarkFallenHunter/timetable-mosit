<template>
  <div class="class-container">
    <div class="name">{{ classInfo['name'] }}</div>
    <div class="group">{{ classInfo['group'] }}</div>
    <div
        class="type"
        :class="{ practice: classType.toLowerCase() === 'пр', lecture: classType.toLowerCase() === 'лк' }"
    >
      {{ classType.toUpperCase() }}
    </div>
    <div class="weeks" v-if="'week_nums' in classInfo">{{ weeks }}</div>
    <div class="room">ауд. <i>{{ classInfo['room'] }}</i></div>
  </div>
</template>

<script>
export default {
  name: "class",
  props: {
    classHeader: {
      type: String,
      require: true
    },
    classInfo: {
      type: [Object, Number],
      required: true
    }
  },
  computed: {
    weeks: function () {
      const weekNums = this.classInfo['week_nums'];
      const firstWeekNum = weekNums[0];
      const weeksSum = weekNums.reduce((a, b) => a + b, 0);
      if (firstWeekNum === 1 && weeksSum === 64)
        return '1-15 н.';
      else if (firstWeekNum === 2 && weeksSum === 72 )
        return '2-16 н.';
      else
        return weekNums.join(', ') + ' н.';
    },
    classType: function() { return this.classInfo['type'] }
  }
}
</script>

<style scoped>
  .class-container {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, min-content);

    align-items: center;

    font-size: calc(var(--baze-font-size) - 2px );
    white-space: pre-wrap;
  }

  .class-container > .name {
    grid-column-start: 1;
    grid-column-end: 4;

    font-weight: bold;
  }

  .class-container > .group {
    grid-column-start: 1;
    grid-column-end: 4;

    padding: 5px 0;

    font-style: italic;
  }

  .class-container > .room {
    grid-column-start: 3;
  }

  .lecture {
    color: darkgreen;
  }

  .practice {
    color: darkgoldenrod;
  }
</style>