import VueRouter from "vue-router";

//导入组件
import account from './main/Account.vue';
import goodslist from './main/GoodsList.vue';

//导入Account的两个子组件
import login from './other/login.vue';
import signup from  './other/signup.vue'

// 创建路由对象
let routerObj = new VueRouter({
    routes: [
        {
            path: '/account',
            component: account,
            children:[
                {path:'login',component:login},
                {path:'signup',component:signup},
            ]
        },
        { path: '/goodslist', component: goodslist }
    ]
});

//暴露路由对象
export default routerObj;