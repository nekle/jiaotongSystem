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
              <span>状 态：</span>{{ project.status }}
            </div>
            <div>
              <span>创建时间:</span>{{ project.date }}
            </div>
            <el-button type="primary" @click="jump('/ProjectManagement/ProjectOpen')">关闭项目</el-button>
          </div>


        </div>

      </dv-border-box-13>

    </div>

</template>

<script>
import myHttp from "../../../static/http";
import alt from "@/assets/alt.png"

export default {
  name: 'OpenedProject',
  components: {
  },

  data() {
    return {
      imgURL: alt,
      project:''
    };
  },

  methods: {

    /*
       @description 路由跳转函数
       @author Nekkl
       @date 2021/4/8
       @param path 目标路由
       @return
    */
    jump(path) {
      //this.$router.push("/cart")
      //传递的参数用{{ $route.query.goodsId }}获取
      this.$router.push({path: path})
    },
    /*
       @description 获取当前打开的项目
       @author Nekkl
       @date 2021/4/8
       @param
       @return
    */
    getOpenedProject(){
      myHttp.get("http://localhost:8086/getOpenedProject").then(res=>{

        if(res.data.code == 1){
          this.project = res.data.project
        }

      })
    }

  },

  mounted() {

    // this.getOpenedProject()

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
