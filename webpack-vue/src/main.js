// //使用webpack 构建的项目中 使用Vue进行开发
// import './css/index.css'
//
// //webpack 中导入的Vue构造函数 功能不完整 只能提供 runtime-only的方式 并没有提供像网页那样的使用方式
// // 方法一： 得配置webpack.config.js文件的resolve
// import Vue from  'vue';
// //方法二：
// // import Vue from '../node_modules/vue/dist/vue'
//
// //TODO webpack导入vue组件
// //默认打包不了 需要重新安装一个 loader  在module 中配置
// // npm install vue-loader vue-template-compiler -D
// import login from './main/login.vue';
//
// let app = new Vue({
//     el:'#app',
//     data:{
//         message:'陈情令  真好看'
//     },
//     //渲染组件
//     components:{ login},
//     // render:c=>c(login)
//
// });

/**
 *
 * */
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Vue from 'vue';
// 导入vue-router包
import VueRouter from 'vue-router';
// 手动安装VueRouter
Vue.use(VueRouter);

//导入路由模块
import routerObj from './router'

import app from './App.vue';
const vm = new Vue({
    el: '#app',
    data: {},
    render: c => c(app),
    // 将路由对象挂载到vm上
    router:routerObj
});