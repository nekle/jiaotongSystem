<template>
    <div id="Container" @click="click($event)" @mouseleave="leave($event)" v-bind:class="[{active:isActive}]">
        <span>路线 </span> <span style="margin-left: 7.5em">车道 限速</span>
        <div class="itemBox"><span>节点：1--->节点2</span>
            <select v-model="chosenLane">
                <option v-for="lane in lanes" v-bind:key="lane.id">{{lane.id}}}</option>
            </select>
            <input v-on:input="change()" type="text" class="inputBox">
        </div>
        <div class="itemBox"><span>节点：3--->节点4</span>
            <select v-model="chosenLane">
                <option v-for="lane in lanes" v-bind:key="lane.id">{{lane.id}}}</option>
            </select>
            <input v-on:input="change()" type="text" class="inputBox">
        </div>
    </div>
</template>

<script>
export default {
  name: 'RestrictSectorNode',
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
        width: 60px;
        height: 20px;
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