<template>
    <div id="menu" class="vdr-menu" :class="[menuStyle === 'white' ? 'vdr-white-menu' : 'vdr-blue-menu']">
      <div v-if="!isMobMenuOpened" class="menu-content">
        <div @click="$router.push({ name: 'home' })" class="menu-logo">
          <img v-if="menuStyle === 'white'" src="../../assets/logo-blue-light.svg" alt="Logo-blue-light">
          <img v-else src="../../assets/logo-white.svg" alt="Logo-blue-light">
        </div>
        <div class="menu-items">
          <div>Carte des allegies</div>
          <div>Les villes préférés des francais</div>
        </div>
        <div class="mob-menu-icon" @click="openMobMenu">
          <img v-if="menuStyle === 'white'" src="../../assets/mob-menu-icon-blue.svg" alt="mob-menu-icon-blue">
          <img v-else src="../../assets/mob-menu-icon-white.svg" alt="mob-menu-icon-white">
        </div>
      </div>
      <div v-else class="mob-menu-dropdown">
        <div class="mob-menu-close-btn" @click="openMobMenu"><img src="../../assets/mob-menu-close-icon.svg" alt="mob-menu-close-icon"></div>
        <div class="mob-menu-items">
          <div>Carte des allegies</div>
          <div>Les villes préférés des francais</div>
        </div>
      </div>
    </div>
</template>

<script>


export default {
  name: "VdrMenu",
  props: {
    menuStyle: {
      type: String,
      default: 'blue'
    }},

    data: function ()  {
       return {
         isMobMenuOpened: false
       }

    },

  methods: {
    openMobMenu: function (){
      this.isMobMenuOpened = !this.isMobMenuOpened;
      document.getElementById('menu').style.height = this.isMobMenuOpened ? '200px' : '90px';

    }
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/variables";

.vdr-menu{
  z-index: 1;
  position: fixed;
  top:0;
  font-family: 'Inter', serif;
  font-size: 16px;
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;

  .menu-content{
    width: 85%;
    height: 27px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .menu-logo{
      cursor: pointer;
      padding: 5px;
      img{
        width: 187px;
        height: 31px;
      }
    }

    .menu-items{
      div{
        padding: 5px;
        cursor: pointer;
      }
      width: 412px;
      margin: 0 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .mob-menu-icon{
      display: none;
    }

  }
}

.vdr-white-menu{
 color: $dark-blue-gray-color;
}

.vdr-blue-menu{
  color: #ffff;
  background: $bright-blue-color;
}

.mob-menu-dropdown{
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: $dark-blue-gray-color;
  font-family: 'Inter', serif;
  font-size: 14px;
  .mob-menu-close-btn{
    width: 100%;
    cursor: pointer;
    img{
      float: right;
      width: 24.04px;
      height: 23.33px;
      padding: 10px 30px;
    }
  }
  .mob-menu-items{
    color: #fff;
    width: 270px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div{
      margin-bottom: 17px;
    }
  }
}

@media screen and (max-width: 730px) {
  .menu-items {
    display: none !important;
  }
  .mob-menu-icon{
    display: block !important;
    cursor: pointer;
    img{
      width: 50px;
      height: 14px;
    }
  }
}
</style>