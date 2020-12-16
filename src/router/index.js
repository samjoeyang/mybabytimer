import Vue from 'vue'
import VueRouter from 'vue-router'
import Timer from '../views/Timer'
import TimeLine from '../views/TimeLine'
import Upload from '../views/Upload'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Timer', component: Timer },
  { path: '/timeline', name: 'TimeLine', component: TimeLine },
  { path: '/upload', name: 'Upload', component: Upload },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
