import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import App from './components/app/App.js'
import Home from './components/home/home.js'
import Notfound from './components/404/index.js'

class Router extends React.Component {
    /**
     * ①getUserConfirmation
     */
    getConfirmation  = (message, callback) => {
        // const allowTransition = window.confirm(message)
        const allowTransition = this.proxyConfirm(message)
        callback(allowTransition)
    }
    // 导航到此页面前执行的函数
    proxyConfirm = message =>{
        console.log(message)
    }
    // cb
    testGfirmationcb = _ => {
        console.log("2. test getUserConfirmation")
    }
    render() {
        /**
         * ② forceRefresh 当浏览器不支持 HTML5 的 history API 时强制刷新页面。
         */
        // const supportsHistory = 'pushState' in window.history
        return(
            <BrowserRouter
                getUserConfirmation={
                    this.getConfirmation('导航到此页面前执行的函数，默认使用 window.confirm', this.testGfirmationcb)
                }
                // forceRefresh={supportsHistory}
            >
                <Switch>
                    <Route exact path="/" render={() => <Redirect to='/app' push />} />        

                    <Route exact path="/app" component={App} />
                    <Route path="/home" component={Home} />

                    {/* 别的都是exact,就可以404了 */}
                    <Route path="/404" component={Notfound} />
                    <Route path="*" component={Notfound} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router
