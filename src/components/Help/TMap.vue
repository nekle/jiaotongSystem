<template>
  <div>

    <div id="mapContainer"></div>

    <el-container>

      <el-drawer
          title="我是标题"
          :visible.sync="drawer.isOpen"
          :direction="drawer.direction"
          :before-close="handleClose"
          :modal-append-to-body="false"
      >
        <span>节点信息修改</span>
        <ResidentNode v-if="drawer.marker.type == -1"/>
        <PublicVehicleSourcesNode v-if="drawer.marker.type == 1"/>
        <RestrictSectorNode v-if="drawer.marker.type == 2"/>
        <SettlementCampNode v-if="drawer.marker.type == 3"/>

      </el-drawer>

    </el-container>

  </div>
</template>

<script
    src="https://map.qq.com/api/gljs?v=1.exp&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77">
</script>

<script>
import myHttp from '../../../static/http';
import {MyMarker} from '../../../static/MyMarker';
import corsHttp from '../../../static/corsHttp';
import {MyLink} from '../../../static/MyLink';
import axios from "axios";

import ResidentNode from "@/components/PlanSettings/ResidentNode";
import PublicVehicleSourcesNode from "@/components/PlanSettings/PublicVehicleSourcesNode";
import RestrictSectorNode from "@/components/PlanSettings/RestrictSectorNode";
import SettlementCampNode from "@/components/PlanSettings/SettlementCampNode";

export default {
  name: 'TMap',
  components: {
    ResidentNode,
    RestrictSectorNode,
    PublicVehicleSourcesNode,
    SettlementCampNode,
  },
  data() {
    return {
      drawer: {
        isOpen: false,
        direction: 'rtl',
        marker: '',
      },
      center: '', //地图中心,
      imageSW: '',// 地图西南角
      imageNE: '', // 地图东北角,
      imageLatLngBounds: '',//地图图片经纬度范围
      crosses: [],
      lines: [],
      links: [],
      map: '',
      markerStyle1: { //点标注的相关样式
        "marker": new TMap.MarkerStyle({
          "width": 25,
          "height": 35,
          "anchor": {x: 16, y: 32},
          "src": 'http://localhost:8086/markers/marker-icon-2x-red.png',
          "opacity": 0.7
        })
      },
      markerStyle2: { //点标注的相关样式
        "marker": new TMap.MarkerStyle({
          "width": 25,
          "height": 35,
          "anchor": {x: 16, y: 32},
          "src": 'http://localhost:8086/markers/marker-icon-2x-yellow.png',
          "opacity": 0.7
        })
      },
      markerStyle3: { //点标注的相关样式
        "marker": new TMap.MarkerStyle({
          "width": 25,
          "height": 35,
          "anchor": {x: 16, y: 32},
          "src": 'http://localhost:8086/markers/marker-icon-2x-blue.png',
          "opacity": 0.7
        })
      },
      markerStyle4: { //点标注的相关样式
        "marker": new TMap.MarkerStyle({
          "width": 25,
          "height": 35,
          "anchor": {x: 16, y: 32},
          "src": 'http://localhost:8086/markers/marker-icon-2x-green.png',
          "opacity": 0.7
        })
      },
      markerStyle5: { //点标注的相关样式
        "marker": new TMap.MarkerStyle({
          "width": 25,
          "height": 35,
          "anchor": {x: 16, y: 32},
          "src": 'http://localhost:8086/markers/marker-icon-2x-orange.png',
          "opacity": 0.7
        })
      },
      trailsData: [],
      trailNum: 0,
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认修改？')
          .then(() => {
            done();
          })
          .catch(() => {
          });
    },

    drawLine(crosses) {
      // 将link转换成line，即连接关系转换成路径线
      for (let i = 0; i < this.links.length; i = i + 2) {
        let latLngs = []
        let c1 = this.links[i].cross1
        let c2 = this.links[i].cross2

        latLngs.push(
            new TMap.LatLng(crosses[c1 - 1].latitude,
                crosses[c1 - 1].longitude)
        )
        latLngs.push(
            new TMap.LatLng(crosses[c2 - 1].latitude,
                crosses[c2 - 1].longitude)
        )
        this.lines.push(latLngs)
      }
      //创建 MultiPolyline
      let polylineLayer = new TMap.MultiPolyline({
        id: 'polyline-layer', //图层唯一标识
        map: this.map,//绘制到目标地图
        //折线样式定义
        styles: {
          'style_blue': new TMap.PolylineStyle({
            'color': '#3777FF', //线填充色
            'width': 6, //折线宽度
            // 'borderWidth': 0, //边线宽度
            // 'borderColor': '#FFF', //边线颜色
            'lineCap': 'butt' //线端头方式
          }),
          'style_red': new TMap.PolylineStyle({
            'color': 'rgba(255,0,50,.6)', //线填充色
            // 'width': 6, //折线宽度
            // 'borderWidth': 5, //边线宽度
            // 'borderColor': '#CCC', //边线颜色
            'lineCap': 'round' //线端头方式
          })
        },
        //折线数据定义
        geometries: [
          {//第1条线
            'id': 'pl_1',//折线唯一标识，删除时使用
            'styleId': 'style_red',//绑定样式名
            'paths': this.lines,
          }
        ]
      });
    },
    drawMarker(marker, drawer) {


      let pos = new TMap.LatLng(marker.latitude, marker.longitude)
      let style

      // 选择标记点的样式
      switch (marker.type) {

        case -1: {
          style = this.markerStyle1
          break
        }
        case 0: {
          style = this.markerStyle2
          break
        }
        case 1: {
          style = this.markerStyle3
          break
        }
        case 2: {
          style = this.markerStyle4
          break
        }
        case 3: {
          style = this.markerStyle5
          break
        }
        default: {
          console.log("输入标记类型有错")
          break
        }
      }

      let TMarker = new TMap.MultiMarker({
        // id: "marker-layer", //图层id
        map: this.map,
        styles: style,
        geometries: [{ //点标注数据数组
          "id": marker.id,
          "styleId": "marker",
          "position": pos,
          "properties": {
            "title": "marker"
          }
        }]
      });

      TMarker.on("click", (e) => {
        console.log(e)
        drawer.marker = marker
        drawer.isOpen = true
      })

      // TMarker.on("click", (e)=>this.markerClickHandler(e))
      console.log("绑定")

    },

    markerClickHandler() {
      this.drawer.isOpen = !this.drawer.isOpen
    },

    // 初始化腾讯地图
    initMap() {
      this.center = new TMap.LatLng((23.771997 + 23.903471) / 2, (117.426951 + 117.558459) / 2);//设置中心点坐标
      //初始化地图
      this.map = new TMap.Map('mapContainer', {
        center: this.center,
        zoom: 12,
        minZoom: 12,
        maxZoom: 500,
      });

      this.imageSW = new TMap.LatLng(23.771997, 117.426951);
      this.imageNE = new TMap.LatLng(23.903471, 117.55846);
      this.imageLatLngBounds = new TMap.LatLngBounds(this.imageSW, this.imageNE);
      let imgGroundLayer = new TMap.ImageGroundLayer({
        src: 'http://localhost:8086/bg00.png',
        bounds: this.imageLatLngBounds,
        minZoom: 1,	//最小缩放级别
        maxZoom: 5000,	//最大缩放级别
        visible: true,	//是否可见
        zIndex: 1,	//层级高度（z轴）
        opacity: 0.95,	//图层透明度：1不透明，0为全透明
        map: this.map,		//设置图层显示到哪个地图实例中
      })
      // 描点

      for (let i = 0; i < this.crosses.length; ++i) {
        // this.drawMarker(this.crosses[i].latitude, this.crosses[i].longitude, this.crosses[i].type)
        this.drawMarker(this.crosses[i], this.drawer)
      }
      // 画线
      this.drawLine(this.crosses)

    },
    getGets() {
      let getCrosses = myHttp.get("http://localhost:8086/getAllCrosses")
      let getLinks = myHttp.get("http://localhost:8086/getAllLinks")
      return axios.all([getCrosses, getLinks]).then(axios.spread(function (...resList) {
            // 拿到所有gets数据
            return resList
          })
      ).catch((error) => {
        console.log(error)
        return
      })
    },
    async renderPage() {
      let resList = await this.getGets()

      let res = resList[0]
      for (let i = 0; i < res.data.length; i++) {
        this.crosses.push(new MyMarker(
            res.data[i].id,
            res.data[i].name,
            res.data[i].latitude,
            res.data[i].longitude,
            res.data[i].type,
            res.data[i].car_sum,
            res.data[i].car_start_time,
            res.data[i].car_start_interval,
            res.data[i].passenger_sum,
            res.data[i].car_passenger_sum,
            res.data[i].truck_sum,
            res.data[i].motor_sum,
            res.data[i].capacity)
        )
      }

      res = resList[1]
      for (let i = 0; i < res.data.length; i++) {
        this.links.push(new MyLink(
            res.data[i].id,
            res.data[i].cross1,
            res.data[i].cross2,
            res.data[i].a,
            res.data[i].b)
        )
      }

      this.initMap()

    }

  },
  created() {

    this.renderPage()

  }
}
</script>

<style scoped>
* {
  font-size: .14rem;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#mapContainer {
  position: relative;
  width: 5rem;
  height: 5rem;
  /*box-shadow: .1rem .1rem .1rem rgb(0, 32, 129);*/
  /*margin: .2rem 0 0 0;*/
}


</style>
