<template>
    <div>
        <div name="navigation" id="navigation">
            <button class="button button-glow button-rounded button-royal" @click="jump('/ProjectManagement')">项目管理</button>
            <button class="button button-glow button-rounded button-royal" @click="jump('/NetEdition')">路网编辑</button>
            <button class="button button-glow button-rounded button-royal" @click="jump('/PlanSettings')">方案设置</button>
            <button class="button button-glow button-rounded button-royal" @click="jump('/SimRunning')">预测执行</button>
            <button class="button button-glow button-rounded button-royal" @click="jump('/Help')">帮助</button>
        </div>
        <transition mode="out-in">    <!--给route-view 添加动画 必须要使用transition 标签包裹 并设置模式先出后进-->>
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
  name: 'MainPage',
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
    *{
        text-decoration: none;
        margin: 0;
        border: 0;
        box-sizing: border-box;
        font-family: Helvetica;
    }
    #navigation {
        background-color: gray;
        width: auto;
        height: 100px;
        display: -webkit-flex; /* Safari */
        display: flex;
        flex-direction: row;
        justify-content: flex-start; /*水平左对齐*/
        align-items: center; /*垂直居中*/
        text-decoration: none;
    }
    #navigation button{
        height: 80px;
        width: 160px;

        /*border-radius: 20px;*/
    }
    #navigation .a{
        height: 80px;
        width: 160px;

        /*border-radius: 20px;*/
    }
    #navigation button:focus{
        background-color: lightblue;
    }
    .router-link-active{
        text-decoration: none;
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