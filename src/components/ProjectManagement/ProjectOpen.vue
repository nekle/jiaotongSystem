<template>
    <div>
        <div>
            <input type="button" title="搜索">
            <input type="text" placeholder="请输入项目名称" v-model="search">
            <span @click="clearSearch">x</span>
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

</style>