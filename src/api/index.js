import request from '@/utils/request'
import qs from 'qs'
// 注册
export const register = (data) => {
    return request({
        url: '/poss/register.html',
        method: 'post',
        data: qs.stringify(data),
        header: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}
//登录
export const login = (data) => {
    return request({
        url: '/poss/login.html',
        method: 'post',
        data: qs.stringify(data),
        header: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}
//运费价格
export const getPriceList = (data) => {
    return request({
        url: '/poss/getPriceList.html',
        method: 'get',
        data: qs.stringify(data),
        header: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })
}
//价格明细
export const getPriceDetail = (data) => {
    return request({
        url: '/poss/getPriceDetail.html',
        method: 'get',
        data: qs.stringify(data),
        header: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}
//收货地址-创建
export const addMyAddress = (data) => {
    return request({
        url: '/poss/addMyAddress.html',
        method: 'post',
        data: qs.stringify(data),
        header: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}
//收货地址-查询
export const queryMyAddress = (data) => {
    return request({
        url: '/poss/queryMyAddress.html',
        method: 'get',
        data: qs.stringify(data),
        header: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}
//收货地址-更新
export const updMyAddress = (data) => {
    return request({
        url: '/poss/updMyAddress.html',
        method: 'post',
        data: qs.stringify(data),
        header: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}
//我的包裹列表
export const getMyOrders = (data) => {
    return request({
        url: '/poss/getMyOrders.html',
        method: 'get',
        data: qs.stringify(data),
        header: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}
//我的包裹列表
export const getMyOrderDetail = (data) => {
    return request({
        url: '/poss/getMyOrderDetail.html',
        method: 'get',
        data: qs.stringify(data),
        header: {
            'Content-Type': 'application/x-www-form-urlencoded',

        }
    })
}

// // 默认全部导出
// export default {
//     register,
//     login,
//     getPriceList
// }