<template>
  <div class="cls-info">
    <div class="class-placeholder" v-if="typeof classInfo === 'number'"></div>
    <div class="class-container" v-else>
      <div class="name">{{ classInfo.name }}</div>
      <div class="group">{{ classInfo.group }}</div>
      <div class="type">{{ classInfo.type }}</div>
      <div class="aud">{{ classInfo.aud }}</div>
      <div class="prof">{{ classInfo.prof }}</div>
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
  .class-placeholder {
    height: 100%;
    background-color: whitesmoke;
  }

  .cls-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-right: 1px solid var(--mosit-gray-color);
  }

  .cls-info:last-child {
    border-right: none;
  }
</style>