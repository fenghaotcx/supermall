<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" actionColor='red'>
        <img slot="item-icom" src="./assets/img/bg2.jpg" alt="">
        <img slot="item-icom-act" src="./assets/img/bg3.jpg" alt="">
        <div slot="iten-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" actionColor='red'>
        <img slot="item-icom" src="./assets/img/bg2.jpg" alt="">
        <img slot="item-icom-act" src="./assets/img/bg3.jpg" alt="">
        <div slot="iten-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" actionColor='red'>
        <img slot="item-icom" src="./assets/img/bg2.jpg" alt="">
        <img slot="item-icom-act" src="./assets/img/bg3.jpg" alt="">
        <div slot="iten-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" actionColor='red'>
        <img slot="item-icom" src="./assets/img/bg2.jpg" alt="">
        <img slot="item-icom-act" src="./assets/img/bg3.jpg" alt="">
        <div slot="iten-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar'
import TabBarItem from './components/tabbar/TabBarItem'
export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
  @import './assets/css/base.css'
</style>
