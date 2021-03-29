<template>
    <div name="Container" id="Container">
        <div name="Nav" id="Nav">
            <button class="button button-3d button-royal" @click="jump('/ProjectCreation')">项目新建</button>
            <button class="button button-3d button-royal" @click="jump('/ProjectOpen')">项目打开</button>
            <button class="button button-3d button-royal" @click="jump('/ProjectClose')">项目关闭</button>
        </div>
        <div name="Main" id="Main">
            <transition mode="out-in">    <!--给route-view 添加动画 必须要使用transition 标签包裹 并设置模式先出后进-->>
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
  name: 'projectManagement',
  methods: {
    jump(path){
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
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: "Helvetica";
        text-decoration: none;
    }
    #Main {
        background-color: white;
        width: 100%;
        height: 600px;
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
</style>
