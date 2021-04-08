<template>
  <div id="Container">
    <div id="RouteMap" class="MapBox">
      <el-image :src="imgSrc[0]" class="map" fit="contain"></el-image>
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
      <el-image :src="imgSrc[1]" class="map" fit="contain"></el-image>
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
  data() {
    return {
      imgSrc: [
        'http://localhost:8086/param1.png',
        'http://localhost:8086/bg00.png'
      ],
    }
  },
  methods: {}
}
</script>

<style scoped>
* {
  font-size: .14rem;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
}

#Container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.MapBox {
  width: 100%;
  height: 100%;
  margin: .05rem;
  border: .02rem solid black;
}

.TextArea {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.map {
  width: 4rem;
  height: 4rem;
}
</style>
