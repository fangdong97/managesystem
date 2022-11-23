import LayOut from '../views/LayOut/LayOut.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'LayOut',
    component: LayOut,
    children: [
      {
        path: '/goodsList',
        name: 'GoodsList',
        component: () => import('@/views/GoodsList/GoodsList.vue')
      },
      {
        path: '/orderList',
        name: 'OrderList',
        component: () => import('@/views/OrderList/OrderList.vue')
      },
      {
        path: '/goodsType',
        name: 'GoodsType',
        component: () => import('@/views/GoodsType/GoodsType.vue')
      },
      {
        path: '/setting',
        name: 'Setting',
        component: () => import('@/views/Setting/Setting.vue')
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFound/NotFound.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
