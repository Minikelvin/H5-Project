(function(t){function e(e){for(var n,o,r=e[0],c=e[1],l=e[2],u=0,h=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&h.push(i[o][0]),i[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(h.length)h.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],o=a("2877"),r={},c=Object(o["a"])(r,i,s,!1,null,null,null),l=c.exports,d=a("8c4f"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("img",{staticClass:"banner",attrs:{src:a("e6bc")}}),n("div",{staticClass:"tab-page"},[n("div",{staticClass:"tab-main"},[n("ul",{staticClass:"tab-ul"},t._l(t.tabTitle,(function(e,a){return n("li",{staticClass:"tab-li",class:{active:a!=t.Index},on:{click:function(e){return t.toggleTabs(a)}}},[t._v(t._s(e)+"\n                ")])})),0),n("div",{staticClass:"tab-item"},[n("div",{directives:[{name:"show",rawName:"v-show",value:0===t.Index,expression:"Index===0"}],staticClass:"tab-form"},[n("div",{staticClass:"tab-content"},[n("div",{staticClass:"form-control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.tel,expression:"tel"}],attrs:{type:"tel",placeholder:"请输入您的手机号"},domProps:{value:t.tel},on:{input:[function(e){e.target.composing||(t.tel=e.target.value)},t.changeNum]}})]),n("div",{staticClass:"form-control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"yzCode",attrs:{type:"tel",placeholder:"请输入验证码"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}}),t.isShowGetCode?n("span",{staticClass:"identiCode",on:{click:t.getIdentifyCode}},[t._v("获取验证码")]):n("span",{staticClass:"identiCode cancel-pointer"},[t._v(t._s(t.countdown)+"s后可重试")])]),n("div",{staticClass:"form-control"},[n("a",{staticClass:"btn-search",attrs:{href:"javascript:;"},on:{click:function(){t.pageIndex=0,t.phoneSearch(!0)}}},[t._v("查询")])])]),n("div",{staticClass:"list"},[t._m(0),n("div",{staticClass:"list-ul"},t._l(t.listData1,(function(e){return n("div",{staticClass:"list-item"},[n("p",[t._v("同乘风险公交车："),n("em",[t._v(t._s(e.lineNo)+"公交")])]),n("p",[t._v("乘车时间："),n("em",{staticClass:"time"},[t._v(t._s(e.inTime))])])])})),0),t.loading1?n("div",{staticClass:"loadingMore",on:{click:function(e){return t.phoneSearch(!1)}}},[t._v("\n                            "+t._s(t.loadingText1)+"\n                        ")]):t._e()])]),n("div",{directives:[{name:"show",rawName:"v-show",value:1===t.Index,expression:"Index===1"}],staticClass:"tab-form"},[n("div",{staticClass:"tab-content"},[n("div",{staticClass:"form-control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.tftcard,expression:"tftcard"}],attrs:{type:"tel",placeholder:"请输入您的天府通卡号"},domProps:{value:t.tftcard},on:{input:function(e){e.target.composing||(t.tftcard=e.target.value)}}})]),n("div",{staticClass:"form-control"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.imgCode,expression:"imgCode",modifiers:{trim:!0}}],staticClass:"yzCode",attrs:{type:"text",placeholder:"请输入图形验证码"},domProps:{value:t.imgCode},on:{input:function(e){e.target.composing||(t.imgCode=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),n("img",{attrs:{src:t.photoCode,alt:""},on:{click:t.getImgCode}})]),n("div",{staticClass:"form-control"},[n("a",{staticClass:"btn-search",attrs:{href:"javascript:;"},on:{click:function(){t.pageIndex2=0,t.search(!0)}}},[t._v("查询")])])]),n("div",{staticClass:"list"},[t._m(1),n("div",{staticClass:"list-ul"},t._l(t.listData,(function(e){return n("div",{staticClass:"list-item"},[n("p",[t._v("同乘风险公交车："),n("em",[t._v(t._s(e.lineNo)+"公交")])]),n("p",[t._v("乘车时间："),n("em",{staticClass:"time"},[t._v(t._s(e.inTime))])])])})),0),t.loading2?n("div",{staticClass:"loadingMore",on:{click:function(e){return t.search(!1)}}},[t._v("\n                            "+t._s(t.loadingText1)+"\n                        ")]):t._e()])])])])])])},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",[t._v("为您找到以下数据")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",[t._v("为您找到以下数据")])])}],p=a("75fc"),f=(a("386d"),a("34ef"),a("0cd8"),a("6b54"),a("87b3"),a("a481"),{name:"index",data:function(){return{pageIndex:0,pageIndex2:0,loading1:!1,loading2:!1,loadingText1:"点击加载更多",pageSize:10,_uuid:"",_uuid2:"",tabTitle:["手机号查询","天府通卡号查询"],Index:0,tel:"",code:"",countdown:60,timer:"",isShowGetCode:!0,photoCode:"",tftcard:"",imgCode:"",listData:[],listData1:[]}},components:{},computed:{},mounted:function(){this.getImgCode()},methods:{changeNum:function(){this.tel.length>11&&(this.tel=this.tel.slice(0,11))},toggleTabs:function(t){this.Index=t,0===this.Index?(this.listData1=[],this.pageIndex=0):1===this.Index&&(this.listData=[],this.pageIndex2=0)},getIdentifyCode:function(){return""==this.tel?(this.$alert("请输入手机号"),!1):/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.tel)?void(0===this.Index&&(this.countDown(),this.isShowGetCode=!1,this.getMessage(this.tel))):(this.$alert("请输入正确的手机号码"),this.tel="",!1)},countDown:function(){var t=this;this.timer=setInterval((function(){t.countdown--,0===t.countdown&&(clearInterval(t.timer),t.countdown=60,t.isShowGetCode=!0)}),1e3)},getUUid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0,a="x"==t?e:3&e|8;return a.toString(16)}))},getImgCode:function(){var t=this,e=this.getUUid();this._uuid=e,this.$http.getCode(this.$http.api.getImgCode+"?uuid=".concat(e)).then((function(e){return t.photoCode=e.data,"data:image/png;base64,"+btoa(new Uint8Array(e.data).reduce((function(t,e){return t+String.fromCharCode(e)}),""))})).then((function(e){t.photoCode=e}))},getMessage:function(t){var e=this.getUUid();this._uuid2=e,this.$http.getCode(this.$http.api.getMessage+"?phone=".concat(t)).then((function(t){})).then((function(t){}))},phoneSearch:function(t){var e=this;1==t&&(this.listData1=[]);var a=this.pageIndex+=1;if(0===this.Index){if(this.tftcard="",this.imgCode="",""==this.tel)return this.$alert("手机号不能为空"),!1;if(!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.tel))return this.$alert("请输入正确的手机号码"),this.tel="",!1;if(""==this.code)return this.$alert("验证码不能为空"),!1}var n=this.imgCode,i=this.tftcard,s=this.code,o=this.tel,r={captcha:n,cardNo:i,code:s,limit:this.pageSize,page:a,phone:o,uuid:this._uuid2};this.$http.post(this.$http.api.search,r).then((function(t){0===t.code?(0==t.data.data&&0==t.data.totalSize?e.loadingText1="":e.loadingText1="数据已全部加载",t.data.data.length>0?(e.loading1=!0,e.loadingText1="点击加载更多",e.listData1=[].concat(Object(p["a"])(e.listData1),Object(p["a"])(t.data.data))):(e.pageIndex=0,1===a&&(e.listData1=[]),0==t.data.data.length&&0==t.data.totalSize&&1==t.data.currentPag&&(e.loadingText1="数据已全部加载"),e.$alert("暂无数据"))):(e.pageIndex=0,e.listData1=[],e.$alert(t.msg))})).then((function(t){}))},search:function(t){var e=this;1==t&&(this.listData=[]);var a=this.pageIndex2+=1;if(1===this.Index){if(this.tel="",this.code="",""==this.tftcard)return this.$alert("卡号不能为空"),!1;if(8!=this.tftcard.length&&16!=this.tftcard.length&&20!=this.tftcard.length)return this.$alert("请输入8，16，20位正确卡号"),!1;if(""==this.imgCode)return this.$alert("图形验证码不能为空"),!1}var n=this.imgCode,i=this.tftcard,s=this.code,o=this.tel,r={captcha:n,cardNo:i,code:s,limit:this.pageSize,page:a,phone:o,uuid:this._uuid};this.$http.post(this.$http.api.search,r).then((function(t){0===t.code?(0==t.data.data&&0==t.data.totalSize?e.loadingText1="":e.loadingText1="数据已全部加载",t.data.data.length>0?(e.loading2=!0,e.loadingText1="点击加载更多",e.listData=[].concat(Object(p["a"])(e.listData),Object(p["a"])(t.data.data))):(1===a&&(e.listData=[]),0==t.data.data.length&&0==t.data.totalSize&&1==t.data.currentPag&&(e.loadingText1="数据已全部加载"),e.$alert("暂无数据"))):(e.listData=[],e.$alert(t.msg))})).then((function(t){}))}}}),g=f,m=(a("8a79"),Object(o["a"])(g,u,h,!1,null,"6262093d",null)),v=m.exports;n["default"].use(d["a"]);var x=new d["a"]({mode:"hash",base:"",routes:[{path:"/",name:"index",component:v,meta:{title:"首页"}}]}),C=a("2f62");n["default"].use(C["a"]);var b=new C["a"].Store({state:{},mutations:{},actions:{},plugins:[]}),_=(a("a287"),a("bc3a")),w=a.n(_),y=new n["default"];w.a.defaults.baseURL="https://trip-risk.cdtft.cn/";var $={getImgCode:"/epidemic/captcha.jpg",getMessage:"/epidemic/message",search:"/epidemic/query"};w.a.defaults.headers={"X-Requested-With":"XMLHttpRequest","content-type":"application/json"},w.a.defaults.timeout=1e4;var I,T={},S=w.a.CancelToken;w.a.interceptors.request.use((function(t){if(sessionStorage.getItem("upsToken")&&(t.headers.upsToken=sessionStorage.getItem("upsToken")),T[t.url]?(T[t.url]("操作取消"),T[t.url]=I):T[t.url]=I,"post"===t.method)for(var e in t.data)t.data[e]=""===t.data[e]?null:t.data[e];else if("get"===t.method)for(var a in t.params)t.params[a]=""===t.params[a]?null:t.params[a];return t}),(function(t){return Promise.reject(t)})),w.a.interceptors.response.use((function(t){var e=t.data.data;return e&&e.hasOwnProperty("amsToken")&&(sessionStorage.setItem("token",e.amsToken),w.a.defaults.headers.token=sessionStorage.getItem("token")),t}),(function(t){if(t&&t.response)switch(t.response.status){case 400:t.message=t.response.data.msg;break;default:t.message="连接错误".concat(t.response.status)}else"操作取消"!=t.message&&(t.message="连接到服务器失败");return t.message,Promise.resolve(t.response)}));var k={api:$,getCode:function(t,e){return new Promise((function(a,n){w()({method:"get",url:t,params:e,responseType:"arraybuffer",cancelToken:new S((function(t){I=t}))}).then((function(t){a(t)})).catch((function(t){console.log(t)}))}))},get:function(t,e){return y.$loading.show("加载中..."),new Promise((function(a,n){w()({method:"get",url:t,params:e,cancelToken:new S((function(t){I=t}))}).then((function(t){y.$loading.hide(),"0"===t.data.code?a(t.data):n(t)})).catch((function(t){y.$loading.hide(),console.log(t)}))}))},post:function(t,e){return y.$loading.show("加载中..."),new Promise((function(a,n){w()({method:"post",url:t,data:e,cancelToken:new S((function(t){I=t}))}).then((function(t){y.$loading.hide(),a(t.data)})).catch((function(t){y.$loading.hide(),console.log(t)}))}))},download:function(t,e){return new Promise((function(a,n){w.a.post(t,e,{responseType:"arraybuffer"}).then((function(t){"0"===t.data.code?a(t.data):n(t)})).catch((function(t){console.log(t)}))}))}},j=a("f6c1");a("8905");n["default"].use(j["Alert"]),n["default"].use(j["Confirm"]),n["default"].use(j["Toast"]),n["default"].use(j["Loading"]),n["default"].config.productionTip=!1,n["default"].prototype.$http=k,n["default"].prototype.$axios=w.a,new n["default"]({router:x,store:b,render:function(t){return t(l)}}).$mount("#app");e["default"]=n["default"]},"64a0":function(t,e,a){},"8a79":function(t,e,a){"use strict";var n=a("64a0"),i=a.n(n);i.a},a287:function(t,e,a){},e6bc:function(t,e,a){t.exports=a.p+"assets/img/banner.png"}});