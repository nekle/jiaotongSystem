<template>
    <div id="Container">
        <div id="RouteMap" class="MapBox">
            <div class="Map">路线图</div>
            <div class="TextArea">
                <span>交叉路个数:</span>
                <span>路段条数:</span>
                <span>场内集合点个数:</span>
                <span>场外集合点个数:</span>
                <span>车辆源个数:</span>
                <span>安置点个数:</span>
            </div>
        </div>
        <div id="Map" class="MapBox">
            <div class="Map">地图</div>
            <div class="TextArea">
                <span>疏散总人数:</span>
                <span>公共车辆疏散人数:</span>
                <span>公共车辆数量:</span>
                <span>小汽车数量:</span>
                <span>货车数量:</span>
                <span>摩托车数量:</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'VarDisplay',
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
        flex-direction: row;
        justify-content: center;
    }
    .MapBox {
        width: 850px;
        height: 550px;
        margin: 5px;
        border: 2px  solid black;
    }
    .TextArea {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    .Map {
        width: 400px;
        height: 400px;
        border: 2px solid red;
        margin-left: 200px;
    }
</style>