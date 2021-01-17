<template>
    <div name="Container" id="Container">
        <div name="Nav" id="Nav">
            <button class="button button-3d button-royal">仿真执行</button>
            <button class="button button-3d button-royal">车辆时间</button>
            <button class="button button-3d button-royal">集合等待</button>
            <button class="button button-3d button-royal">撤离时间</button>
            <button class="button button-3d button-royal">集体统计</button>
            <button class="button button-3d button-royal">计量统计</button>
        </div>
        <div name="Main" id="Main">
            预测执行
            <transition mode="out-in">    <!--给route-view 添加动画 必须要使用transition 标签包裹 并设置模式先出后进-->>
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SimRunning'
}
</script>

<style scoped>
    #Main {
        background-color: forestgreen;
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