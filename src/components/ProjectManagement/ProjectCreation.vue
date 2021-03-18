<template>
    <div>
        <div name="Container" id="Container">
            <div class="inputBox">
                <label for="ProjectName">项目名称</label>
                <input type="text" name="ProjectName" id="ProjectName" v-model="name" >
            </div>
            <div class="inputBox">
                <label for="ProjectScene">项目场景</label>
                <input type="text" name="ProjectScene" id="ProjectScene" v-model="scene">
            </div>
            <div class="inputBox">
                <label for="ProjectPath">创建路径</label>
                <input type="text" name="ProjectScene" id="ProjectPath" v-model="path" readonly>
                <!--                <input id=b type=file webkitdirectory @click="findDir">-->
            </div>
            <div class="inputBox">
                <label for="ProjectDirectory">创建目录</label>
                <input type="text" name="ProjectScene" id="ProjectDirectory" readonly="readonly" :value="directory">
            </div>
            <button class="myButton button button-glow button-rounded button-royal">创建</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ProjectCreation',
  data(){
    return{
      name:'un',
      scene:'un',
      path:'C://',
    }
  },
  computed:{
    directory:function() {
        return this.path+this.name+"_"+this.scene
    }
  },
  methods:{
    findDir(e){
      for (let entry of e.target.files)
        console.log(entry.name, entry.webkitRelativePath);
    },
  }
}
</script>

<style scoped>
    * {
        text-decoration: none;
        border: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Helvetica";
    }
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
    
    #Container div .inputBox label{
        background-color: rgba(123, 114, 233,.6);
        cursor: pointer;
        border-radius: 3px;
        padding: 5px;
        box-shadow:-5px 5px 3px rgba(123, 114, 233,.4) ;
    }
    
    
    #Container input {
        width: 500px;
        height: 25px;
        border: 1px solid #ccc;
        border-radius: 3px;
        padding: 13px 14px;
        font-size: 14px;
        font-weight: 700;
        font-family: "Helvetica";
        outline-color: white;
        transition: outline-color 0.5s ease;
    }
    #Container input:focus {
        outline-color: rgba(123, 114, 233,.7);
    }

    .inputBox label{
        margin: 0 5px 0 5px;
        font-size: 18px;
        font-weight: bold;
    }

    .myButton {
        width: 120px;
        height: 60px;
        margin: 50px 0 50px 200px;
    }


</style>