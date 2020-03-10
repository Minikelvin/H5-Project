<!--  -->
<template>
    <div class="box">
        <img src="../../../src/common/img/banner.png" class="banner">
        <div class="tab-page">
            <div class="tab-main">
                <ul class="tab-ul">
                    <li class="tab-li" v-for="(item,index) in tabTitle" @click="toggleTabs(index)"
                        :class="{active:index!=Index}">{{item}}
                    </li>
                </ul>
                <div class="tab-item">
                    <div class="tab-form" v-show="Index===0">
                        <div class="tab-content">
                            <div class="form-control">
                                <input type="tel" @input="changeNum" v-model="tel" placeholder="请输入您的手机号">
                            </div>
                            <div class="form-control">
                                <input type="tel" v-model="code" class="yzCode" placeholder="请输入验证码">
                                <span v-if="isShowGetCode" class="identiCode" @click="getIdentifyCode">获取验证码</span>
                                <span v-else class="identiCode cancel-pointer">{{countdown }}s后可重试</span>
                            </div>
                            <div class="form-control">
                                <a href="javascript:;" @click="()=>{pageIndex=0;phoneSearch(true)}" class="btn-search">查询</a>
                                <!--                                <a href="javascript:;" @click="phoneSearch" class="btn-search">查询</a>-->
                            </div>
                        </div>
                        <div class="list">
                            <div class="title">
                                <span>为您找到以下数据</span>
                            </div>
                            <div class="list-ul">
                                <div class="list-item" v-for="item in listData1">
                                    <p>同乘风险公交车：<em>{{item.lineNo}}公交</em></p>
                                    <p>乘车时间：<em class="time">{{item.inTime}}</em></p>
                                </div>
                            </div>
                            <div v-if="loading1" class="loadingMore" @click="phoneSearch(false)">
                                {{loadingText1}}
                            </div>
                        </div>
                    </div>
                    <div class="tab-form" v-show="Index===1">
                        <div class="tab-content">
                            <div class="form-control">
                                <input type="tel" v-model="tftcard" placeholder="请输入您的天府通卡号">
                            </div>
                            <div class="form-control">
                                <input type="text" v-model.trim="imgCode" class="yzCode" placeholder="请输入图形验证码">
                                <img :src="photoCode" @click="getImgCode" alt="">
                            </div>
                            <div class="form-control">
                                <a href="javascript:;" @click="()=>{pageIndex2=0;search(true)}" class="btn-search">查询</a>
                            </div>
                        </div>
                        <div class="list">
                            <div class="title">
                                <span>为您找到以下数据</span>
                            </div>
                            <div class="list-ul">
                                <div class="list-item" v-for="item in listData">
                                    <p>同乘风险公交车：<em>{{item.lineNo}}公交</em></p>
                                    <p>乘车时间：<em class="time">{{item.inTime}}</em></p>
                                </div>
                            </div>
                            <div v-if="loading2" class="loadingMore" @click="search(false)">
                                {{loadingText1}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'index',
        data() {
            return {

                pageIndex: 0,
                pageIndex2: 0,
                loading1:false,
                loading2:false,
                loadingText1:'点击加载更多',

                pageSize: 10,
                _uuid:'',
                _uuid2:'',
              //  tur: true,

                tabTitle: ['手机号查询', '天府通卡号查询'],
                Index: 0,
                tel: '',
                code: '',
                countdown: 60,
                timer: '',
                isShowGetCode: true,
                photoCode: '',
                tftcard: '',
                imgCode: '',
                listData: [],
                listData1: [],

            };
        },
        components: {},

        computed: {},

        mounted() {
            this.getImgCode();
        },
        methods: {
            changeNum(){
                if(this.tel.length>11){
                    this.tel=this.tel.slice(0,11)
                }
            },
            //tab切换
            toggleTabs(index) {
                this.Index = index;
                if(this.Index===0){
                    this.listData1=[];
                    this.pageIndex=0;
                }else if(this.Index===1){
                    this.listData=[];
                    this.pageIndex2=0;
                }
            },
            //倒计时
            getIdentifyCode() {
                if (this.tel == '') {
                    this.$alert('请输入手机号');
                    return false;
                } else if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.tel))) {
                    this.$alert('请输入正确的手机号码');
                    this.tel = '';
                    return false;
                } else {
                    if(this.Index===0){
                        this.countDown();
                        this.isShowGetCode = false;
                        this.getMessage(this.tel)
                    }

                }

            },
            countDown() {
                const self = this;
                this.timer = setInterval(() => {
                    self.countdown--;
                    if (self.countdown === 0) {
                        clearInterval(self.timer);
                        self.countdown = 60;
                        self.isShowGetCode = true
                    }
                }, 1000)
            },
            //生成uuid
            getUUid() {
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    var r = Math.random() * 16 | 0,
                        v = c == 'x' ? r : (r & 0x3 | 0x8);
                    return v.toString(16);
                });
            },
            //获取图形验证码
            getImgCode() {
                let uuid = this.getUUid();
                this._uuid=uuid;
                // console.log(this._uuid)
                this.$http.getCode(this.$http.api.getImgCode + `?uuid=${uuid}`).then(res => {
                    this.photoCode = res.data;
                    return 'data:image/png;base64,' + btoa(
                        new Uint8Array(res.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
                    );
                }).then(data => {
                    // console.log(data)
                    this.photoCode = data
                })

            },
            //获取短信验证码
            getMessage(tel) {
                let uuid = this.getUUid();
                this._uuid2=uuid;

                this.$http.getCode(this.$http.api.getMessage + `?phone=${tel}`).then(res => {
                  //  console.log(res)
                }).then(data => {
                   // console.log(data);
                })
            },
            phoneSearch(state){
                if(state==true){
                    this.listData1=[];
                }
                let pageNo = this.pageIndex += 1;
                if(this.Index===0){
                    this.tftcard='';
                    this.imgCode='';
                    if (this.tel == '') {
                        this.$alert('手机号不能为空');
                        return false
                    } else if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.tel))) {
                        this.$alert('请输入正确的手机号码');
                        this.tel = '';
                        return false;
                    } else if (this.code == '') {
                        this.$alert('验证码不能为空');
                        return false
                    }
                }

                let captcha = this.imgCode;
                let cardNo = this.tftcard;
                let code = this.code;
                let phone = this.tel;


                let data = {
                    captcha: captcha,
                    cardNo: cardNo,
                    code: code,
                    limit: this.pageSize,
                    page: pageNo,
                    phone: phone,
                    uuid: this._uuid2
                };
                this.$http.post(this.$http.api.search, data).then(res => {
                    if(res.code===0){
                        if(res.data.data==0 && res.data.totalSize==0){
                            this.loadingText1='';
                        }else{
                            this.loadingText1='数据已全部加载';
                        }
                        if (res.data.data.length > 0) {
                            this.loading1=true;
                            this.loadingText1='点击加载更多';
                            this.listData1 = [...this.listData1, ...res.data.data]
                        } else {
                            this.pageIndex=0;
                            if(pageNo===1){
                                this.listData1=[]
                            }
                            if(res.data.data.length==0 && res.data.totalSize==0 && res.data.currentPag==1) {
                                this.loadingText1='数据已全部加载';
                            }
                            this.$alert('暂无数据');

                        }
                    }else{
                        this.pageIndex=0;
                        this.listData1=[];
                        this.$alert(res.msg)
                    }
                }).then(data => {
                })


            },
            search(state) {
                if(state==true){
                    this.listData=[];
                }
                let pageNo = this.pageIndex2 += 1;

                //this.pageIndex=0
                //console.log(pageNo);
                if(this.Index===1){
                    this.tel='';
                    this.code='';
                    //卡号查询
                    if(this.tftcard==''){
                        this.$alert('卡号不能为空')
                        return false
                    }
                    if(this.tftcard.length!=8 && this.tftcard.length!=16 && this.tftcard.length!=20){
                            this.$alert('请输入8，16，20位正确卡号');
                            return false
                    }
                    if(this.imgCode==''){
                        this.$alert('图形验证码不能为空');
                        return false
                    }

                }

                let captcha = this.imgCode;
                let cardNo = this.tftcard;
                let code = this.code;
                let phone = this.tel;

                let data = {
                    captcha: captcha,
                    cardNo: cardNo,
                    code: code,
                    limit: this.pageSize,
                    page: pageNo,
                    phone: phone,
                    uuid: this._uuid
                };


                this.$http.post(this.$http.api.search, data).then(res => {
                    if(res.code===0){
                        // this.pageIndex2=0;
                        if(res.data.data==0 && res.data.totalSize==0){
                            this.loadingText1='';
                        }else{
                            this.loadingText1='数据已全部加载';
                        }
                        if (res.data.data.length > 0) {

                            this.loading2=true;

                            this.loadingText1='点击加载更多';
                            this.listData = [...this.listData, ...res.data.data]
                        } else {
                            if (pageNo === 1) {
                                this.listData = []
                            }
                            if(res.data.data.length==0 && res.data.totalSize==0 && res.data.currentPag==1) {
                                this.loadingText1='数据已全部加载';
                            }
                            this.$alert('暂无数据');
                          //  this.isFalse2=false;
                        }
                    }else{
                        this.listData=[];
                        this.$alert(res.msg)
                    }
                }).then(data => {

                })

            },
        },
    };
</script>

<style scoped lang='less'>
    .box {
        .banner {
            width: 100%;
            background: #1D75FE;
        }

        .tab-page {
            margin: -.5rem 0 0;
            padding: 0 .3rem;

            .tab-main {
                /*background: #fff;*/
                border-radius: .2rem;
                /*// background: #fff;*/

                .tab-ul {
                    font-size: 0;
                    border-radius: .2rem .2rem 0 0;

                    .active {
                        background: #e9f0ff !important;
                    }

                    .tab-li {
                        &:first-child {
                            border-radius: .2rem 0 0 0;
                        }

                        width: 50%;
                        height: .88rem;
                        line-height: .88rem;
                        text-align: center;
                        display: inline-block;
                        font-size: .34rem;
                        font-weight: 500;
                        color: #444444;
                        background: #fff;

                        &:last-child {
                            border-radius: 0 .2rem 0 0;
                        }
                    }
                }

                .tab-item {

                    box-sizing: border-box;
                    .tab-content{
                        padding: .44rem .45rem;
                        background: #fff;
                        border-radius: 0 0 .2rem .2rem;
                    }
                    .form-control {
                        margin-bottom: .3rem;
                        position: relative;

                        &:last-child {
                            margin-bottom: 0;
                        }

                        input {
                            width: 5.6rem;
                            height: .7rem;
                            background: rgba(255, 255, 255, 1);
                            border: 1px solid rgba(221, 221, 221, 1);
                            opacity: 1;
                            border-radius: .1rem;
                            padding: 0 .18rem;
                            font-size: .32rem;
                            color: #BBBBBB;
                            -webkit-appearance: none;
                        }

                        .yzCode {
                            width: 3.1rem;
                            margin-right: .5rem;
                        }

                        button, img, span {
                            width: 2rem;
                            height: .7rem;
                            text-align: center;
                            color: #fff;
                            line-height: .7rem;
                            background: #1D75FE;
                            font-size: .26rem;
                            border-radius: .1rem;
                            position: absolute;
                            right: 0;
                        }

                        .cancel-pointer {
                            background: #7d8ba2;
                        }

                        img {
                            background: rgba(238, 238, 238, 1);
                        }
                    }

                    .btn-search {
                        width: 4.6rem;
                        height: .88rem;
                        line-height: .88rem;
                        color: #fff;
                        text-align: center;
                        border-radius: 1rem;
                        background: #1D75FE;
                        display: block;
                        margin: .5rem auto 0;
                    }
                }
            }
        }

        .list {
            margin-top: .3rem;

            .title {
                width: 5rem;
                margin: .2rem auto;

                span {
                    display: block;
                    position: relative;
                    color: #BBBBBB;
                    font-size: .24rem;
                    text-align: center;

                    &:before, &:after {
                        content: '';
                        position: absolute; /*定位背景横线的位置*/
                        top: 50%;
                        background: #BBBBBB; /*背景横线颜色*/
                        width: 24%; /*单侧横线的长度*/
                        height: 0.02rem;
                    }

                    &:before {
                        left: 2%;
                    }

                    &:after {
                        right: 2%;
                    }
                }
            }

            .list-ul {
                padding: .1rem .3rem;

                .list-item {
                    border-bottom: 1px solid #ddd;
                    padding: .11rem 0;
                }

                p {
                    line-height: .5rem;
                    font-size: .3rem;

                    em {
                        font-style: normal;
                        font-weight: 500;
                        font-size: .34rem;
                    }

                    .time {
                        font-size: .3rem;
                    }
                }
            }
            .loadingMore{
                text-align: center;
                padding:.25rem 0;
                font-size: .28rem;
            }
        }
    }
</style>