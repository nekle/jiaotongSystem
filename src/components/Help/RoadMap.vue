<template>
    <div id="Container" ref="Container" style="position: relative">
        <div v-for="position in positions" :key="position" ref="target">{{position}}</div>
    </div>
</template>

<script>
export default {
  name: 'RoadMap',
  data(){
    return{
      roadURL:'src/assets/bgGmapRoad.png',
      positions:[1,2,3,4]
    }
  },
  methods:{
    setPosition(){
      let Tar = this.$refs.target;
      console.log(this.$refs.target)
      for(let i=0;i<Tar.length;i++){
        console.log(Tar[i].style)
        Tar[i].style.position = "absolute";
        Tar[i].style.backgroundColor = "red"
        Tar[i].style.width = i +'00px'
      }
    }
  },
  mounted () {
    this.setPosition();
  }
}

</script>

<style scoped>
    #Container {
        width: 500px;
        height: 500px;
        /*background-image: url(../../assets/bgGmapRoad.png)*/
        background: url(../../assets/bgGmapRoad.png) center no-repeat;
        background-size:contain;
    }
</style>