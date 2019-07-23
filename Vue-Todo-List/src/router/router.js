import VueRouter from 'vue-router'
import Vue from 'vue'
import index from '../views/index.vue'
import list from '../views/list.vue'

Vue.use(VueRouter);
export default new VueRouter({
    routes: [
        {
            path: "/",
            redirect: "/home",
            name:'index',
            component: index
        },
        {path: "/todolist", component: list}
    ]
})
