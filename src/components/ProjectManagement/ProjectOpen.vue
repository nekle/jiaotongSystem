<template>
    <div id="Container">
        <div id="SearchContainer">
            <button class="button button-glow button-rounded button-royal button-small">搜索</button>
            <div id="InputContainer">
                <input type="text" placeholder="请输入项目名称" v-model="search" class="InputBox">
                <span @click="clearSearch" id="clearSpan">x</span>
            </div>
        </div>
        <div>
            项目栏
            <ProjectInfo></ProjectInfo>
            <ProjectInfo></ProjectInfo>
            <ProjectInfo></ProjectInfo>
        </div>
        <div>
            <button>打开项目</button>
        </div>
    </div>
</template>

<script>
import ProjectInfo from '@/components/ProjectManagement/ProjectInfo';
export default {
  name: 'ProjectOpen',
  components:{
    ProjectInfo
  },
  data () {
    return {
      search:''
    };
  },
  methods:{
    clearSearch(){
      this.search = ''
    }
  }
}
</script>

<style scoped>
    #Container {
        display: flex;
        flex-direction: column;
    }
    #SearchContainer {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .InputBox {
        width: 200px;
        height: 25px;
    }
    #clearSpan {
        position: relative;
        left: -20px;
    }
</style>