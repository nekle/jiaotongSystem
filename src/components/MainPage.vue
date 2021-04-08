<template>
  <dv-full-screen-container style="background: url('http://localhost:8086/backgroundImg.jpg');overflow-y: scroll;">

      <dv-border-box-10 class="navigation-border-box">
        <div name="navigation" id="navigation">
          <NavigationButton button-name="项目管理" jump-to="/ProjectManagement"></NavigationButton>
          <NavigationButton button-name="路网编辑" jump-to="/NetEdition"></NavigationButton>
          <NavigationButton button-name="方案设置" jump-to="/PlanSettings"></NavigationButton>
          <NavigationButton button-name="预测执行" jump-to="/PredictionRunning"></NavigationButton>
          <NavigationButton button-name="帮助" jump-to="/Help"></NavigationButton>
        </div>
      </dv-border-box-10>

      <dv-border-box-10>

        <transition mode="out-in"> <!--给route-view 添加动画 必须要使用transition 标签包裹 并设置模式先出后进-->>
          <keep-alive>
            <router-view v-if='$route.meta.keepAlive'></router-view>
          </keep-alive>
        </transition>

        <transition mode="out-in"> <!--给route-view 添加动画 必须要使用transition 标签包裹 并设置模式先出后进-->>
          <router-view v-if='!$route.meta.keepAlive'></router-view>
        </transition>

      </dv-border-box-10>

  </dv-full-screen-container>
</template>

<script>
import NavigationButton from "@/components/Navigation/navigation-button";

export default {
  name: 'MainPage',
  components: {
    NavigationButton
  },
  data() {
    return {}
  },
  methods: {
    jump(path) {
      //this.$router.push("/cart")
      //传递的参数用{{ $route.query.goodsId }}获取
      this.$router.push({path: path})
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
* {
  text-decoration: none;
  margin: 0;
  border: 0;
  box-sizing: border-box;
  font-family: Helvetica;
  font-size: .14rem;
}

.navigation-border-box {
  width: 10rem;
  height: 1rem;
}

#navigation {
  width: auto;
  height: 100px;
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-direction: row;
  justify-content: flex-start; /*水平左对齐*/
  align-items: center; /*垂直居中*/
  text-decoration: none;
}

#navigation button {
  height: 80px;
  width: 160px;

  /*border-radius: 20px;*/
}

#navigation .a {
  height: 80px;
  width: 160px;

  /*border-radius: 20px;*/
}


#navigation button:focus {
  background-color: lightblue;
}

.router-link-active {
  text-decoration: none;
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
