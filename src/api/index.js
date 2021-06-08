import request from '@/utils/request'

const req = (url, method = 'post', opts = {}) => {
    return (data, options = {}) => {
        return request({ url, data, method, ...opts, ...options });
    }
}

export const register = req('/poss/register.html');
export const login = req('/poss/login.html');
export const getPriceList = req('/poss/getPriceList', 'get');
export const getPriceDetail = req('/poss/getPriceDetail', 'get');

// // 默认全部导出
// export default {
//     register,
//     login,
//     getPriceList
// }