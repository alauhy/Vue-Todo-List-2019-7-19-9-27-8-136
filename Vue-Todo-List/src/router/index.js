import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '../views/list'
import Main from '../views/index'
import Home from '../views/home'
import Profile from '../views/Profile'


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/home/:userName',
            redirect: '/home/:userName/todos',
            name: 'home',
            component: Home,
            children: [
                {
                    path: 'todos',
                    name: 'todos',
                    component: TodoList
                }, {
                    path: 'profile',
                    name: 'profile',
                    component: Profile
                }
            ]
        }
    ]
})