<template>
  <div id="detail">
    <detail-child class="detail-ch"></detail-child>
    <scroll class="content">
      <detail-swiper :topImages="topImages" :current-index="currentIndex"></detail-swiper>
      <detail-base-info :goods="goods" class="base-info" />
      <detail-shop-info :shop="shop" class="base-info" />
      <detail-goods-info :detailInfo="detailInfo" class="base-info"/>
      <detail-param-info :paramInfo="paramInfo" class="base-info"/>
    </scroll>
  </div>
</template>

<script>
import { getDetailGoods, Goods, GoodsParam, Shop } from "@/network/home";
import DetailChild from "./detailChild/DetailChild";
import DetailSwiper from "./detailChild/DetailSwiper";

import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import Scroll from "@/components/common/scroll/Scroll";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";

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
      currentIndex: 0
    };
  },
  components: {
    DetailChild,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo
  },
  created() {
    (this.iid = this.$route.query.iid),
      getDetailGoods(this.iid).then(res => {
        const data = res.result;
        console.log(res);
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
  }
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