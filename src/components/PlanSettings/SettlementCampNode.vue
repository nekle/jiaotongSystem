<template>
    <div id="Container" @click="click($event)" @mouseleave="leave($event)" v-bind:class="[{active:isActive}]">
        <div class="itemBox"><span>节点</span>
            <span>名称：</span><input v-on:input="change()" type="text" class="inputBox" :value="name">
            <span>容量：</span><input v-on:input="change()" type="text" class="inputBox" :value="capacity">
        </div>
    </div>
</template>

<script>
export default {
  name: 'RestrictSectorNode',
  props:{
    name:String,
    capacity:Number,
  },
  data() {
    return{
      isActive: false,
      changeStatus:0,
      lanes:[
        {id:1},
        {id:2},
        {id:3},
        {id:4},
      ],
      chosenLane:''
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
    #Container {
        display: flex;
        flex-direction: column;
        height: 100px;
        border: 1px solid black;
        margin-top: 5px;
    }
    .active {
        background-color: lightcyan;
    }
    .leave {
        background-color: white;
    }
    .inputBox {
        width: 120px;
        height: 20px;
        margin-top: 2px;
    }
    span {
        display: inline-block;
        width: 150px;
        height: 20px;
    }
    .itemBox {
        width: 280px;
    }
</style>