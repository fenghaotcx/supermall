<template>
  <div>
    <nav-bar >
      <div slot="left" class="back" @click="back">
        <img src="@/assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" :key="index" class="title-item" @click="titleClick(index)" :class="{action:currentIndex==index}" ref="nav">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "DetailChild",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index,
      this.$emit('titleClick',index)
    },
    back() {
      this.$router.back()
    }
  }
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
.action {
  color: var(--color-high-text);
}
.back img{
  margin-top: 10px;
  margin-left: 5px
}
</style>