<template>
  <div class="header">
    <div class="info">
      <div class="name">
        <img src="../../assets/logo-mosit.svg" alt="MOSIT" class="logo">
        <h1>КАФЕДРА <span>М</span>АТЕМАТИЧЕСКОГО <span>О</span>БЕСПЕЧЕНИЯ И <span>С</span>ТАНДАРТИЗАЦИИ <span>И</span>НФОРМАЦИОННЫХ <span>Т</span>ЕХНОЛОГИЙ</h1>
      </div>
      <div class="site-mark">ВНУТРЕННИЙ САЙТ</div>
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
    font-size: var(--header-text-font-size);
  }

  .header > .info {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .header > .info > .name {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .header > .info > .name > h1 {
    text-align: left;
    font-size: var(--header-font-size);
    max-width: 65%;
  }

  .header > .info > .name > h1 > span {
    color: var(--mosit-gray-color);
  }

  .header > .info > .name > .logo {
    height: 90px;
    margin-right: 20px;
  }

  .header > .info > .site-mark {
    margin-left: auto;
  }

  @media all and (max-width: 960px), all and (device-width: 960px) {
    .header > .info > .name > .logo {
      height: 80px;
    }
  }

  @media all and (max-width: 768px), all and (device-width: 768px) {
    .header > .info {
      flex-direction: column;
    }

    .header > .info > .name {
      justify-content: space-around;
    }

    .header > .info > .name > h1 {
      max-width: 100%;
    }

    .header > .info > .name > .logo {
      height: 90px;
    }

    .header > .info > .site-mark {
      margin: auto;
    }
  }

  @media all and (max-width: 425px), all and (device-width: 425px) {
    .header > .info > .name > h1 {
      text-align: center;
    }

    .header > .info > .name > .logo {
      margin-left: 10px;
      height: 100px;
    }

    .header > .info > .site-mark {
      margin-top: 10px;
    }
  }
</style>