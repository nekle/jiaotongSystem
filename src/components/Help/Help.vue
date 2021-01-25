<template>
    <div>
        <div name="Main" id="Main">
<!--            <RoadMap></RoadMap>-->
<!--            <xxx></xxx>-->
<!--            <TMap></TMap>-->
            <JSMap></JSMap>
<!--            <XDHMap  ></XDHMap>-->
            <MapRoad></MapRoad>
        </div>
<!--        <img src="../../assets/wpt/tiles/0/0/0.png" alt="">-->
    </div>
</template>

<script>
// import RoadMap from '@/components/Help/RoadMap';
import MapRoad from '@/components/Help/MapRoad';
// import xxx from '@/components/Help/xxx.vue'
// import TMap from '@/components/Help/TMap';
import JSMap from '@/components/Help/JSMap';
// import XDHMap from '@/components/Help/XDHMap';
export default {
  name: 'Help',
  components:{
    // RoadMap,
    // xxx
    MapRoad,
    // TMap
    JSMap
    // XDHMap
  }
}
</script>

<style scoped>
    #Main {
        background-color: forestgreen;
        width: 100%;
        height: 600px;
    }
</style>