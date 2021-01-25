<template>
    <XdhMap :mouse-wheel-zoom="false" :adapter="adapter"></XdhMap>
</template>

<script>
import 'xdh-map/lib/xdhmap.css'
import {XdhMap} from 'xdh-map'
export default {
  name: 'XDHMap',
  components:{
    XdhMap
  },
  data() {
    return {
      adapter: {
        type: 'ZXY',
        url:'http://localhost:8088/map/tiles/{z}/{x}/{y}.png',
      }
    }
  }
}
</script>

<style scoped>

</style>