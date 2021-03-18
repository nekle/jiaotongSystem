import axios from 'axios';
let myHttp=axios.create({
  timeout:10000,
  // baseURL:'http://localhost:8086/',//默认根路径，将自动加在请求前面
});

//设置响应请求头
myHttp.defaults.headers.get['Content-Type'] = 'application/json';
// axios.defaults.headers.get['Content-Type'] = 'application/json';

export default myHttp;