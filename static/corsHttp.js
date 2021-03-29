import axios from 'axios';
let corsHttp=axios.create({
  timeout:10000,
  baseURL:'/api',//默认根路径，将自动加在请求前面
});
corsHttp.defaults.baseURL = '/api'

//设置响应请求头
corsHttp.defaults.headers.get['Content-Type'] = 'application/json';


export default corsHttp;