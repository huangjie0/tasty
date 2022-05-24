<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
export default {
  name: 'App',
  components:{
    Header
  }
}
</script>

<style>
#app{
  width: 1440px;
  margin: 0 auto;
  padding: 0 120px;
  height: 100vh;
}
</style>
