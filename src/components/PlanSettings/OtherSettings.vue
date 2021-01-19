<template>
    <div id="ContainerBox">
        <div id="SimStartTime">
            <TimePicker/>
        </div>
        <div id="VehicleCapacity" class="FactorBox">
            <div>
                车辆容量
            </div>
            <div>
                <span>公共车容量</span>
                <input type="text">
            </div>
            <div>
                <span>小汽车容量</span>
                <input type="text">
            </div>
            <div>
                <span>货车容量</span>
                <input type="text">
            </div>
            <div>
                <span>摩托车车容量</span>
                <input type="text">
            </div>
        </div>
        <div id="EvnFactors" class="FactorBox">
            <div id="WeatherFactor" >
                <div>
                    <div><span>天气因素</span></div>
                    <input type="radio" id="sunny" value="sunny" v-model="picked.weather">
                    <label for="sunny">晴天</label>
                    <br>
                    <input type="radio" id="foggy" value="foggy" v-model="picked.weather">
                    <label for="foggy">雾天</label>
                    <br>
                    <input type="radio" id="rainy" value="rainy" v-model="picked.weather">
                    <label for="rainy">雨天</label>
                    <br>
                    <input type="radio" id="snowy" value="snowy" v-model="picked.weather">
                    <label for="snowy">雪天</label>
                    <br>
                </div>
            </div>
            <div id="SeasonFactor" >
                <div>
                    <div><span>季节因素</span></div>
                    <input type="radio" id="spring" value="spring" v-model="picked.season">
                    <label for="spring">春天</label>
                    <br>
                    <input type="radio" id="summer" value="summer" v-model="picked.season">
                    <label for="summer">夏天</label>
                    <br>
                    <input type="radio" id="fall" value="fall" v-model="picked.season">
                    <label for="fall">秋天</label>
                    <br>
                    <input type="radio" id="winter" value="winter" v-model="picked.season">
                    <label for="winter">冬天</label>
                    <br>
                </div>
            </div>
            <div id="RoadFactor" >
                <div>
                    <div><span>路面因素</span></div>
                    <input type="radio" id="dry" value="dry" v-model="picked.ground">
                    <label for="dry">路面干燥</label>
                    <br>
                    <input type="radio" id="slippery" value="slippery" v-model="picked.ground">
                    <label for="slippery">路面湿滑</label>
                    <br>
                    <input type="radio" id="snow" value="snow" v-model="picked.ground">
                    <label for="snow">有积雪</label>
                    <br>
                </div>
            </div>
        </div>
        <div id="PatternFactor" class="FactorBox">
            <div>
                <input type="radio" id="avg" value="avg" v-model="lawModelPicked.picked" v-on:click="pick('id1')">
                <label for="avg">平均分布</label>
                <br>
                <input type="radio" id="zhengtai" value="zhengtai" v-model="lawModelPicked.picked" v-on:click="pick('id2')">
                <label for="zhengtai">正态分布</label>
                <br>
                <input type="radio" id="duishu" value="duishu" v-model="lawModelPicked.picked" v-on:click="pick('id3')">
                <label for="duishu">对数正太分布</label>
                <br>
                <input type="radio" id="bosong" value="bosong" v-model="lawModelPicked.picked" v-on:click="pick('id4')">
                <label for="bosong">泊松分布</label>
                <br>
                <input type="radio" id="zhishu" value="zhishu" v-model="lawModelPicked.picked" v-on:click="pick('id5')">
                <label for="zhishu">指数分布</label>
                <br>
            </div>
            <div id="VarBox1">
                <label for="a">a</label>
                <input type="text" id="a" value="a" v-model="lawModelPicked.a" :disabled="disabledRadio.id1">
                <br>
                <label for="mu1">mu</label>
                <input type="text" id="mu1" value="mu1" v-model="lawModelPicked.mu1" :disabled="disabledRadio.id2">
                <br>
                <label for="mu2">mu</label>
                <input type="text" id="mu2" value="mu2" v-model="lawModelPicked.mu2" :disabled="disabledRadio.id3">
                <br>
                <label for="lemda1">lemda</label>
                <input type="text" id="lemda1" value="lemda1" v-model="lawModelPicked.lemda1" :disabled="disabledRadio.id4">
                <br>
                <label for="lemda2">lemda</label>
                <input type="text" id="lemda2" value="lemda2" v-model="lawModelPicked.lemda2" :disabled="disabledRadio.id5">
                <br>
            </div>
            <div id="VarBox2">
                <label for="b">b</label>
                <input type="text" id="b" value="b" v-model="lawModelPicked.b" :disabled="disabledRadio.id1">
                <br>
                <label for="sigma1">sigma</label>
                <input type="text" id="sigma1" value="sigma1" v-model="lawModelPicked.sigma1" :disabled="disabledRadio.id2">
                <br>
                <label for="sigma2">sigma</label>
                <input type="text" id="sigma2" value="sigma2" v-model="lawModelPicked.sigma2" :disabled="disabledRadio.id3">
                <br>
            </div>
        </div>
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
      changeStatus : 0,
      picked:{
        weather:'',
        season:'',
        ground:''
      },
      lawModelPicked:{
        picked:'',
        a:'0',
        b:'100',
        mu1:'50',
        sigma1:'10',
        lemda1:'20',
        mu2:'50',
        sigma2:'10',
        lemda2:'-1'
      },
      disabledRadio:{
        id1:'disabled',
        id2:'disabled',
        id3:'disabled',
        id4:'disabled',
        id5:'disabled'
      }
    }
  },
  methods:{
    // 收到子组件的changeStatus 向父组件传递状态
    change(changeStatus) {
      this.changeStatus = changeStatus;
      this.$emit('changeEvent',this.changeStatus);
      this.changeStatus = 0;
      // console.log(2)
    },
    // 设置对应输入框是否可以进行输入
    pick(choice){
        this.disabledRadio.id1=this.disabledRadio.id2=this.disabledRadio.id3=this.disabledRadio.id4=this.disabledRadio.id5='disabled';
        switch (choice) {
          case 'id1':{this.disabledRadio.id1 =false;break;}
          case 'id2':{this.disabledRadio.id2 =false;break;}
          case 'id3':{this.disabledRadio.id3 =false;break;}
          case 'id4':{this.disabledRadio.id4 =false;break;}
          case 'id5':{this.disabledRadio.id5 =false;break;}
        }
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
        height: 38px;
        width: 318px;
        border: 1px solid black;
    }
    .FactorBox {
        height: 158px;
        width: 318px;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: flex-start;
    }
    #EvnFactors {
        display: flex;
        flex-direction: row;
    }
    #EvnFactors>div {
        width: 33%;
        height: 100%;
        border: 1px solid black;
    }
    #PatternFactor {
        height: 238px;
        display: flex;
        flex-direction: row;
    }
    #VarBox1 {
        /*border: 1px solid black;*/
    }
    #VarBox1>label {
        display: inline-block;
        text-align: center;
        width: 3em;
    }
    #VarBox1>input {
        width: 40px;
    }
    #VarBox2>label {
        display: inline-block;
        text-align: center;
        width: 3em;
    }
    #VarBox2>input {
        width: 40px;
    }
</style>