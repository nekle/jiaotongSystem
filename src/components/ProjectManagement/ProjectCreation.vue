<template>
        <div name="Container" id="Container">
            <div class="inputBox">
                <div>项目名称</div>
                <input type="text" name="ProjectName" id="ProjectName">
            </div>
            <div class="inputBox">
                <div>项目场景</div>
                <input type="text" name="ProjectScene" id="ProjectScene">
            </div>
            <div class="inputBox">
                <div>创建路径</div>
                <input type="text" name="ProjectScene" id="ProjectPath">
<!--                <input id=b type=file webkitdirectory @click="findDir">-->
            </div>
            <div class="inputBox">
                <div>创建目录</div>
                <input type="text" name="ProjectScene" id="ProjectDirectory" readonly="readonly">
            </div>
            <button class="myButton">创建</button>
        </div>
</template>

<script>
export default {
  name: 'ProjectCreation',
  methods:{
    findDir(e){
      for (let entry of e.target.files)
        console.log(entry.name, entry.webkitRelativePath);
    }
  }
}
</script>

<style scoped>

    #Container {
        display: flex;
        flex-direction: column;
        width: 1500px;
    }
    #Container div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    #Container div .inputBox{
        display: flex;
        flex-direction: row;
        margin-top: 10px;
    }
    #Container input {
        width: 500px;
        height: 25px;
    }
    .myButton {
        width: 120px;
        height: 60px;
        margin-left: 200px;
    }
</style>