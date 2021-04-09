<template>
  <div id="Container">

        <div id="SearchContainer">
          <button class="button button-glow button-rounded button-royal button-small searchBtn" @click="searchProject">搜索</button>
          <div id="InputContainer">
            <input type="text" placeholder="请输入项目名称" v-model="searchCondition" class="InputBox">
            <span @click="clearSearch" id="clearSpan">x</span>
          </div>
        </div>

    <div class="ProjectBox">
      <ProjectInfo
          v-for="project in projects"
          :project="project"
          :key="project.id"
      ></ProjectInfo>
    </div>

    <div>
      <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="pageSize"
          layout="total, prev, pager, next"
          :total="projectSum"
      >
      </el-pagination>
    </div>

  </div>
</template>

<script>
import ProjectInfo from '@/components/ProjectManagement/ProjectInfo';
import myHttp from "../../../static/http";
import axios from "axios";

export default {
  name: 'ProjectSeachList',
  components: {
    ProjectInfo
  },

  data() {
    return {
      searchCondition: '',
      projects: [],
      currentPage: 1,
      pageSize: 4,
      pageSum: 100,
      projectSum: 5,
    };
  },
  computed:{},
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange() {
      this.getProjectsByPage()
    },
    clearSearch() {
      this.searchCondition = ''
    },
    initSearch(){
      this.currentPage = 1;
    },
    searchProject(){

      // 每次重新搜索前需初始化页码为1
      this.initSearch()
      this.getProjectsByPage()

    },
    getProjectsByPage() {

      let data1 = {
        "condition":this.searchCondition,
        "currentPage": this.currentPage,
        "pageSize": this.pageSize,
      }
      let data2 = {
        "condition":this.searchCondition,
        "pageSize": this.pageSize,
      }
      let data3 = {
        "condition":this.searchCondition,
      }
      let axioses = []
      axioses.push(myHttp.get("http://localhost:8086/searchProject", {params: data1}))
      axioses.push(myHttp.get("http://localhost:8086/getSearchProjectPageSum", {params: data2}))
      axioses.push(myHttp.get("http://localhost:8086/getSearchProjectSum", {params:data3}))

      // 并发执行请求
      axios.all(axioses).then((reslist) => {
        // console.log(reslist)
        this.projects = reslist[0].data
        this.pageSum = reslist[1].data
        this.projectSum = reslist[2].data
      })

    }
  },

  mounted() {

    this.searchCondition = this.$route.query.searchCondition
    console.log(this.$route.query.searchCondition)
    let data1 = {
      "condition":this.searchCondition,
      "currentPage": this.currentPage,
      "pageSize": this.pageSize,
    }
    let data2 = {
      "condition":this.searchCondition,
      "pageSize": this.pageSize,
    }
    let data3 = {
      "condition":this.searchCondition,
    }
    let axioses = []

    axioses.push(myHttp.get("http://localhost:8086/searchProject", {params: data1}))
    axioses.push(myHttp.get("http://localhost:8086/getSearchProjectPageSum", {params: data2}))
    axioses.push(myHttp.get("http://localhost:8086/getSearchProjectSum", {params:data3}))

    // 并发执行请求
    axios.all(axioses).then((reslist) => {
      // console.log(reslist)
      this.projects = reslist[0].data
      this.pageSum = reslist[1].data
      this.projectSum = reslist[2].data
    })


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

#Container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 10rem;
}

#SearchContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.searchBtn {
  font-size: .12rem;
  padding:0 .3rem
}
.InputBox {
  width: 200px;
  height: 25px;
}

#clearSpan {
  position: relative;
  left: -20px;
}

.ProjectBox {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding-left: .1rem;
  height: 7rem;
}
>>> .el-pagination__total {
  color: white;
}

</style>
