<template>
  <div class="navbar">
    <router-link to="/timetable">РАСПИСАНИЕ</router-link>
    <router-link to="/about">ФОРМИРОВАНИЕ РАСПИСАНИЯ</router-link>
    <router-link to="/">СОСТАВ КАФЕДРЫ</router-link>
  </div>
</template>

<script>
export default {
name: "navbar"
}
</script>

<style scoped>
  .navbar {
    display: flex;
    justify-content: space-around;

    margin: 0 auto;
    padding-top: 30px;
    padding-bottom: 10px;

    border-bottom: 4px solid var(--mosit-gray-color);
    font-size: 20px;
  }

  .navbar a {
    text-decoration: none;
    font-weight: bold;
    color: var(--main-text-color);
  }

  .navbar a.router-link-exact-active {
    color: var(--mosit-gray-color);
    /*text-decoration: underline;*/
  }
</style>