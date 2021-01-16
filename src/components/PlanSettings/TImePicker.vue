<template>
    <div class="hello">
        <input type="text" placeholder="选择体检时间" id="orderTime" v-model="date">
    </div>
</template>

<script src="./static/layDate-v5.0.9/laydate/laydate.js" type="text/javascript" charset="utf-8"></script>
<script>
export default {
  name: "TimePicker",
  data() {
    return {
      date: ""// 存储选择的日期
    };
  },
  mounted() {
    laydate.render({
      elem: '#test-limit3'
      ,type: 'time'
      ,min: '09:30:00'
      ,max: '17:30:00'
      ,btns: ['clear', 'confirm']
    });
  }
};
</script>

<style scoped>
    .hello {
        display: inline-block;
    }
    .hello input {
        margin-left: -4px;
        width: 300px;
        height: 40px;
        border-radius: 4px;
        border: 1px solid #DCDFE6;
    }
    .layui-laydate .layui-this {
        background-color: #358ee7 !important;
    }
</style>