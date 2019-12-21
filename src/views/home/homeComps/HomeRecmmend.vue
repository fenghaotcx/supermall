<template>
  <div class="recmmend">
    <div v-for="(item,index) in recommends" :key="index" class="recmmend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecmmend",
    props:{
      recommends:{
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recmmend {
    display: flex;
    width: 100%;
    text-align: center;
    background-color: #fff;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 8px  solid #eee
  }

  .recmmend-item {
    flex: 1;
  }

  .recmmend-item img {
    width: 67px;
    height: 67px;
    margin-bottom: 10px;
  }

</style>