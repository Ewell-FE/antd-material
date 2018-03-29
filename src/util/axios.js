/*Created by lilei on 2016/11/3.
 */
import axios from 'axios'

var cookieStore = require('store')
var Ewell = {
    sources: []
}
/**
 * 功能：axios 基础配置
 * 返回：配置好的增强版本 axios
 * */
var baseUrl = "/material";
//axios.defaults.headers.post['Content-Type'] = 'application/json';
var instance = axios.create({
    baseURL: baseUrl,
    timeout: 60000,
    headers: {
        'Content-Type': 'application/json'
    },
    transformResponse: [function (data) {
        if (JSON.parse(data).httpCode === 401) {
            cookieStore.clearAll();
            window.location.href = "/authority/login";
        }
        return JSON.parse(data);
    }],
    validateStatus: function (status) {
        if (status >= 200 && status <= 300) {
            return status
        }
        if(status === 500){
            window.location.href = "/material/pageError";
        }
    }
})

export const post = function (url, opts = {}, paramsKey) {
    var CancelToken = axios.CancelToken;
    var token = new CancelToken(function executor(c) {
        Ewell.sources.push(c)
    })
    return instance.post(url, {
        ...opts
    }, {
        cancelToken: token,
    })
}
export const get = function (url, opts, paramsKey) {
    var CancelToken = axios.CancelToken;
    var token = new CancelToken(function executor(c) {
        Ewell.sources.push(c)
    })
    return instance.get(url, {
        params: {
            ...opts,
        },
        cancelToken: token,
    })
}
export const all = axios.all
export const spread = axios.spread