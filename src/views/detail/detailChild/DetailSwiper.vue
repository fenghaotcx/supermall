<template>
  <div class="detail-swiper">
    <elswiper :topImages="topImages"></elswiper>
  </div>
</template>

<script>
import Elswiper from '@/components/common/swiper/Elswiper'
export default {
  name: "DetailSwiper",
  components: {
    Elswiper
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.swiper-item {
  height: 300px;
  overflow: hidden;
}
</style>