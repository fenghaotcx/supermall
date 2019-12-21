<template>
  <div>
    <el-carousel :interval="3000" arrow="arrow">
      <el-carousel-item v-for="item in topImages" :key="item">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Elswiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  }
};
</script>

<style scoped>
  .el-carousel__item img {
    width: 100%;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
</style>