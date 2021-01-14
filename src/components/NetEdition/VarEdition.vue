<template>
    <div>
        <div><span>交叉口数据</span><input id=1 type=file webkitdirectory @click="findDir"></div>
        <div><span>路段连接关系数据</span><input id=2 type=file webkitdirectory @click="findDir"></div>
        <div><span>路段矢量点数据</span><input id=3 type=file webkitdirectory @click="findDir"></div>
        <div><span>CRD数据</span><input id=4 type=file webkitdirectory @click="findDir"></div>
        <div><span>地图图片数据</span><input id=5 type=file webkitdirectory @click="findDir"></div>
        <div><span>地图信息文件数据</span><input id=6 type=file webkitdirectory @click="findDir"></div>
    </div>
</template>

<script>
export default {
  name: 'VarEdition',
  methods:{
        findDir(e){
            for (let entry of e.target.files)
            console.log(entry.name, entry.webkitRelativePath);
        }
    }
}
</script>

<style scoped>

</style>