<template>
    <div id="ContainerBox">
        <div id="SimStartTime">
            <TimePicker/>
        </div>
        <div id="VehicleCapacity" class="FactorBox"></div>
        <div id="EvnFactors" class="FactorBox">
            <div id="WeatherFactor" ></div>
            <div id="SeasonFactor" ></div>
            <div id="RoadFactor" ></div>
        </div>
        <div id="PatternFactor" class="FactorBox"></div>
    </div>
</template>

<script>
import TimePicker from '@/components/PlanSettings/TImePicker';
export default {
  name: 'OtherSettings',
  components:{
    TimePicker
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
    #SimStartTime {
        height: 118px;
        width: 318px;
        border: 1px solid black;
    }
    .FactorBox {
        height: 158px;
        width: 318px;
        border: 1px solid black;
    }
</style>