import { ref } from 'vue'
import axios from 'axios'
//需要拦截器的地方使用instance对象， 有自定义返回逻辑的地方沿用axios，在组件内部处理返回结果即可
// import instance from './filter'
// 封装轮播图接口
// const imageUrl = ref('/json')
// export const getBanners = () => {
//     return axios.get(imageUrl.value + '/banner.json')
// }
// 使用代理解决跨域请求
// const http = ref('/api')
const http = ref('http://localhost:5000/api')
export const getBanners = () => {
    return axios.get(http.value + '/Image/GetImages')
}
// const contentFlower = ref('/images')
export const getLoveFlowers = () => {
    return axios.get(http.value + '/Flowers/GetLoveFlowers')
}

export const getBirthdayFlowers = () => {
    return axios.get(http.value + '/Flowers/GetBirthdayFlowers')
}

export const getFriendFlowers = () => {
    return axios.get(http.value + '/Flowers/GetFriendFlowers')
}

export const getWeddingFlowers = () => {
    return axios.get(http.value + '/Flowers/GetWeddingFlowers')
}

export const Register = (parms: {}) => {
    // return axios.post(http.value + "/Login/Register", parms); 
    return axios.post(http.value + '/Register', parms)
}

export const Login = (parms: {}) => {
    return axios.post(http.value + '/Login',parms)
    // return axios.post(http.value + "/Login/Check", parms); 
}

//生成一笔订单
export const CreateOrder = (parms: {}) => {
    //在header里携带token访问后端接口
    // axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage["token"];
    // return axios.post(http.value + "/Order/CreateOrder", parms);
    const OrderInfo = {
        status: 202,
        data: {
            isSuccess: true,
            msg: '请求成功',
            result: '小张'
        }
    }
    return OrderInfo
}

//获取订单列表
export const GetOrder = () => {
    //在header里携带token访问后端接口
    // instance.defaults.headers.common['Authorization'] = "Bearer " + localStorage["token"];
    // return instance.post(http.value + "/Order/GetOrder");
    return axios.get(http.value + '/Order/GetOrders')
}

