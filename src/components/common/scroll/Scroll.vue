<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"

  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },

    methods: {
      scrollTop(x, y, time = 300) {
        this.scroll.scrollTo(x, y, time);
      },
      finishPullUp() {
        this.scroll.finishPullUp()
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {//页面挂载完毕钩子
      this.scroll = new BScroll(this.$refs.wrapper,{ //
        click: true, //里面按钮可点击
        probeType: this.probeType, //监听滚动
        pullUpLoad: this.pullUpLoad //监听滚定到最底层
      }),

      this.scroll.on('scroll',(position)=>{
        this.$emit('scroll',position)
      }),

      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
         
      })

    }
  }
</script>

<style scoped>
</style>