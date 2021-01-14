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
</style>