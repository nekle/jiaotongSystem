<template>
  <div>

    <el-upload
        class="upload-demo"
        ref="upload1"
        action="https://localhost:8086/postParamFiles"
        :file-list="fileList.cross"
        :auto-upload="false"
        :multiple="false"
        :limit="1"
        name="cross"
        accept=".csv"
        :on-preview="handlePreview"
        :on-change="onChangeCross"
        :on-remove="onRemoveCross"
    >
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <div slot="tip" class="el-upload__tip">文件名称应为"cross.csv"的csv类型文件</div>
    </el-upload>

    <el-upload
        class="upload-demo"
        ref="upload2"
        :file-list="fileList.link"
        :auto-upload="false"
        :multiple="false"
        :limit="1"
        name="link"
        accept=".csv"
        action="https://localhost:8086/postParamFiles"
        :on-preview="handlePreview"
        :on-change="onChangeLink"
        :on-remove="onRemoveLink"
    >
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <div slot="tip" class="el-upload__tip">文件名称应为"link.csv"的csv类型文件</div>
    </el-upload>

    <el-upload
        class="upload-demo"
        ref="upload3"
        :file-list="fileList.link_points"
        :auto-upload="false"
        :multiple="false"
        :limit="1"
        name="link_points"
        accept=".txt"
        action="https://localhost:8086/postParamFiles"
        :on-preview="handlePreview"
        :on-change="onChangeLinkPoints"
        :on-remove="onRemoveLinkPoints"
    >
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <div slot="tip" class="el-upload__tip">文件名称应为"link_points.txt"的txt类型文件</div>
    </el-upload>

    <el-upload
        class="upload-demo"
        ref="upload4"
        :file-list="fileList.grds"
        :auto-upload="false"
        :multiple="true"
        :limit="10"
        name="grds"
        action="https://localhost:8086/postParamFiles"
        :on-preview="handlePreview"
        :on-change="onChangeGRDs"
        :on-remove="onRemoveGRDs"
    >
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <div slot="tip" class="el-upload__tip">文件名称应为"*.GRD"的GRD类型文件，"*"处为文件名字</div>
    </el-upload>

    <el-upload
        class="upload-demo"
        ref="upload5"
        :file-list="fileList.map_img"
        :auto-upload="false"
        :multiple="false"
        :limit="1"
        name="map_img"
        accept=".png"
        action="https://localhost:8086/postParamFiles"
        :on-preview="handlePreview"
        :on-change="onChangeMapImg"
        :on-remove="onRemoveMapImg"
    >
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <div slot="tip" class="el-upload__tip">文件名称应为"bg00.png"的png类型文件</div>
    </el-upload>

    <el-upload
        class="upload-demo"
        ref="upload6"
        :file-list="fileList.map_info"
        :auto-upload="false"
        :multiple="false"
        :limit="1"
        name="link"
        accept=".txt"
        action="https://localhost:8086/postParamFiles"
        :on-preview="handlePreview"
        :on-change="onChangeMapInfo"
        :on-remove="onRemoveMapInfo"
    >
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <div slot="tip" class="el-upload__tip">文件名称应为"*.txt"的txt类型文件,"*"处为文件名字</div>
    </el-upload>

    <el-button type="success" @click="submitUpload">导入参数</el-button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'VarEdition',
  data() {
    return {
      fileList: {
        cross: [],
        link: [],
        link_points: [],
        grds: [],
        map_img: [],
        map_info: [],
      },
    }
  },
  methods: {
    findDir(e) {
      for (let entry of e.target.files)
        console.log(entry.name, entry.webkitRelativePath);
    },
    submitUpload() {
      console.log(this.fileList)
      let upLoadForm = new FormData()

      upLoadForm.append("cross", this.fileList.cross[0].raw)
      upLoadForm.append("link", this.fileList.link[0].raw)
      upLoadForm.append("link_points", this.fileList.link_points[0].raw)
      for (let i = 0; i < this.fileList.grds.length; ++i) {
        upLoadForm.append("grds", this.fileList.grds[i].raw)
      }
      upLoadForm.append("map_img", this.fileList.map_img[0].raw)
      upLoadForm.append("map_info", this.fileList.map_info[0].raw)
      upLoadForm.append("project_id", 35)

      axios.post("http://localhost:8086/postParamFiles", upLoadForm).then((res) => {
        console.log(res)
        alert(res.data)
      })

    },

    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },

    onChangeCross(file, fileList) {
      this.fileList.cross.push(file)
      console.log(file, fileList);
      console.log(this.fileList)
    },
    onRemoveCross(file, fileList) {
      this.fileList.cross.pop()
      console.log(file, fileList);
      console.log(this.fileList)
    },

    onChangeLink(file, fileList) {
     this.fileList.link.push(file)
      console.log(file, fileList);
      console.log(this.fileList)
    },
    onRemoveLink(file, fileList) {
      this.fileList.link.pop()
      console.log(file, fileList);
      console.log(this.fileList)
    },

    onChangeLinkPoints(file, fileList) {
      this.fileList.link_points.push(file)
      console.log(file, fileList);
      console.log(this.fileList)
    },
    onRemoveLinkPoints(file, fileList) {
      this.fileList.link_points.pop()
      console.log(file, fileList);
      console.log(this.fileList)
    },

    onChangeGRDs(file, fileList) {
      this.fileList.grds = fileList
      console.log(file, fileList);
      console.log(this.fileList)
    },
    onRemoveGRDs(file, fileList) {
      this.fileList.grds = fileList
      console.log(file, fileList);
      console.log(this.fileList)
    },

    onChangeMapImg(file, fileList) {
      this.fileList.map_img.push(file)
      console.log(file, fileList);
      console.log(this.fileList)
    },
    onRemoveMapImg(file, fileList) {
      this.fileList.map_img.pop()
      console.log(file, fileList);
      console.log(this.fileList)
    },

    onChangeMapInfo(file, fileList) {
      this.fileList.map_info.push(file)
      console.log(file, fileList);
      console.log(this.fileList)
    },
    onRemoveMapInfo(file, fileList) {
      this.fileList.map_info.pop()
      console.log(file, fileList);
      console.log(this.fileList)
    },

  }
}
</script>

<style scoped>
* {
  font-size: .14rem;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
