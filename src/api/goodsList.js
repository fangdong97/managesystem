import request from '@/utils/request'

const getGoodsList = (params = {}) => request.get('/getGoodsList', { params })

export default getGoodsList
