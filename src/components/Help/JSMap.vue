<template>
    <div>
        <div id="container"></div>
        <span id="info"></span>
    </div>
</template>

<script charset="utf-8" src="https://map.qq.com/api/js?v=2.exp&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77"></script>
<script charset="utf-8" src="https://map.qq.com/api/js?v=2.exp&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&libraries=drawing,geometry,place,convertor,visualization"></script>

<script>
export default {
  name: 'JSMap',
  data(){
    return{
      url:'http://localhost:8088/map/tiles/{z}/{x}/{y}.png',
      map:'',
      //设置地图边界
      ne: '', // 东北角坐标
      sw:'',//西南角坐标
      latlngBounds:'',
    }
  },
  methods:{

    // 坐标转化 计算瓦片id
    getNormalizedCoord(coord, zoom) {
      let y = coord.y;
      let x = coord.x;
      let tileRange = 1 << zoom;
      if (y < 0 || y >= tileRange) {
        return null;
      }
      if (x < 0 || x >= tileRange) {
        x = (x % tileRange + tileRange) % tileRange;
      }
      return {
        x: x,
        y: y
      };
    },

    //初始化地图函数  自定义函数名init
    init() {

      this.ne = new qq.maps.LatLng(23.774414063, 117.421875000);//东北角坐标
      this.sw = new qq.maps.LatLng(23.906250000, 117.553710938);//西南角坐标
      this.latlngBounds = new qq.maps.LatLngBounds(this.sw,this.ne);
      let getNormalizedCoord =this.getNormalizedCoord;

      //新建一个ImageMapType，实现ImageMapTypeOptions规范
      let earthlayer = new qq.maps.ImageMapType({
        name: '路线图',
        alt: '路线图',
        tileSize: new qq.maps.Size(192, 192),
        minZoom: 2,
        maxZoom: 4,
        getTileUrl: function (tile, zoom) {
          let normalizedCoord = getNormalizedCoord(tile, zoom);
          if (!normalizedCoord) {
            return null;
          }
          let z = zoom,
            x = tile.x,
            y = tile.y;
          // 'http://localhost:8086/ww/map/tiles/{z}/{x}/{y}.png'
          console.log('http://localhost:8088/map/tiles/' + z + '/' + normalizedCoord.x + '/' + normalizedCoord.y + '.png')
          return 'http://localhost:8088/map/tiles/' + z + '/' + normalizedCoord.x + '/' + normalizedCoord.y + '.png'
        }
      });
        let centerPoint  = new qq.maps.LatLng(23.8403320315, 117.487792969);
      let convertor = qq.maps.convertor.translate(centerPoint,5,function (res) {
        console.log(res)
            centerPoint = res[0]
        console.log(centerPoint)
      });
      console.log("转换器 " + convertor)
      this.map = new qq.maps.Map(document.getElementById("container"), {
        // 地图的中心地理坐标。
        // projection:
        draggableCursor : 'https://mapapi.qq.com/web/lbs/javascriptV2/demo/img/c1.cur',     //设置鼠标拖拽元素样式
        draggingCursor : 'https://mapapi.qq.com/web/lbs/javascriptV2/demo/img/c2.cur',       //设置鼠标移动样式
        // center: new qq.maps.LatLng(13.8403320315, 117.487792969),
        center: centerPoint,
        zoom: 2,
        mapTypeId: 'coordinate',
        mapTypeControlOptions: {
          mapTypeIds: ['earth']
        }
      });

      this.map.mapTypes.set('earth', earthlayer);
      this.map.setMapTypeId('earth');

      //监听ImageMapType图片加载次数
      let info_span = document.getElementById("info");
      let n = 0;
      qq.maps.event.addListener(this.map, "tilesloaded", function () {
        info_span.innerText = "tilesloaded:第" + ++n + "次";
      });

      console.log("地图中心" + this.map.getCenter())

      let Map = this.map;
      //添加监听事件  获取鼠标点击事件 在鼠标点击处添加标记
      qq.maps.event.addListener(this.map,'click', function (event) {
        console.log("点击了" + event.latLng);
        console.log("地图中心" + Map.getCenter());
        Map.panTo(new qq.maps.LatLng(0,0))
        // Map.panTo(new qq.maps.LatLng(47,-40))
        console.log(Map.getBounds())
        let marker=new qq.maps.Marker({
          position:new qq.maps.LatLng(0,0),
          map:Map
        });
      });


      //比例尺控件
      var scaleControl = new qq.maps.ScaleControl({
        align: qq.maps.ALIGN.BOTTOM_LEFT,
        margin: qq.maps.Size(85, 15),
        map: this.map
      });

    }
  },
  mounted(){
    this.init();
  }
}
</script>

<style scoped>
    #container {
        width: 1200px;
        height: 1000px;
    }
</style>