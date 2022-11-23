import request from '@/untils/request'

const getGoodsList = (params = {}) => request.get('/getGoodsList', { params })

export default getGoodsList
