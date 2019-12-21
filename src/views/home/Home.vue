<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="['流行','新款','精选']"
      class="tab-control"
      @itemClick="tabClick"
      v-show="isTabFixed"
      ref="tabContol1"
    />
    <scroll
      class="content"
      ref="scroll"
      @scroll="topIsShow"
      :probeType="3"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImgLoad="swImgLoad"></home-swiper>
      <home-recmmend :recommends="recommends" />
      <feature />
      <tab-control
        :titles="['流行','新款','精选']"
        class="tab-control"
        @itemClick="tabClick"
        ref="tabContol"
      />
      <goods-item :goods="showGoods"></goods-item>
    </scroll>
    <back-top @click.native="topClick" v-show="isShow" />
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/homeComps/HomeSwiper";
import HomeRecmmend from "@/views/home/homeComps/HomeRecmmend";
import Feature from "@/views/home/homeComps/Feature";
import { getHomeMultidata, getHomeGoods } from "@/network/home";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsItem from "@/components/content/goods/GoodsItem";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/common/backTop/BackTop";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecmmend,
    Feature,
    TabControl,
    GoodsItem,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShow: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    //事件监听
    tabClick(index) {
      this.$refs.tabContol1.currentIndex = index;
      this.$refs.tabContol.currentIndex = index;
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },

    topClick() {
      this.$refs.scroll.scrollTop(0, 0, 500);
    },

    topIsShow(position) {
      this.isShow = -position.y > 1000;
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },

    loadMore() {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.scroll.refresh();
    },

    swImgLoad() {
      this.tabOffsetTop = this.$refs.tabContol.$el.offsetTop;
    },

    //网络请求
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      let page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    }
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  activated() {
    this.$refs.scroll.scrollTop(0,this.saveY,0)
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y
  }
};
</script>

<style scoped>
#home {
  /*position: relative;*/
  height: 100vh;
}

.home-nav {
  width: 100%;
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  z-index: 9;
}

.tab-control {
  top: 44px;
  position: sticky;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

.fixed {
  position: fixed;
  right: 0;
  left: 0;
  top: 44px;
}
</style>