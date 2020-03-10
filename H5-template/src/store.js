import Vue from "vue";
import Vuex from "vuex";
//import vuexlong from 'vuex-along'   //缓存vuex数据插件   ----如需使用 需要安装

Vue.use(Vuex);
export default new Vuex.Store({
    state: {

    },
    mutations: {},
    actions: {},
    plugins: [
        //缓存vuex里的数据，防止刷新页面后vuex数据丢失
        /*vuexlong({
            name: 'backEnd_vux',
            session: {
                list: [
                    'baseURL',//不需要缓存的state数据实例
                ],
                isFilter: true
            },
            justSession: true,
        })*/
    ]
});