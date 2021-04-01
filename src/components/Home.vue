<template>
<div class="home">
  <VdrMenu menuStyle="white" />
  <div class="home-container">
    <div class="home-content">
    <div class="header">Découvrez la ville qui vous correspond</div>
      <p>Un jardin à la campagne, une vue sur mer, un chalet au grand air.... Dites nous  ce qui vous fait rêver,
        nous vous proposerons la ville qui vous correspond le  mieux.
      </p>
      <router-link to="/steps">
        <div class="find-button">Trouver ma ville de reve</div>
      </router-link>
    </div>
  </div>
</div>
</template>

<script>

import VdrMenu from "@/components/menu/VdrMenu";

export default {
name: "Home",
components:{
  VdrMenu
}
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.home-container{
  height: calc(100vh - 90px);
  margin-top: 90px;
  width: 100%;
  padding: 60px 110px;
  box-sizing: border-box;
  background-image: url("../assets/illustration.svg");
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  .home-content{
    width: 546px;
    font-family: 'Josefin', serif;
    .header{
      font-size: 52px;
      color: $dark-blue-gray-color;
      margin-bottom: 21px;
    }
    p{
      font-family: 'Inter', serif;
      font-size: 16px;
      color: $dark-blue-gray-color;
      width: 80%;
      margin-bottom: 25px;
    }
    .find-button{
      width: 298px;
      height: 55px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      background: $coral-color;
      font-size: 18px;
      border-radius: 30px;
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 730px) {
  .home-container{
    background-image: url("../assets/mob-home-illustration.svg");
    background-size: 100% 58%;
    background-position: bottom;
    padding: 60px 20px;
    display: flex;
    justify-content: center;

    .home-content{
      display: flex;
      flex-direction: column;
      align-items: center;
      .header{
        font-size: 38px;
        text-align: center;
      }
      p{
        font-size: 14px;
        text-align: center;
      }
      .find-button{
        width: 244px;
        height: 45px;
        font-size: 14px;
      }
    }
  }
}
</style>