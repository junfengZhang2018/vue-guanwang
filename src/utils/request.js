/****   request.js   ****/
// 导入axios
import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'
import router from '../router'
import util from '@/util';

//1. 创建新的axios实例，
const service = axios.create({
  // 公共接口--这里注意后面会讲
  baseURL: process.env.NODE_ENV !== 'production' ? '/api' : 'http://47.243.104.54:8082',
// 2.请求拦截器 
  timeout: 15 * 1000
})

// 2.请求拦截器
service.interceptors.request.use(config => {
  if(config.method.toLowerCase() == 'get'){
    config.params = config.data;
  }else{
    config.data = qs.stringify(config.data);
  }
  config.headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'token': util.storage.get('token')
  }
  return config
}, error => {
  Promise.reject(error)
})

// 3.响应拦截器
service.interceptors.response.use(response => {
  //接收到响应数据并成功后的一些共有的处理，关闭loading等
  if(response.data.status == 403){
    Message.error('权限不足，请先登录')
    util.storage.remove('user');
    util.storage.remove('token');
    util.storage.remove('userData');
    // this.SET_USER_INFO(res.obj);
    // this.SET_USER_NAME(res.obj.user_name)
    router.push('/signIn')
    return false;
  }else if(response.data.status != 200){
    Message.error(response.data.message)
    return Promise.reject(response.data)
  }
  return response.data;
}, error => {
   /***** 接收到异常响应的处理开始 *****/
  if (error && error.response) {
    // 1.公共错误处理
    // 2.根据响应码具体处理
    switch (error.response.status) {
      case 400:
        error.message = '错误请求'
        break;
      case 401:
        error.message = '拒绝访问'
        break;
      case 403:
        error.message = '权限不足，请先登录'
        break;
      case 404:
        error.message = '请求错误,未找到该资源'
        break;
      case 405:
        error.message = '请求方法未允许'
        break;
      case 408:
        error.message = '请求超时'
        break;
      case 500:
        error.message = '服务器端出错'
        break;
      case 501:
        error.message = '网络未实现'
        break;
      case 502:
        error.message = '网络错误'
        break;
      case 503:
        error.message = '服务不可用'
        break;
      case 504:
        error.message = '网络超时'
        break;
      case 505:
        error.message = 'http版本不支持该请求'
        break;
      default:
        error.message = `连接错误${error.response.status}`
    }
    Message.error(error.message);
  } else {
    // 超时处理
    if (JSON.stringify(error).includes('timeout')) {
      Message.error('服务器响应超时，请刷新当前页')
    }
    error.message = '连接服务器失败'
  }
  /***** 处理结束 *****/
  //如果不需要错误处理，以上的处理过程都可省略
  return Promise.resolve(error.response)
})
//4.导入文件
export default service