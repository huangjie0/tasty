<template>
  <div id="app">
    <Loading v-if="isLoading"/>
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Loading from '@/components/loading/Loading.vue'
import {mapState} from 'vuex'
export default {
  name: 'App',
  components:{
    Header,
    Loading
  },
  computed:{
    ...mapState({
      'isLoading':state=>state.loading.isLoading
    })
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
