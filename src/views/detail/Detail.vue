<template>
  <div id="detail">
    <detail-child class="detail-ch" @titleClick="detailClick"></detail-child>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
      <detail-swiper :topImages="topImages" :current-index="currentIndex"></detail-swiper>
      <detail-base-info :goods="goods" class="base-info" ref="base" />
      <detail-shop-info :shop="shop" class="base-info" />
      <detail-goods-info :detailInfo="detailInfo" class="base-info" />
      <detail-param-info :paramInfo="paramInfo" class="base-info" ref="param" />
      <detail-comment-info :commentInfo="commentInfo" ref="comment" />
      <goods-item :goods="recommendList" ref="recommend" />
    </scroll>
    <detail-bottom-bar @addToCart="addCart"></detail-bottom-bar>
  </div>
</template>

<script>
import {
  getDetailGoods,
  Goods,
  GoodsParam,
  Shop,
  getRecommend
} from "@/network/home";
import DetailChild from "./detailChild/DetailChild";
import DetailSwiper from "./detailChild/DetailSwiper";

import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import Scroll from "@/components/common/scroll/Scroll";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import GoodsItem from "@/components/content/goods/GoodsItem";
import DetailBottomBar from "./childComps/DetailBottomBar";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendList: [],
      themeTops: [],
      currentIndex: 0,
      themeTops: [],
      falg: true
    };
  },
  components: {
    DetailChild,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsItem,
    DetailBottomBar
  },
  created() {
    (this.iid = this.$route.query.iid),
      getDetailGoods(this.iid).then(res => {
        const data = res.result;
        this.topImages = data.itemInfo.topImages;
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        this.shop = new Shop(data.shopInfo);

        // 2.5.获取商品信息
        this.detailInfo = data.detailInfo;

        // 2.6.保存参数信息
        this.paramInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );

        // 2.7.保存评论信息
        if (data.rate.list) {
          this.commentInfo = data.rate.list[0];
        }
      });

    getRecommend().then(res => {
      console.log(res);
      this.recommendList = res.data.list;
    });
    this.$nextTick(() => {});
  },
  methods: {
    detailClick(index) {
      if (this.falg) {
        this.themeTops = [0];
        this.themeTops.push(this.$refs.param.$el.offsetTop);
        this.themeTops.push(this.$refs.comment.$el.offsetTop);
        this.themeTops.push(this.$refs.recommend.$el.offsetTop);
        this.falg = false;
      }
      this.$refs.scroll.scrollTop(0, -this.themeTops[index], 200);
    },

    contentScroll(position) {
      let positionY = -position.y;
      this.listenScrollTheme(positionY);
    },
    listenScrollTheme(positionY) {
      let length = this.themeTops.length;
      for (let i = 0; i < length; i++) {
        let iPos = this.themeTops[i];
        if (positionY >= iPos && positionY < this.themeTops[i + 1]) {
          if (this.currentIndex !== i) {
            this.currentIndex = i;
          }
          break;
        }
      }
    },
    addCart() {
      const obj = {};
      // 2.对象信息
      obj.iid = this.iid;
      obj.imgURL = this.topImages[0];
      obj.title = this.goods.title;
      obj.desc = this.goods.desc;
      obj.newPrice = this.goods.nowPrice;
      // 3.添加到Store中
      this.$store.commit("addCart", obj);
    }
  },
  updated() {}
};
</script>

<style scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 10;
  background-color: #fff;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 60px;
}

.back-top {
  position: fixed;
  right: 10px;
  bottom: 65px;
}

.base-info {
  background-color: #fff;
}

.detail-ch {
  position: relative;
  z-index: 100;
  background-color: #fff;
}
</style>