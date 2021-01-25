<template>
    <div id="Container">
        <span>开始时间</span>
        <input type="time" v-model="time"/>
    </div>
</template>


<script>
export default {
  name: "TimePicker",
  data(){
    return {
      time:'13:59'
    };
  },
  methods:{
    change(){
      this.changeStatus = 1;
      this.$emit('changeEvent', this.changeStatus)
      this.changeStatus = 0;
    }
    // choose(choice){
    //   this.choice = choice;
    // },
    // up(){
    //   if(this.choice == 1){
    //     if(this.time.hour<24&&this.time.hour>=0){
    //       this.time.hour++;
    //     }
    //     else{
    //       this.time.hour = 0;
    //     }
    //   }
    //   else{
    //       if(this.time.min<60&&this.time.min>=0){
    //         this.time.min++;
    //       }
    //       else{
    //         this.time.min = 0;
    //       }
    //   }
    // },
    // down(){
    //     if(this.choice == 1){
    //       if(this.time.hour<24&&this.time.hour>0){
    //         this.time.hour--;
    //       }
    //       else if(this.time.hour === 0){
    //         this.time.hour = 24;
    //       }
    //     }
    //     else{
    //       if(this.time.min<60&&this.time.min>0){
    //         this.time.min--;
    //       }
    //       else{
    //         this.time.min = 60;
    //       }
    //     }
    // }
  }
};
</script>

<style scoped>
    #Container {
        background-color: white;
    }
    #Container input {
        width: 100px;
    }
</style>