<template>
    <div name="Container" id="Container">
        <div name="Nav" id="Nav">
            <button>仿真执行</button>
            <button>车辆时间</button>
            <button>集合等待</button>
            <button>撤离时间</button>
            <button>集体统计</button>
            <button>计量统计</button>
        </div>
        <div name="Main" id="Main">
            预测执行
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
</style>