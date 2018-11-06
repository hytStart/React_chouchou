import React from 'react'
import ReactDOM from 'react-dom'
import Router from './router.js'
// Provider是react-redux两个核心工具之一，作用：将store传递到每个项目中的组件中
// 第二个工具是connect，稍后会作介绍
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'


import './index.css'
import * as serviceWorker from './serviceWorker'
import store from './store/index.js'

if (module.hot) {
    module.hot.accept(() => {
        ReactDOM.render(
            <AppContainer>
                <Provider store={store}>
                    <Router />
                </Provider>
            </AppContainer>,
            document.getElementById('root')
        )
    })
}

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <Router />
        </Provider>
    </AppContainer>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
// serviceWorker.register();
