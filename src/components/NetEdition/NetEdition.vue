<template>
  <div name="Container" id="Container">
    <NavigationButtonContainer>
      <NavigationButton button-name="参数修改" jump-to="/NetEdition/VarEdition">参数修改</NavigationButton>
      <NavigationButton button-name="参数显示" jump-to="/NetEdition/VarDisplay">参数显示</NavigationButton>
    </NavigationButtonContainer>
    <div name="Main" id="Main">
      路网编辑
      <transition mode="out-in">    <!--给route-view 添加动画 必须要使用transition 标签包裹 并设置模式先出后进-->>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import NavigationButton from "@/components/Navigation/navigation-button";
import NavigationButtonContainer from "@/components/Navigation/navigation-button-container";

export default {
  name: 'NetEdition',
  components: {NavigationButtonContainer, NavigationButton},
  methods: {
    jump(path) {
      //this.$router.push("/cart")
      //传递的参数用{{ $route.query.goodsId }}获取
      this.$router.push({path: path})
    }
  }
}
</script>

<style scoped>
* {
  font-size: .14rem;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#Main {
  /*background-color: forestgreen;*/
  width: 17.2rem;
  height: 6rem;
}

#Container {
  display: flex;
  flex-direction: row;
}



/*路由切换过渡*/
.v-enter, .v-leave-to {
  opacity: 0;
  /*transform: translate(0,200px)*/
}

.v-enter-active, .v-leave-active {
  transition: all .2s ease-in-out;
}
</style>
