<template>
  <Header></Header>
  <router-view/>
  <footer style="height: 20px"></footer>
</template>

<script>
import Header from "@/components/UI/Header";
export default {
  components: {Header}
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  --mosit-blue-color: #164060;
  --mosit-gray-color: #CCCCCC;
  --mosit-white-color: #EFEFEF;
  --mosit-black-color: #282828;
  --main-text-color: black;
  --tt-head-bg-clr: gray;
  --tt-head-clr: white;
  --tt-head-brd-clr: black;
  --tt-bg-color: white;
  --tt-clr: var(--main-text-color);
  --tt-brd-clr: var(--mosit-gray-color);
  --tt-placaholder-bg-clr: whitesmoke;
  --week-day: 2;
  --baze-font-size: 18px;
  --header-font-size: 30px;
  --header-text-font-size: 25px;
  --navbar-font-size: 20px;
  --selecter-font-size: 16px;
  --baze-font-family: 'Exo2', Arial, sans-serif;
  --app--horiz-padding: 10%;
}

select {
  outline: none;
}

@font-face {
  font-family: "Exo2";
  src: url("assets/fonts/Exo2-VariableFont_wght.ttf") format("opentype");
}

.app {
  font-family: var(--baze-font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--main-text-color);
  font-size: var(--baze-font-size);
}

.no-select {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@media all and (max-width: 1024px), all and (device-width: 1024px) {
  * {
    --baze-font-size: 18px;
    --header-font-size: 25px;
    --header-text-font-size: 20px;
    --navbar-font-size: 16px;
    --selecter-font-size: 16px;
    --app-horiz-padding: 5%;
  }
}

@media all and (max-width: 768px), all and (device-width: 768px) {
  * {
    --baze-font-size: 18px;
    --header-font-size: 22px;
    --navbar-font-size: 18px;
    --selecter-font-size: 18px;
    --app--horiz-padding: 2%;
  }
}

@media all and (max-width: 425px), all and (device-width: 425px) {
  * {
    --header-font-size: 22px;
    --baze-font-size: 20px;
  }
}
</style>
