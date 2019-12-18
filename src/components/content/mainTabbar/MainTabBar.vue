<template>
  <tab-bar>
    <tab-bar-item path="/home" actionColor="red">
      <img slot="item-icom" src="../../../assets/img/tabbar/home.svg" alt />
      <img slot="item-icom-act" src="../../../assets/img/tabbar/home_active.svg" alt />
      <div slot="iten-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" actionColor="red">
      <img slot="item-icom" src="../../../assets/img/tabbar/category.svg" alt />
      <img slot="item-icom-act" src="../../../assets/img/tabbar/category_active.svg" alt />
      <div slot="iten-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" actionColor="red">
      <img slot="item-icom" src="../../../assets/img/tabbar/cart.svg" alt />
      <img slot="item-icom-act" src="../../../assets/img/tabbar/cart_active.svg" alt />
      <div slot="iten-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" actionColor="red">
      <img slot="item-icom" src="../../../assets/img/tabbar/profile.svg" alt />
      <img slot="item-icom-act" src="../../../assets/img/tabbar/profile_active.svg" alt />
      <div slot="iten-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../../common/tabbar/TabBar";
import TabBarItem from "./TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBarItem,
    TabBar
  }
};
</script>

<style  scoped>
</style>