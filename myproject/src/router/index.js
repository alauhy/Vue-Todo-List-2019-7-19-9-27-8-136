import Vue from 'vue'
import Router from 'vue-router'
import ToDoList from '@/views/list'
import Index from '@/views/index'
import Home from '@/views/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/todolist',
      name: 'ToDoList',
      component: ToDoList
    },
    {
      path: '/',
      name: 'Index',
      component:Index
    },
    {
      path: '/home',
      name: 'Home',
      component:Home
    }
  ]
})
