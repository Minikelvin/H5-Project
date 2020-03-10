import Vue from "vue";
import Router from "vue-router";
import Index from "@/views/index/index";

Vue.use(Router);

export default new Router({
    mode: "hash",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "index",
            component: Index,
            meta: {
                title: '首页',
                //requireAuth: true, // 在需要登录的路由的meta中添加响应的权限标识-----路由守卫
            },
        },
    ]
});

