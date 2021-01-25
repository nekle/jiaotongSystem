<template>
    <div id="container"></div>
</template>

<script src="https://map.qq.com/api/gljs?v=1.exp&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77"></script>
<script charset="utf-8" src="https://map.qq.com/api/js?v=2.exp&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&libraries=drawing,geometry,place,convertor,visualization"></script>

<script>
let map;
export default {
  name: 'TMap',
  methods: {
    //点击事件回调函数
    clickHandler (evt) {
      let lat = evt.latLng.getLat().toFixed(6);
      let lng = evt.latLng.getLng().toFixed(6);
      console.log("您点击的的坐标是：" + lat + "," + lng);
    },

    //地图初始化函数
    initMap () {
      //定义地图中心点坐标
      // 22°36′33.28″，东经114°33′08.30
      let center = new TMap.LatLng(22.592950, 114.529002)
      //定义map变量，调用 TMap.Map() 构造函数创建地图
      map = new TMap.Map(document.getElementById('container'), {
        center: center,//设置地图中心点坐标
        zoom: 17.2,   //设置地图缩放级别
        pitch: 43.5,  //设置俯仰角
        rotation: 45,    //设置地图旋转角度
        mapStyleId: 'style2'
      });
    },

    setBackground(){
      let imageSW = new TMap.LatLng(22.97897813636327, 116.3060975074768);
      let imageNE = new TMap.LatLng(22.98506162381882, 116.316397190094);
      let imageLatLngBounds = new TMap.LatLngBounds(imageSW, imageNE);
      let imageGroundLayer = new TMap.ImageGroundLayer({
        bounds: imageLatLngBounds,
        src: 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/bg.jpg',
        map: map
      });
    }
  },

  mounted () {
    this.initMap();
    //添加点击事件 显示点击坐标
    map.on("click",this.clickHandler)
    //设置背景图片
    this.setBackground();
  }
}
</script>

<style scoped>
    #container{
        /*地图(容器)显示大小*/
        width:1200px;
        height:400px;
    }
</style>