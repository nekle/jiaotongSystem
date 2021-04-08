<template>
  <div name="Container" id="Container">
    <NavigationButtonContainer>
      <NavigationButton button-name="仿真执行" jump-to="/PredictionRunning/SimRunning"></NavigationButton>
      <NavigationButton button-name="车辆时间"></NavigationButton>
      <NavigationButton button-name="集合等待"></NavigationButton>
      <NavigationButton button-name="撤离时间"></NavigationButton>
      <NavigationButton button-name="集体统计"></NavigationButton>
      <NavigationButton button-name="计量统计"></NavigationButton>
    </NavigationButtonContainer>
    <div name="Main" id="Main">
      <transition mode="out-in"> <!--给route-view 添加动画 必须要使用transition 标签包裹 并设置模式先出后进-->>
        <keep-alive>
          <router-view v-if='$route.meta.keepAlive'></router-view>
        </keep-alive>
      </transition>

      <transition mode="out-in"> <!--给route-view 添加动画 必须要使用transition 标签包裹 并设置模式先出后进-->>
        <router-view v-if='!$route.meta.keepAlive'></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import NavigationButtonContainer from "@/components/Navigation/navigation-button-container";
import NavigationButton from "@/components/Navigation/navigation-button";

export default {
  name: 'PredictionRunning',
  components: {
    NavigationButton,
    NavigationButtonContainer,
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
#Main {
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  height: 600px;
}

#Container {
  display: flex;
  flex-direction: row;
}

#Nav button {
  height: 80px;
  width: 160px;
}

#Nav button:focus {
  background-color: lightblue;
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