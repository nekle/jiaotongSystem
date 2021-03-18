<template>
    <div id="ContainerBox">
        <div class="PointList">
                <li v-for="cross in this.crosses" :key="cross.id">
                    <PublicVehicleSourcesNode
                            @changeEvent="change($event)"
                                              :name=cross.name :v-number="cross.car_sum"
                                              :start-time="cross.car_start_time"
                                              :start-interval="cross.car_start_interval">
                    </PublicVehicleSourcesNode>
                </li>
        </div>
    </div>
</template>

<script>
import PublicVehicleSourcesNode from '@/components/PlanSettings/PublicVehicleSourcesNode';
import myHttp from '../../../static/http';
import {MyMarker} from '../../../static/MyMarker';
export default {
  name: 'PublicVehicleSources',
  components:{
    PublicVehicleSourcesNode
  },
  data(){
    return{
      changeStatus : 0,
      crosses:[],
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
    myHttp.get("http://localhost:8086/getCrossByType/1").then(res=>{
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
        width: 320px;
        display: flex;
        flex-direction: column;
    }
    .PointList {
        width:  320px;
        height: 600px;
        background-color: white;
        overflow-y: scroll;
    }

</style>