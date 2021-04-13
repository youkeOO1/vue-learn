import axios from 'axios';
/**
 * 设置默认请求地址
 */
axios.defaults.baseURL = 'http://localhost:8080/';
/**
 * 请求拦截
 */
axios.interceptors.request.use(request => {
    request.url += '.json'
    return request;
})
/**
 * 响应拦截
 */
axios.interceptors.response.use(response =>{
    return response.data.data;
})
export default axios;