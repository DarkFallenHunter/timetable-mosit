<template>
  <div class="navbar">
    <router-link to="/">РАСПИСАНИЕ</router-link>
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

    margin: 0 var(--app--horiz-padding);
    padding-top: 30px;
    padding-bottom: 10px;

    border-bottom: 4px solid var(--mosit-black-color);
    font-size: var(--navbar-font-size);
  }

  .navbar a {
    text-decoration: none;
    font-weight: bold;
    color: var(--main-text-color);
  }

  .navbar a.router-link-exact-active {
    color: var(--mosit-black-color);
  }
</style>