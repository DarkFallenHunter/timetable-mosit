<template>
  <div class="cls-info">
    <div class="class-placeholder" v-if="typeof classInfo === 'number'"></div>
    <div class="class-container" v-else>
      <div class="name">{{ classInfo.name }}</div>
      <div class="group">{{ classInfo.group }}</div>
      <div class="type">{{ classInfo.type }}</div>
      <div class="room">{{ classInfo.room }}</div>
      <div class="weeks" v-if="'week_nums' in classInfo">{{ classInfo.week_nums }}</div>
    </div>
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
  }
}
</script>

<style scoped>
  .cls-info {
    justify-content: space-around;
    border: 1px solid var(--tt-brd-clr);
    border-top: none;
    border-left: none;

    font-size: 16px;
    word-wrap: anywhere;
  }

  .class-placeholder {
    height: 100%;
    background-color: var(--tt-placaholder-bg-clr);
  }

  .cls-info > .class-container {
    padding: 10px;
  }
</style>