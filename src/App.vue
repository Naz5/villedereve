<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>



export default {
  name: 'App',
  components: {

  }
}
</script>

<style lang="scss">

html, body, #app {
margin: 0;
padding: 0;
}
a{
  text-decoration:none;
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .35s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
