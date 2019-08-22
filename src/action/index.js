import HttpFetch from '../utils/fetch.js'
// import fetch from 'isomorphic-fetch'

// action也是函数
export function setPageTitle (data) {
    console.log('####', data)
    return (dispatch, getState) => {
        dispatch({ type: 'SET_PAGE_TITLE', data: data })
    }
}

export function setInfoList (data) {
    return (dispatch, getState) => {
        // 使用fetch实现异步请求
        // fetch('http://localhost/Desktop/thinkphp-3.2/api/slogin/test', {
        //     method: 'GET',
        //     headers: {
        //         'Accept': 'application/json, text/javascript, */*; q=0.01',
        //         'Content-Type': 'application/json',
        //         // 'X-Requested-With': 'XMLHttpRequest', 加了这个就是傻逼
        //         // 'Access-Control-Allow-Origin': '*',
        //         // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        //     },
        //     // mode: 'no-cors', // no-cors, cors, *same-origin
        //     credentials: 'same-origin',
        // }).then(res => {
        //     console.log(res)
        //     return res.json()
        // }).then(data => {
        //     console.log(data)
        //     // let { code, data } = data
        //     // if (code === 0) {
        //     //     dispatch({ type: 'SET_INFO_LIST', data: data })
        //     // }
        // })
        HttpFetch.fetchJson('GET', 'http://localhost:3000/api/slogin/test').then(data => {
            dispatch({ type: 'SET_INFO_LIST', data: data })
        }).catch(e => {
            dispatch({ type: 'SET_INFO_LIST_FAILED', e: e })
        })
    }
}