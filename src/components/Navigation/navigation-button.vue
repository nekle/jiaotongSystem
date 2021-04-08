<template>
  <dv-border-box-12 class="button-border-box">
    <button
        class="button button-glow button-rounded button-royal navigation-button"
        @click="jump(jumpTo)"
        :disabled="disabled"
    >{{ buttonName }}
    </button>
  </dv-border-box-12>
</template>

<script>
export default {
  name: "NavigationButton",
  props: ['buttonName', 'jumpTo', 'disabled'],
  methods: {
    jump(path) {
      //this.$router.push("/cart")
      //传递的参数用{{ $route.query.goodsId }}获取
      this.$router.push({path: path})
    }
  },
}
</script>

<style scoped>
.button-border-box {
  width: 2rem;
  height: 1rem;
}

.navigation-button {
  background-color: rgba(0, 0, 0, .3);
  width: 2rem;
  height: 1rem;
}
</style>