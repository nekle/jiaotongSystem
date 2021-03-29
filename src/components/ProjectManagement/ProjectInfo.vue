<template>
    <div id="Container">
        <picture>
<!--            <source media="(min-width: 650px)" srcset="demo1.jpg">-->
<!--            <source media="(min-width: 465px)" srcset="demo2.jpg">-->
            <img :src=this.imgURL>
        </picture>
        <div>
            <div>路   径:{{path}}</div>
            <div>状   态：{{status}}</div>
            <div>创建时间:{{time}}</div>
        </div>
    </div>
</template>

<script>
import alt from "@/assets/alt.png"
export default {
  name: 'ProjectInfo',
  data(){
    return{
        imgURL:alt,
        path:'123',
        status:'456',
        time:'789'
    }
  },
  methods:{

  },
  created () {
    console.log()
  }
}
</script>

<style scoped>
    * {
        font-size: .14rem;
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: "Helvetica";
        text-decoration: none;
    }
 #Container {
     width: 1100px;
     height: 200px;
     display: flex;
     flex-direction: row;
     outline: 1px lightblue;
 }
    #Container picture{
        width: 255px;
        height: 185px;
    }
</style>
