<template>
    <div id="lmap" style="width:880px;height:660px"></div>
</template>
<!-- Make sure you put this AFTER Leaflet's CSS -->
<!--<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"-->
<!--        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="-->
<!--        crossorigin=""></script>-->
<!--<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"/>-->
<!--<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" ></script>-->
<script src="~/Scripts/leafletjs/1.4.0/leaflet.motion.min.js"></script>
<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import {MyMarker} from '../../../static/MyMarker';
import myHttp from '../../../static/http';
import {MyLink} from '../../../static/MyLink';

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

export default {
  name: 'MapRoad',
  data(){
    return{
        url:'http://localhost:8086/map/tiles/{z}/{x}/{y}.png',
        map:'',
      center_j : (23.774414063 + 23.906250000)/2,
      center_w: (117.421875000 + 117.553710938)/2,
      crosses:[],
      lines:[],
      links:[],
    }
  },

  methods:{

    lineTransform(str,latlngs){
      let dots = str.split(',');
      // console.log(dots)
      for(let i=0;i<=dots.length-1;){
        console.log(dots[i+1] + ',' + dots[i]);
        latlngs.push(this.transformation(dots[i+1],dots[i]));
        i = i+2;
      }
    },

    transformation(w,j){
      let lat = w;
      let lng = j;
      let latlng = new L.latLng((lat-23.906250000)*1456.3555,(lng-117.421875000)*1456.3555);
      // console.log(latlng)
      return latlng;
    },

    drawMarker(lat,lng,type){
      // L.marker(this.map.containerPointToLatLng(L.point(440,335))).addTo(this.map);
      let latLng = this.transformation(lat,lng);
      let marker = L.marker(latLng);
      // let prefix = "localhost:8086/markers/marker-icon-2x-";
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
      // let m1 = new myMarker(1);
      // console.log("m1对象" + m1)
    },

    onMapClick(e) {
      // let popup = L.popup();
      //   popup
      //   .setLatLng(e.latlng)
      //   .setContent("You clicked the map at x y " + e.latlng.toString())
      //   .openOn(this.map);
      this.drawMarker(e.latlng);
    },

    initMap() {
      this.map = L.map('lmap', {crs: L.CRS.Simple,minZoom: 2, maxZoom:4, maxNativeZoom: 4 });
      let imageUrl = 'http://localhost:8086/bg00.png',
        imageBounds = [[-192, 0], [0, 192]];
      L.imageOverlay(imageUrl, imageBounds).addTo(this.map);

      this.map.setView([-96,96], 2); // 设置地图中心


      let p1 = L.latLng(0,192);
      let p2 = L.latLng(-192,0);
      let center = L.latLng(-96,96);
      let bounds = L.latLngBounds(p2,p1);
      this.map.fitBounds(bounds);
      // console.log(this.map.getBounds());
      this.map.panTo(center);
      // this.drawMarker(center,-1)
      L.control.scale(12386).addTo(this.map)
      // this.drawMarker(L.latLng(0,192),-1)
      // this.drawMarker(L.latLng(-192,0),-1)
      // 19,Cross19,117.483,23.8484,3,0,0,0,1076,94,0,0,0
      // 20,Cross20,117.4814,23.8493,1,20,30,50,0,0,0,0,0
      // let m1 = new myMarker(20,'Cross20',117.4814,23.8493,1,20,30,50,0,0,0,0,0)
      // this.drawMarker(this.transformation(m1.latitude,m1.longtitude),1)
      // let m2 = new myMarker(19,'Cross19',117.483,23.8484,3,0,0,0,1076,94,0,0,0)
      // this.drawMarker(this.transformation(m2.latitude,m2.longtitude),3)
      // console.log(this.map)



      // 划线
      // let latlngs1 = [];
      // let latlngs2 =[];
      // let str1 = "117.49019999999801,23.830799999999595,117.49011796641192,23.830666803754365,117.48991948294477,23.83072078147754,117.48970490622355,23.83083364391704,117.48953324484658,23.830975948592094,117.48928111719914,23.8311526024543,117.48905044722383,23.83120657997532,117.4888144128305,23.83128509269308,117.48868030237972,23.83128509269308,117.48849254774865,23.831128067210056,117.48834234404379,23.831034833239563,117.48819999999802,23.830999999999584"
      // this.lineTransform(str1,latlngs1);
      // let str2 = "117.48809999999803,23.832599999999587,117.48815458941273,23.832452963758698,117.48825651335531,23.832256683642452,117.48828869986349,23.83204568218621,117.48825114893728,23.831746353950155,117.48817604708486,23.831564793863862,117.48804730105213,23.831368512403614,117.487899999998,23.831199999999587"
      // this.lineTransform(str2,latlngs2);
      // this.lines.push(latlngs1);
      // this.lines.push(latlngs2)

      for (let i=0;i<this.links.length;i=i+2){
        let latLngs =[]
        let c1 =this.links[i].cross1-1
        let c2 =this.links[i].cross2-1

        latLngs.push(this.transformation(
          this.crosses[c1].latitude,
          this.crosses[c1].longtitude
          )
        )
        latLngs.push(this.transformation(
          this.crosses[c2].latitude,
          this.crosses[c2].longtitude
          )
        )
        this.lines.push(latLngs)
      }

      // console.log("links"+this.links)
      // console.log("lines"+this.lines)
      L.polyline(this.lines, {color: 'red'}).addTo(this.map);

      // this.drawMarker(this.transformation(23.8264
      //     ,117.4954
      //   ),2)
      // this.drawMarker(this.transformation(23.858
      //   ,117.4433
      // ),2)
      // console.log(this.crosses)
      for (let i =0 ; i<this.crosses.length;i++){
        this.drawMarker(this.crosses[i].latitude,this.crosses[i].longtitude,this.crosses[i].type)
      }

      let carIcon = L.icon({
        iconUrl:'http://localhost:8086/car.png',
        iconSize:[5,5]
      })

      L.motion.polyline([
        [117.49019999999801,23.830799999999595],
        [117.49011796641192,23.830666803754365],
        [117.48970490622355,23.83083364391704]
        ],
        {
          pane:'polymotionPane'
        },
        {
          auto:true,
          speed:5,
          duration:5
      },
        {
          removeOnEnd: true,
          icon:carIcon
        }).addTo(map); //  as L.polyline

      this.map.on("click",(e)=>{
        // console.log(e.latlng)
        let latLng = e.latlng;
        L.marker(latLng).addTo(this.map);
      })
    }

  },

  mounted () {


    myHttp.get("getAllCrosses").then(res=>{
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
      // console.log(this.crosses[1])
    }).then(()=>myHttp.get("getAllLinks").then(res=>{
        for (let i = 0; i < res.data.length; i++) {
          this.links.push(new MyLink(
            res.data[i].id,
            res.data[i].cross1,
            res.data[i].cross2,
            res.data[i].a,
            res.data[i].b)
          )
        }
      }
    ).then(()=>this.initMap()))




    // this.map.on('click', this.onMapClick);
  }
}
</script>

<style scoped>
</style>