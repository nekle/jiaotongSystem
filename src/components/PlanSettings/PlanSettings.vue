<template>

  <div name="Container" id="Container">

    <NavigationButtonContainer>
      <NavigationButton button-name="其他设置" jump-to="/PlanSettings/OtherSettings"></NavigationButton>
      <NavigationButton button-name="提交修改" :disabled="changeStatus" @click.native="submitChange"></NavigationButton>
    </NavigationButtonContainer>

    <div name="Main" id="Main">

      <div id="ListArea">
        <transition mode="out-in">    <!--给route-view 添加动画 必须要使用transition 标签包裹 并设置模式先出后进-->>
          <router-view @changeEvent="change($event)"></router-view>
        </transition>
      </div>

          <TMap></TMap>

    </div>

  </div>


</template>

<script>
// import SuperMap from '@/components/Help/SuperMap';
import TMap from '@/components/Help/TMap';
import NavigationButtonContainer from "@/components/Navigation/navigation-button-container";
import NavigationButton from "@/components/Navigation/navigation-button";

export default {
  name: 'PlanSettings',
  components: {
    NavigationButton,
    NavigationButtonContainer,
    // SuperMap
    TMap,
  },
  data() {
    return {
      changeStatus: 0,
      crosses: [],
    }
  },
  methods: {
    log(content){
      console.log(content)
    },
    jump(path) {
      //this.$router.push("/cart")
      //传递的参数用{{ $route.query.goodsId }}获取
      this.$router.push({path: path})
    },
    change(changeStatus) {
      this.changeStatus = changeStatus;
      this.changeStatus = false;
      // console.log(3)
      // console.log(this.changeStatus)
    },
    submitChange() {
      this.changeStatus = true;
    },

  },
  mounted() {
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
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: row;
}

#Container {
  display: flex;
  flex-direction: row;
}

#Container #Nav {
  display: flex;
  flex-direction: column;
  background-color: bisque;
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

#ListArea {
  width: 3.2rem;
  height: 100%;
  margin-left: 1rem;
}

.PointGraph {
  position: relative;
  box-sizing: border-box;
  width: 5.2rem;
  height: 5.2rem;
  padding: .1rem;
  /*margin-left: 50px;*/
}


</style>
