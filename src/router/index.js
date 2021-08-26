import { createRouter, createWebHistory } from 'vue-router'
import TimetablePage from "@/views/TimetablePage";

const routes = [
  {
    path: '/',
    name: 'TimetablePage',
    component: TimetablePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
