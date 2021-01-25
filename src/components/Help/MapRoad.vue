<template>
    <div id="lmap" style="width:880px;height:660px"></div>
</template>
<!-- Make sure you put this AFTER Leaflet's CSS -->
<!--<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"-->
<!--        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="-->
<!--        crossorigin=""></script>-->
<!--<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"/>-->
<!--<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" ></script>-->

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

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
        url:'http://localhost:8088/map/tiles/{z}/{x}/{y}.png',
        map:'',
      center_j : (23.774414063 + 23.906250000)/2,
      center_w: (117.421875000 + 117.553710938)/2,
    }
  },

  methods:{

    transformation(w,j){
      let latlng = new L.latLng((w-23.906250000)*1456.3555,(j-117.421875000)*1456.3555);
      console.log(latlng)
      return latlng;
    },

    drawMarker(latLng){
      // L.marker(this.map.containerPointToLatLng(L.point(440,335))).addTo(this.map);
      let marker = L.marker(latLng);
      marker.bindPopup('位置： ' + latLng.toString()).openPopup();
      marker.addTo(this.map);
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
      let opt = {
        tileSize: L.point(192, 192),
        // errorTileUrl:'http://localhost:8088/0.png'
      };
      L.tileLayer(this.url, opt).addTo(this.map)
      // latLng
      this.map.setView([-96,96], 2);
      console.log(this.map.getPixelOrigin())
      console.log(this.map.layerPointToContainerPoint(this.map.getPixelOrigin()));
      console.log('containerpoint to layerpoint' + this.map.containerPointToLayerPoint(this.map.getPixelOrigin()));
      console.log("地图的纬经度边界 左下角 ，右上角：" + this.map.getBounds().toBBoxString());
      // this.drawMarker(this.map.containerPointToLatLng(L.point(440,335)));

      let p1 = L.latLng(0,192);
      let p2 = L.latLng(-192,0);
      let center = L.latLng(-96,96);
      let bounds = L.latLngBounds(p2,p1);
      this.map.fitBounds(bounds);
      console.log(this.map.getBounds());
      this.map.panTo(center);
      this.drawMarker(center)
      L.control.scale(12386).addTo(this.map)
      this.drawMarker(L.latLng(0,192))
      this.drawMarker(L.latLng(-192,0))
      // console.log(this.map)


      // 经纬度转换
      // this.transformation = L.transformation(2, 5, -1, 10);
      // let p = L.point(1, 2);
      // let pp = this.transformation.transform(p); //  L.point(7, 8)
      // console.log(pp)
        this.drawMarker(this.transformation(23.8264
          ,117.4954
        ))
      this.drawMarker(this.transformation(23.858
        ,117.4433
      ))
    }

  },

  mounted () {
    this.initMap();
    this.map.on('click', this.onMapClick);
  }
}
</script>

<style scoped>
</style>