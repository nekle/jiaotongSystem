<template>
    <div name="Container" id="Container">
        <div name="Nav" id="Nav">
            <button @click="jump('/ProjectCreation')">项目新建</button>
            <button @click="jump('/ProjectOpen')">项目打开</button>
            <button @click="jump('/ProjectClose')">项目关闭</button>
        </div>
        <div name="Main" id="Main">
            <router-view></router-view>
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