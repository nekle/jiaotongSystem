<template>
    <div id="ContainerBox">
        <div id="PointList">
            <li v-for="cross in this.crosses" :key="cross.key">
                <ResidentNode @changeEvent="change($event)"
                              :name="cross.name"
                              :passenger-sum="cross.passenger_sum "
                              :carSum="cross.car_passenger_sum"
                              :truckSum="cross.truck_sum"
                              :motorSum="cross.motor_sum"
                              >
                </ResidentNode>
            </li>
        </div>
    </div>
</template>

<script>
import ResidentNode from '@/components/PlanSettings/ResidentNode';
import myHttp from '../../../static/http';
import {MyMarker} from '../../../static/MyMarker';
export default {
  name: 'ResidentPoints',
  components:{
    ResidentNode
  },
  data(){
    return{
      changeStatus : 0,
      crosses:[]
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
  },
  mounted(){
    myHttp.get("http://localhost:8086/getCrossByType/3").then(res=>{
      for (let i=0;i<res.data.length;i++){
          this.crosses.push(new MyMarker(
            res.data[i].id,
            res.data[i].name,
            res.data[i].latitude,
            res.data[i].longtitude,
            res.data[i].type,
            res.data[i].car_sum,
            res.data[i].car_start_time,
            res.data[i].car_start_interval,
            res.data[i].passenger_sum,
            res.data[i].car_passenger_sum,
            res.data[i].truck_sum,
            res.data[i].motor_sum,
            res.data[i].capacity)
          )
      }
      // console.log(this.crosses[1])
    }).then(()=>{
      // console.log(this.crosses)
    })
  }
}
</script>

<style scoped>
    #ContainerBox {
        width: 3.2rem;
        display: flex;
        flex-direction: column;
    }
    #PointList {
        width:  3.2rem;
        height: 6rem;
        background-color: white;
        overflow-y: scroll;
    }
    #PointList li{
        list-style: none;
    }
</style>
