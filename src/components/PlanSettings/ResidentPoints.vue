<template>
    <div id="ContainerBox">
        <div id="PointList">
            <ResidentNode @changeEvent="change($event)"></ResidentNode>
            <ResidentNode @changeEvent="change($event)"></ResidentNode>
            <ResidentNode @changeEvent="change($event)"></ResidentNode>
            <ResidentNode @changeEvent="change($event)"></ResidentNode>
        </div>
    </div>
</template>

<script>
import ResidentNode from '@/components/PlanSettings/ResidentNode';
export default {
  name: 'ResidentPoints',
  components:{
    ResidentNode
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