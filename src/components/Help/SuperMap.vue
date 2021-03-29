<template>
  <div>
      <div id="map" style="position:absolute;left:0px;right:0px;width:800px;height:500px;"></div>
  </div>
</template>

<script>
import "@supermap/iclient-leaflet"
import L from 'leaflet';
import myHttp from '../../../static/http';
import {MyMarker} from '../../../static/MyMarker';
import {MyLink} from '../../../static/MyLink';
import {DataSet} from "mapv"
export default {
  name: 'SuperMap',
  data(){

    return{

      map:'', // map对象
      crosses:[], // 标点对象数组
      links:[],  // 连接对象数组
      lines:[], // 线条数组
      imageUrl:'http://localhost:8086/bg00.png', // 地图背景图片url
      imageBounds:[[23.774414063, 117.421875000], [23.906250000, 117.553710938]], // 地图背景坐标边界  SW 左下角 NE 右上角
      options:{
        fillStyle: 'rgba(0, 255, 0, 0.2)',
        globalCompositeOperation: "lighter",
        size: 1.5,
        animation: {
          stepsRange: {
            start: 0,
            end: 1000
          },
          trails: 1000,
          duration: 1000,
        },
        draw: 'simple'
      }, // MapV参数设置
      pointsData:[
        {
          geometry: {
            type: 'LineString',
            coordinates: [[13.774414063, 117.421875000],[24.674414063, 117.421875000],[25.674414063, 117.421875000]]
          }
        }
        ],
      markers:[]
    }

  },
  methods:{

    drawMarker(lat,lng,type){

      // let latLng = this.transformation(lat,lng);

      let marker = L.marker(new L.latLng(lat,lng));

      // 定义四种类型的marker地图标记，选择范围为-1 至 3
      let myIcon_1 = L.icon({
        iconUrl: 'http://localhost:8086/markers/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25/2, 41/2],
        iconAnchor: [12/2, 41/2],
        popupAnchor: [1/2, -34/2],
        tooltipAnchor: [16/2, -28/2],
        shadowSize: [41/2, 41/2]
      });
      let myIcon0 = L.icon({
        iconUrl: 'http://localhost:8086/markers/marker-icon-2x-yellow.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25/2, 41/2],
        iconAnchor: [12/2, 41/2],
        popupAnchor: [1/2, -34/2],
        tooltipAnchor: [16/2, -28/2],
        shadowSize: [41/2, 41/2]
      });
      let myIcon1 = L.icon({
        iconUrl: 'http://localhost:8086/markers/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25/2, 41/2],
        iconAnchor: [12/2, 41/2],
        popupAnchor: [1/2, -34/2],
        tooltipAnchor: [16/2, -28/2],
        shadowSize: [41/2, 41/2]
      });
      let myIcon2 = L.icon({
        iconUrl: 'http://localhost:8086/markers/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25/2, 41/2],
        iconAnchor: [12/2, 41/2],
        popupAnchor: [1/2, -34/2],
        tooltipAnchor: [16/2, -28/2],
        shadowSize: [41/2, 41/2]
      });
      let myIcon3 = L.icon({
        iconUrl: 'http://localhost:8086/markers/marker-icon-2x-orange.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25/2, 41/2],
        iconAnchor: [12/2, 41/2],
        popupAnchor: [1/2, -34/2],
        tooltipAnchor: [16/2, -28/2],
        shadowSize: [41/2, 41/2]
      });
      marker.bindPopup('位置： ' + '纬度' + lat + '经度' + lng).openPopup();
      switch (type) {
        case -1:{marker.setIcon(myIcon_1);break;}
        case 0:{marker.setIcon(myIcon0);break;}
        case 1:{marker.setIcon(myIcon1);break;}
        case 2:{marker.setIcon(myIcon2);break;}
        case 3:{marker.setIcon(myIcon3);break;}
        default:
          console.log("cross种类信息有误");
      }

      marker.addTo(this.map);
      // this.markers.push(marker)
      // console.log(this.markers)
      // let m1 = new myMarker(1);
      // console.log("m1对象" + m1)
    },
    initMap () {

      //创建地图对象
      this.map = L.map('map', {
        crs: L.CRS.EPSG4326, // 设置坐标系
        center: [(23.774414063+23.906250000)/2, (117.421875000+117.553710938)/2], //设置地图中心
        maxZoom: 5000, //设置最大缩放级别
        zoom: 12,  //设置初始缩放级别,
        preferCanvas:true,
      });

      //加载地图背景
      // L.supermap.imageMapLayer(this.imageUrl).addTo(this.map)
      L.imageOverlay(this.imageUrl, this.imageBounds).setZIndex(1).addTo(this.map);
      // 添加图层
      // L.supermap.tiledMapLayer(this.imageUrl, {noWrap: true}).setZIndex(2).addTo(this.map);

      //加载地图标点
      for (let i =0 ; i<this.crosses.length;i++){
        this.drawMarker(this.crosses[i].latitude,this.crosses[i].longtitude,this.crosses[i].type)
      }

      //加载标点连接关系
      for (let i=0;i<this.links.length;i=i+2){
        let latLngs =[]
        let c1 =this.links[i].cross1-1
        let c2 =this.links[i].cross2-1

        latLngs.push(
          L.latLng(this.crosses[c1].latitude,
            this.crosses[c1].longtitude)
        )
        latLngs.push(
          L.latLng(this.crosses[c2].latitude,
            this.crosses[c2].longtitude)
        )
        this.lines.push(latLngs)
      }


      L.polyline(this.lines, {color: 'red'}).addTo(this.map);

      //
      //
      // //动态轨迹图层
      // L.supermap.mapVLayer(dataSet2, this.options).addTo(this.map);

      //创建MapV图层

      let dataSet1 = new DataSet(this.pointsData);

      let options1 = {
        strokeStyle: 'rgba(255, 0, 0, 0.3)',
        globalCompositeOperation: 'lighter',
        shadowColor: 'rgba(55, 50, 250, 0.5)',
        shadowBlur: 10,
        methods: {
          click: function () {
          }
        },
        lineWidth: 3.0,
        draw: 'simple'
      };
      // 轨迹数据集

      let mavLayer = L.supermap.mapVLayer(dataSet1, options1)
      mavLayer.setZIndex(10)
      mavLayer.addTo(this.map)
      console.log(this.map.hasLayer(mavLayer))
      // console.log(dataSet1.get())
    }
  },

  mounted(){

    myHttp.get("http://localhost:8086/getAllCrosses").then(res=>{
      for (let i=0;i<res.data.length;i++){
        this.crosses.push(new MyMarker(
          res.data[i].id,
          res.data[i].name,
          res.data[i].latitude,
          res.data[i].longtitude,
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

    }).then(()=>{
      myHttp.get("http://localhost:8086/getAllLinks").then(res=>{
        for (let i = 0; i < res.data.length; i++) {
          this.links.push(new MyLink(
            res.data[i].id,
            res.data[i].cross1,
            res.data[i].cross2,
            res.data[i].a,
            res.data[i].b)
          )
        }
      }).then(this.initMap)
    })

  }

}
</script>

<style scoped>

</style>