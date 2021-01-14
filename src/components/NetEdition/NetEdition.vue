<template>
    <div name="Container" id="Container">
        <div name="Nav" id="Nav">
            <button>参数修改</button>
            <button>参数显示</button>
        </div>
        <div name="Main" id="Main">
            路网编辑
        </div>
    </div>
</template>

<script>
export default {
  name: 'NetEdition'
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