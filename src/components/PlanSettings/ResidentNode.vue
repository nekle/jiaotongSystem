<template>
    <div id="Container" @click="click($event)" @mouseleave="leave($event)" v-bind:class="[{active:isActive}]">
        <span style="color: #4cb0f9;font-size: 0.2rem;">节点</span>
        <div class="itemBox"><span>名称：</span><input v-on:input="change()"  type="text" class="inputBox" :value="name"></div>
        <div class="itemBox"><span>总人数：</span><input v-on:input="change()" type="text" class="inputBox" :value="passengerSum"></div>
        <div class="itemBox"><span>小汽车数:</span><input v-on:input="change()" type="text" class="inputBox" :value="carSum"></div>
        <div class="itemBox"><span>货车数：</span><input v-on:input="change()" type="text" class="inputBox" :value="truckSum"></div>
        <div class="itemBox"><span>摩托车数：</span><input v-on:input="change()" type="text" class="inputBox" :value="motorSum"></div>
        <div class="itemBox"><span>乘公车人数：</span><input v-on:input="change()" type="text" class="inputBox" readonly="readonly" :value="publicSum"></div>
    </div>
</template>
<script>
export default {
  name: 'ResidentNode',
  props:{
    name:String,
    passengerSum:Number,
    carSum:Number,
    truckSum:Number,
    motorSum:Number,
    publicSum:Number,
  },
  data() {
    return{
      isActive: false,
      changeStatus:0
    }
  },
  methods:{
    // 鼠标点击后背景颜色加深
    // 进行修改后向父组件传递 进行了修改并提示提交修改
    click(){
      this.isActive = true;
      // console.log(1)
    },
    change(){
      this.changeStatus = 1;
      this.$emit('changeEvent', this.changeStatus)
      this.changeStatus = 0;
    },
    // 鼠标离开后背景颜色变浅
    leave(){
      this.isActive = false;
    }
  }
}
</script>

<style scoped>
    * {
        font-size: .14rem;
    }
    #Container {
        display: flex;
        flex-direction: column;
        height: 2.08rem;
        border: .01rem solid black;
        margin-top: .05rem;
    }
    .active {
        background-color: lightcyan;
    }
    .leave {
        background-color: white;
    }
    .inputBox {
        width: 1.5rem;
        height: .2rem;
        margin-top: .02rem;
    }
    span {
        display: inline-block;
        width: 1rem;
        height: .2rem;
        /*font-size: .1rem;*/
    }
    .itemBox {
        width: 2.8rem;
        height: 2.1rem;
    }
    .itemBox span {
        width: 1rem;
        height: .2rem;
        /*font-size: .14rem;*/
    }
</style>
