import request from '@/utils/request'
import qs from 'qs'

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
export const getPriceList = (data) => {
    return request({
        url: '/poss/getPriceList.html',
        method: 'get',
        data: qs.stringify(data),
        header: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}
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

// // 默认全部导出
// export default {
//     register,
//     login,
//     getPriceList
// }