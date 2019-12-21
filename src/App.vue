<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive> 
    <main-tab-bar class="main-tabBar"></main-tab-bar>

  </div>
</template>

<script>
import MainTabBar from './components/content/mainTabbar/MainTabBar'
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import  './assets/css/base.css';
  .main-tabBar {
    background-color: #fff;
    z-index: 9;
  }
</style>
