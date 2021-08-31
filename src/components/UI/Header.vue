<template>
  <div class="header">
    <div class="info">
      <img src="../../assets/logo-mosit.svg" alt="MOSIT" class="logo">
      <h1>КАФЕДРА <span>М</span>АТЕМАТИЧЕСКОГО <span>О</span>БЕСПЕЧЕНИЯ И <span>С</span>ТАНДАРТИЗАЦИИ <span>И</span>НФОРМАЦИОННЫХ <span>Т</span>ЕХНОЛОГИЙ</h1>
      <div class="site-name">ВНУТРЕННИЙ САЙТ</div>
<!--      <div class="contacts">-->
<!--        <div class="phone">8(999)999-99-99</div>-->
<!--        <div class="e-mail">mosit@mirea.ru</div>-->
<!--      </div>-->
    </div>
    <navbar></navbar>
  </div>
</template>

<script>

</script>

<style scoped>
  .header {
    padding: 10px 0;
    font-size: 25px;
  }

  .header > .info {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .header > .info > h1 {
    text-align: left;
    font-size: 30px;
    max-width: 65%;
  }

  .header > .info > h1 > span {
    color: var(--mosit-gray-color);
  }

  .header > .info > .logo {
    height: 90px;
    margin-right: 20px;
  }

  .header > .info > .site-name {
    margin-left: auto;
  }
</style>