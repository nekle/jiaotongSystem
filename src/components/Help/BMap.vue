<template>
    <div>
        <div id="container" ></div>
    </div>
</template>
<script type="text/javascript" src="https://api.map.baidu.com/api?v=1.0&&type=webgl&ak=eGrEqsR4Mwudqa0dMuoThLjy5os3OziK"></script>
<script>
export default {
  name: 'BMap',
  data(){
    return{
      ak:"eGrEqsR4Mwudqa0dMuoThLjy5os3OziK"
    }
  },
  methods:{
    initBMap(){

      let map = new BMapGL.Map('container');
      map.centerAndZoom(new BMapGL.Point(117.200, 36.2437), 18);
      map.enableScrollWheelZoom(true);
      map.setTilt(45);
      map.setDisplayOptions({
        poiText: false,  // 隐藏poi标注
        poiIcon: false,  // 隐藏poi图标
        building: false  // 隐藏楼块
      });


      let pStart = new BMapGL.Point(117.19635, 36.24093);
      let pEnd = new BMapGL.Point(117.20350, 36.24764);
      let bounds = new BMapGL.Bounds(new BMapGL.Point(pStart.lng, pEnd.lat), new BMapGL.Point(pEnd.lng, pStart.lat));
      let imgOverlay = new BMapGL.GroundOverlay(bounds, {
        type: 'image',
        url: '/jsdemo/img/shouhuimap.png',
        opacity: 1
      });
      map.addOverlay(imgOverlay);

      let points
      let convertor = new BMapGL.Convertor();
      convertor.translate(points, COORDINATES_WGS84, COORDINATES_BD09)

    }
  },

  mounted(){
    this.initBMap()
  }
}
</script>

<style scoped>
    #container {
        overflow: hidden;
        width: 100%;
        height: 100%;
        margin: 0;
        font-family: "微软雅黑";
    }
</style>