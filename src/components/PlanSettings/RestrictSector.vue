<template>
    <div id="ContainerBox">
        <div id="PointList">
            <RestrictSectorNode @changeEvent="change($event)"></RestrictSectorNode>
            <RestrictSectorNode @changeEvent="change($event)"></RestrictSectorNode>
            <RestrictSectorNode @changeEvent="change($event)"></RestrictSectorNode>
            <RestrictSectorNode @changeEvent="change($event)"></RestrictSectorNode>
        </div>
    </div>
</template>

<script>
import RestrictSectorNode from '@/components/PlanSettings/RestrictSectorNode';
export default {
  name: 'RestrictSector',
  components:{
    RestrictSectorNode
  },
  data(){
    return{
      changeStatus : 0
    }
  },
  methods:{
    // 收到子组件的changeStatus 向父组件传递状态
    change(changeStatus) {
      this.changeStatus = changeStatus;
      this.$emit('changeEvent',this.changeStatus);
      this.changeStatus = 0;
      // console.log(2)
    }
  }
}
</script>

<style scoped>
    * {
        font-size: .14rem;
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    #ContainerBox {
        width: 320px;
        display: flex;
        flex-direction: column;
    }
    #PointList {
        width:  320px;
        height: 600px;
        background-color: white;
        overflow-y: scroll;
    }

</style>
