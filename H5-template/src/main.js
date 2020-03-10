import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './common/css/reset.css'//清除默认样式
import http from './axios/axios';
import axios from 'axios'               // 引入axios

//仿ios移动端弹窗
import {Alert, Confirm, Loading, Toast} from 'wc-messagebox'
import 'wc-messagebox/style.css'

Vue.use(Alert);
Vue.use(Confirm);
Vue.use(Toast);
Vue.use(Loading);


Vue.config.productionTip = false;
Vue.prototype.$http = http;
Vue.prototype.$axios = axios;

//路由守卫
/*router.beforeEach((to, from, next) => {
    // 哪些需要验证
    if (to.matched.some(record => record.meta.requireAuth)) {
        // token存在条件
        if (!sessionStorage.getItem("upsToken")) {

            ElementUI.Message.error('请先登录');
            next({
                // 验证失败要跳转的页面
                path: '/login',
                // 要传的参数
                query: {}
            })
        } else {
            next()
        }
    } else {
        next()
    }
});*/

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");

export default Vue
