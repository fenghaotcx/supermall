<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isAction">
      <slot name="item-icom"></slot>
    </div>
    <slot v-else name="item-icom-act"></slot>
    <div :style="actionStyle">
      <slot name="iten-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {
      // isAction: false,
    };
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
    }
  },
  props: {
    path: String,
    actionColor : {
      type: String,
      default: 'red'
    }
  },
    computed: {
    isAction() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    actionStyle() {
      return this.isAction ? {color: this.actionColor} : {}
    } 
  }
};
</script>

<style  scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
}

/* .action {
  color: red;
} */
</style>