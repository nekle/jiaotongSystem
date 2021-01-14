<template>
    <div name="Container" id="Container">
        <div name="Nav" id="Nav">
            <button>居民点</button>
            <button>公共车辆源</button>
            <button>限速路段</button>
            <button>安置点</button>
            <button>其他设置</button>
        </div>
        <div name="Main" id="Main">
            方案设置
            <transition mode="out-in">    <!--给route-view 添加动画 必须要使用transition 标签包裹 并设置模式先出后进-->>
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PlanSettings'
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