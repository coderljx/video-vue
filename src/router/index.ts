import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path : "/",
    redirect : "/home"
  },
  {
    path : "/home",
    component : () => import('../components/Home/Home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
