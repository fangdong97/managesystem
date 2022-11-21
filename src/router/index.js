import LayOut from '../views/LayOut/LayOut.vue'
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "LayOut",
    component: LayOut,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
