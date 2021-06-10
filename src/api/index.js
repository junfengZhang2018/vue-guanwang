import request from '@/utils/request'

const req = (url, method = 'post', opts = {}) => {
    return (data, options = {}) => {
        return request({ url, data, method, ...opts, ...options });
    }
}
export const register = req('/poss/register.html');// 注册
export const login = req('/poss/login.html');// 登录
export const getPriceList = req('/poss/getPriceList.html','get');// 运费价格
export const getPriceDetail = req('/poss/getPriceDetail.html', 'get');// 价格明细
export const addMyAddress =  req('/poss/addMyAddress.html');//收货地址-创建
export const queryMyAddress =  req('/poss/queryMyAddress.html', 'get');//收货地址-查询
export const updMyAddress =  req('/poss/updMyAddress.html');//收货地址-更新
export const deleteMyAddress =  req('/poss/deleteMyAddress.html');//收货地址-删除
export const addMyOrder =  req('/poss/addMyOrder.html');//新增我的包裹
export const getMyOrders =  req('/poss/getMyOrders.html', 'get');//我的包裹列表
export const getMyOrderDetail =  req('/poss/getMyOrderDetail.html');//我的包裹详情
export const addMyBills =  req('/poss/addMyBills.html');//提交运输

