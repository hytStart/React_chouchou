/*
 * @Description: fetch 封装
 * @Author: Yiting  Huang
 * @Date: 2018-11-06 15:14:24
 * @LastEditTime: 2019-01-22 11:06:29
 * @LastEditors: Please set LastEditors
 * 1. 超时 2. 状态码 3. cookie 4. 跨域
 * 待完善 jsonp polyfill
 */

import fetch from 'isomorphic-fetch'

// 检测 window 是否含有 Promise 对象，fetch底层由 Promise 实现
// if (typeof window != 'undefined' && !window.Promise) {
//     window.Promise = Promise;
// }

const OPTIONS = {
    headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Content-Type': 'application/json',
        // 'X-Requested-With': 'XMLHttpRequest'  //这些个东西不能随便加
    },
    credentials: 'same-origin',
    cache: 'no-cache',
    // mode: 'no-cors', // no-cors, cors, *same-origin 
    redirect: 'follow', // manual, *follow, error 这些个东西不能随便加
    referrer: 'no-referrer', // *client, no-referrer 
}

class HttpFetch {
    /**
     *fetch请求对某些错误http状态不会reject
     *
     * @static
     * @memberof HttpFetch
     */
    static checkStatus = response => {
        if (response.status >= 200 && response.status < 300) {
            return response
        } else if (response.status === 401) {
            window.location.href = 'loginin'
        }
        const error = new Error(response.statusText)
        error.response = response
        throw error
    }

    /**
     * fetch 网络请求超时处理
     * @param original_promise 原始的fetch
     * @param timeout 超时时间 30s
     * @returns {Promise.<*>}
     */
    static timeoutFetch = (original_fetch, timeout = 30000) => {
        const timeout_promise = new Promise((resolve, reject) => {
            // 请求超时处理
            setTimeout(() => {
                reject('timeout promise')
            }, timeout)
        })
        // Promise.race(iterable)方法返回一个promise
        // 这个promise在iterable中的任意一个promise被解决或拒绝后，立刻以相同的解决值被解决或以相同的拒绝原因被拒绝。
        let abortable_promise = Promise.race([
            original_fetch,
            timeout_promise
        ])
        return abortable_promise
    }
/**
 *对外的fetch请求
 *
 * @static
 * @param {*} method
 * @param {*} url
 * @param {*} [params={}]
 * @returns
 * @memberof HttpFetch
 */
static fetchJson(method, url, params = {}) {
        params = (method !== 'GET' && params) ? JSON.stringify(params) : params
        let options = {}
        if (method === 'GET') {
            options = {
                ...OPTIONS,
                method,
            }
        }else {
            options = {
                ...OPTIONS,
                method,
                body: params,
            }
        }
        return HttpFetch.timeoutFetch(
            new Promise((resolve, reject) => {
                fetch(url, options)
                    .then(HttpFetch.checkStatus)
                    .then(response => response.json())
                    .then(datas => {
                        const {
                            flag,
                            message,
                            data,
                        } = datas
                        if (flag === 1) {
                            resolve(data)
                        } else if (flag === 0) {
                            reject(message)
                        }
                    })
                    .catch(e => {
                        reject('error lalala')
                    })
            })
        )
    }
}

export default HttpFetch