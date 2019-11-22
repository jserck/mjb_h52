import axios from 'axios'
import Vue from 'vue'
import qs from 'qs'
import {
    getDAesString,
    desc
} from './des'
import BaseURL from './baseurl'
import store from '../../store/state'
export default function({
    urls = '',
    data = {},
    params = {},
    headers = {},
    methods = 'get',
    platform = 3,
    isJson = false,
    responseType = '',
    des = false,
    token = store.token || window.sessionStorage.getItem('token')
}) {
    const servise = axios.create({
        baseURL: isJson ? '' : BaseURL,
        timeout: 8000,
        retry: 4,
        retryDelay: 1000
    });
    let keys = "yhgt!d%sd*aw%dSDSFSsa#mng~dsq";
    let s = {
        token: token,
        body: data,
        platform
    };
    req_interceptors();
    res_interceptors();

    function res_interceptors() {
        servise.interceptors.response.use(res => {
            try {
                if (typeof res.data == 'string' && des) {
                    return JSON.parse(getDAesString(res, keys));
                } else {
                    return res;
                }
            } catch (error) {
                console.log(error);
            }
        }, err => {
            err_retry(err);
        });
    }

    function req_interceptors() {
        servise.interceptors.request.use(config => {
            return new Promise(resolve => {
                // 模拟等待refresh_token
                if (!token && navigator.userAgent.match(/android/i)) {
                    let num = 0;
                    let timer = setInterval(() => {
                        let sessToken = window.sessionStorage.getItem('token');
                        if (!sessToken && num < 2) {
                            num += 1;
                            return;
                        }
                        s.token = sessToken;
                        axios_data(config);
                        resolve(config);
                        clearInterval(timer);
                    }, 100);
                } else {
                    axios_data(config);
                    resolve(config);
                }
            });
            //   return config;
        }, err => {
            return Promise.reject(error);
        });
    }

    function axios_data(servise) {
        servise.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
        switch (methods) {
            case 'get':
                servise.params = {
                    d: desc(JSON.stringify(s), keys)
                } || {}
                break;
            case 'post':
                if (des) {
                    servise.data = qs.stringify({
                        d: desc(JSON.stringify(s), keys)
                    }) || {}
                } else {
                    servise.data = qs.stringify({
                        d: JSON.stringify(s)
                    }) || {}
                }
                break;
            default:
                break;
        }
    }

    function err_retry(err) {
        let config = err.config;
        if (!config || !config.retry) {
            err_toast(err)
            return Promise.reject(err)
        }
        config.__retryCount = config.__retryCount || 0;
        if (config.__retryCount == config.retry) {
            err_toast(err)
        }
        if (config.__retryCount >= config.retry) {
            return Promise.reject(err)
        }
        config.__retryCount += 1;
        let retryOff = new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, config.retryDelay || 1)
        })
        return retryOff.then(() => {
            return axios(config);
        })
    }

    function err_toast(err) {
        if (err && err.response) {
            switch (err.response.status) {
                case 400:
                    err.message = '请求错误'
                    break;

                case 401:
                    err.message = '未授权，请登录'
                    break;

                case 403:
                    err.message = '拒绝访问'
                    break;

                case 404:
                    err.message = `请求地址出错: ${err.response.config.url}`
                    break;

                case 408:
                    err.message = '请求超时'
                    break;

                case 500:
                    err.message = '服务器内部错误'
                    break;

                case 501:
                    err.message = '服务未实现'
                    break;

                case 502:
                    err.message = '网关错误'
                    break;

                case 503:
                    err.message = '服务不可用'
                    break;

                case 504:
                    err.message = '网关超时'
                    break;

                case 505:
                    err.message = 'HTTP版本不受支持'
                    break;
                default:
                    err.message = '网络错误/请求超时'
                    break;
            }
            new Vue().$toast(err.message);
        } else {
            new Vue().$toast('网络错误/请求超时')
        }
    }
    //移除拦截器
    //   axios.interceptors.request.eject(resq);
    return servise({
        url: urls,
        responseType: responseType,
        headers: headers,
        method: methods,
        //    withCredentials: true
    })
}