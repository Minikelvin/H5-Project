import Vue from 'vue'
var v = new Vue();

export default {
    /**
     * 获取url参数
     */
    getUrlStr(paraName) {
        var url = document.location.toString();
        var arrObj = url.split("?");

        if (arrObj.length > 1) {
            var arrPara = arrObj[1].split("&");
            var arr;

            for (var i = 0; i < arrPara.length; i++) {
                arr = arrPara[i].split("=");

                if (arr != null && arr[0] == paraName) {
                    return arr[1];
                }
            }
            return "";
        } else {
            return "";
        }
    },
    /**
     * 时间日期格式化
     * @param dateObj  new Date()   时间对象
     *        format  yyyyMMddhhmmss  时间格式
     * @returns {*}
     */
    dateFormat: function (dateObj, format) {
        const date = {
            'M+': dateObj.getMonth() + 1,
            'd+': dateObj.getDate(),
            'h+': dateObj.getHours(),
            'm+': dateObj.getMinutes(),
            's+': dateObj.getSeconds(),
            'q+': Math.floor((dateObj.getMonth() + 3) / 3),
            'S+': dateObj.getMilliseconds()
        }
        if (/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (dateObj.getFullYear() + '').substr(4 - RegExp.$1.length))
        }
        for (const k in date) {
            if (new RegExp('(' + k + ')').test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length === 1
                    ? date[k] : ('00' + date[k]).substr(('' + date[k]).length))
            }
        }
        return format
    },


    /**
     * 创建随机字符串
     * @param num
     * @returns {string}
     */
    randomString: function (num) {
        const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        let res = ''
        for (let i = 0; i < num; i++) {
            var id = Math.ceil(Math.random() * 35)
            res += chars[id]
        }
        return res
    },


    /**
     * 文件上传oss
     * @param option //文件对象
     * @returns {string}
     */
    async ossUploadFile(option) {
        let signature = '';
        let OSSAccessKeyId = '';
        let policy = '';
        let url = '';
        let dir = '';
        let that = this;
        let photo = option;  // 获取图片对象
        let photoName = photo.name; // 原图片的名称
        let key = that.randomString(20);  // 存储到oss的图片名称 自己定，必须确保唯一性，不然会覆盖oss中原有的文件
        await v.$http.get(v.$http.api.oss, '').then(res => {
            if (res.code == '1') {
                signature = res.data.signature;
                OSSAccessKeyId = res.data.accessid;
                policy = res.data.policy;
                url = `http://${res.data.bucket}.oss-cn-chengdu.aliyuncs.com`;
                dir = res.data.dir;
            }
        });
        //biu一下，提交给oss
        let param = new FormData();
        param.append('name', `${photoName}`);
        param.append('key', `${dir}${key}`);
        param.append('policy', `${policy}`);
        param.append('OSSAccessKeyId', `${OSSAccessKeyId}`);
        param.append('success_action_status', 200);  // 不要问为什么，照做
        param.append('signature', `${signature}`);
        param.append('file', photo, photoName); // 这个**切记**一定要放到最后去 append ，不然阿里云会一直报 key 的错误
        return new Promise((resolve,reject)=>{
            v.$http.post(url, param)
                .then(res => {
                   resolve(`${url}/${dir}${key}`)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    },
	
	
	
	  /**
     * json中进行数据排序
     * @description    根据某个字段实现对json数组的排序
     * @param   array  要排序的json数组对象
     * @param   field  排序字段（此参数必须为字符串）
     * @param   reverse 是否倒序（默认为false）
     * @return  array  返回排序后的json数组
     */
    jsonSort: function (array, field, reverse) {
        //数组长度小于2 或 没有指定排序字段 或 不是json格式数据
        if (array.length < 2 || !field || typeof array[0] !== "object") return array;
        //数字类型排序
        if (typeof array[0][field] === "number") {
            array.sort(function (x, y) {
                return x[field] - y[field]
            });
        }
        //字符串类型排序
        if (typeof array[0][field] === "string") {
            array.sort(function (x, y) {
                return x[field].localeCompare(y[field])
            });
        }
        //倒序
        if (reverse) {
            array.reverse();
        }
        return array;
    },
}

