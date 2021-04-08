<template>
  <div name="container" class="container">
    <dv-border-box-13 >

    <div class="proj-container">

      <el-image
          style="width: 3rem; height: 2.5rem"
          :src="imgURL"
          fit="contain">
      </el-image>

      <div class="info">
        <div>
          <span>项目名称 :</span>{{ project.name }}
        </div>
        <div>
          <span>路 径:</span>
          <br>{{ project.path }}
        </div>
        <div>
          <span>状 态：</span>{{ status }}
        </div>
        <div>
          <span>创建时间:</span>{{ project.date }}
        </div>
        <el-button type="primary" @click="jump('/ProjectManagement/OpenedProject')">打开项目</el-button>
      </div>


    </div>


    </dv-border-box-13>
  </div>

</template>

<script>
import alt from "@/assets/alt.png"

export default {
  name: 'ProjectInfo',
  props: ['project'],
  data() {
    return {
      imgURL: alt,
    }
  },
  methods: {
    jump(path) {
      //this.$router.push("/cart")
      //传递的参数用{{ $route.query.goodsId }}获取
      this.$router.push({path: path})
    }
  },
  created() {
    console.log()
  },
  computed:{
    status: function (){
      let status = ''
      switch (this.project.status){

        case 1:{
          status += "已创建"
          break
        }

        case 2:{
          status += "已创建-已导入数据"
          break
        }
        case 3:{
          status += "已创建-已导入数据-已完成仿真"
          break
        }
        case 4:{
          status += "已创建-已导入数据-已完成仿真-已完成指标计算"
          break
        }

      }

      return status
    }
  }
}
</script>

<style scoped>
* {
  font-size: .14rem;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Helvetica";
  text-decoration: none;
}

.container {
  width: 6.5rem;
  height: 3rem;
}

.proj-container {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  color: white;
  padding: 0.1rem;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3rem;
  height: 1rem;
  text-align: left;
}

.info span {
  font-weight: bold;
}

</style>
