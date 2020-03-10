import axios from 'axios'               // 引入axios
//import {Message} from 'element-ui';      // 引入ele-ui的消息提示部分

import router from '../router'
import Vue from 'vue'
let vm=new Vue();

// api地址 .env.多环境配置文件
axios.defaults.baseURL = process.env.VUE_APP_BASEURL;

//业务接口
const api = {
    //获取图形验证码
    getImgCode:'/epidemic/captcha.jpg',
    getMessage:'/epidemic/message',//   获取短信验证码
    search:'/epidemic/query'//查询同乘数据
};

//设置默认请求头
axios.defaults.headers = {
    'X-Requested-With': 'XMLHttpRequest',
    "content-type": "application/json",           // 设置传输类型(json)
};

// 响应时间
axios.defaults.timeout = 10000;

let cancel, promiseArr = {};
const CancelToken = axios.CancelToken;


// "请求" 拦截器
axios.interceptors.request.use(config => {
    //判断是否存在token，如果存在的话，则每个http header都加上token
    if (sessionStorage.getItem('upsToken')) {
        config.headers.upsToken = sessionStorage.getItem('upsToken')
    }
    //发起请求时，取消掉当前正在进行的相同请求
    if (promiseArr[config.url]) {
        promiseArr[config.url]('操作取消');
        promiseArr[config.url] = cancel
    } else {
        promiseArr[config.url] = cancel
    }
    //请求参数的空字符串的转为null
    if (config.method === 'post') {
        for (let i in config.data) {
            config.data[i] = (config.data[i] === '' ? null : config.data[i])
        }
    } else if (config.method === 'get') {
        for (let i in config.params) {
            config.params[i] = (config.params[i] === '' ? null : config.params[i])
        }
    }
    return config
}, error => {
    return Promise.reject(error)
});

// "响应" 拦截器
axios.interceptors.response.use(response => {
    // 获取token并把token放在sessionStorage中,根据实际需求选择存储方式即可
    let data = response.data.data;      // 根据实际数据结构取得返回的token
    if (data && data.hasOwnProperty("amsToken")) {
        sessionStorage.setItem('token', data.amsToken);
        axios.defaults.headers.token = sessionStorage.getItem('token');
    }
    return response;
}, err => {
    // 请求的错误判断,根据不同的错误码不同消息提醒
    if (err && err.response) {
        switch (err.response.status) {
            case 400 :
                err.message = err.response.data.msg;
                break;
            default:
                err.message = `连接错误${err.response.status}`
        }
    } else {
        if (err.message != '操作取消') {
            err.message = "连接到服务器失败"
        }
    }
    // 错误提示---被拦截的重复请求，不提示
    if (err.message != '操作取消') {
        //Message.error(err.message)
    }
    return Promise.resolve(err.response)
});


export default {
    //api
    api: api,
    getCode(url, param) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: url,
                //params: querystring.stringify(param),   // 表单形式提交
                params: param,
                responseType: 'arraybuffer',
                cancelToken: new CancelToken(c => {
                    cancel = c
                })
            }).then(res => {
                resolve(res)
            }).catch(err => {
                console.log(err)
            })
        })
    },
    //get请求
    get(url, param) {
        vm.$loading.show('加载中...'); //显示
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: url,
                params: param,
                cancelToken: new CancelToken(c => {
                    cancel = c
                })
            }).then(res => {
                vm.$loading.hide(); //隐藏
                if (res.data.code === '0') {
                    //成功状态
                    resolve(res.data)
                } else {
                    //Message.error(res.data.msg)
                    reject(res)
                }
            }).catch(err => {
                vm.$loading.hide(); //隐藏
                console.log(err)
            })
        })
    },
    //post请求
    post(url, param) {
        vm.$loading.show('加载中...');
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: url,
                data: param,
                cancelToken: new CancelToken(c => {
                    cancel = c
                })
            }).then(res => {
                vm.$loading.hide(); //隐藏.
                resolve(res.data)

            }).catch(err => {
                vm.$loading.hide(); //隐藏
                console.log(err)
            })
        })
    },
    //下载--返回文件流
    download(url, param) {
        return new Promise((resolve, reject) => {
            axios.post(url, param, {responseType: 'arraybuffer'})
                .then(res => {
                    if (res.data.code === '0') {
                        //成功状态
                        resolve(res.data)
                    } else {
                        //Message.error(res.data.msg)
                        reject(res)
                    }
                }).catch(err => {
                console.log(err)
            })
        })
    }
};