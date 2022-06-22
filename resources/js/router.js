import Vue from "vue";
import VueRouter from "vue-router";
import Home from './pages/Home';
import  Notices from './pages/Notices';
import Create from './pages/Create';

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass:'active',
    routes:[
        {
            path:'/',
            name:'home',
            component: Home,
        },
        {
            path:'/notices',
            name:'notices',
            component:Notices,
        },
        {
            path:'/create',
            name:'create',
            component: Create,
        }
    ]
});
export default router;
