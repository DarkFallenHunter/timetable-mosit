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
  --mosit-gray-color: #737373;
  --main-text-color: black;
  --tt-head-bg-clr: gray;
  --tt-head-clr: white;
  --tt-head-brd-clr: black;
  --tt-bg-color: white;
  --tt-clr: var(--main-text-color);
  --tt-brd-clr: var(--mosit-gray-color);
  --tt-placaholder-bg-clr: whitesmoke;
}

select {
  outline: none;
}

.app {
  padding: 0 10%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--main-text-color);
  font-size: 18px;
}
</style>
