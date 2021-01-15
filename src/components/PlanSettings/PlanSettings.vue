<template>
    <div name="Container" id="Container">
        <div name="Nav" id="Nav">
            <button @click="jump('/ResidentPoints')">居民点</button>
            <button @click="jump('/PublicVehicleSources')">公共车辆源</button>
            <button @click="jump('/RestrictSector')">限速路段</button>
            <button>安置点</button>
            <button>其他设置</button>
            <button :disabled="changeStatus" @click="submitChange">提交修改</button>
        </div>
        <div name="Main" id="Main">
            <div id="ListArea">
                <transition mode="out-in">    <!--给route-view 添加动画 必须要使用transition 标签包裹 并设置模式先出后进-->>
                <router-view @changeEvent="change($event)"></router-view>
                </transition>
            </div>
            <div id="PointGraph">
                点图
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PlanSettings',
  data(){
    return{
        changeStatus: 0
    }
  },
  methods:{
    jump(path){
      //this.$router.push("/cart")
      //传递的参数用{{ $route.query.goodsId }}获取
      this.$router.push({path: path})
    },
    change(changeStatus){
      this.changeStatus = changeStatus;
      this.changeStatus = false;
      // console.log(3)
      // console.log(this.changeStatus)
    },
    submitChange(){
      this.changeStatus = true;
    }
  }
}
</script>

<style scoped>
    #Main {
        background-color: forestgreen;
        width: 100%;
        height: 600px;
        display: flex;
        flex-direction: row;
    }
    #Container {
        display: flex;
        flex-direction: row;
    }
    #Container #Nav{
        display: flex;
        flex-direction: column;
        background-color: bisque;
    }
    #Nav button{
        height: 80px;
        width: 160px;
    }
    #Nav button:focus{
        background-color: lightblue;
    }
    /*路由切换过渡*/
    .v-enter,.v-leave-to{
        opacity: 0;
        /*transform: translate(0,200px)*/
    }
    .v-enter-active,.v-leave-active{
        transition: all .2s ease-in-out;
    }

    #ListArea {
        width: 320px;
        height: 100%;
        background-color: red;
        margin-left: 100px;
    }
    #PointGraph {
        width: 880px;
        height: 100%;
        background-color: green;
        margin-left: 200px;
    }
</style>