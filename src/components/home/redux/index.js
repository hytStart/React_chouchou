/*
 * @Description: In User Settings Edit
 * @Author: Yiting Huang
 * @Date: 2018-11-06 12:00:31
 * @LastEditTime: 2018-11-13 12:28:14
 * @LastEditors:Yiting Huang
 */

import React from 'react'
import { Button } from 'antd'

// import store from '../../../store/index.js' 

class ReduxComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
        const { setInfoList } = this.props
        // 触发setInfoList action
        setInfoList()
    }
    componentWillUnmount() {
        const { setPageTitle } = this.props
        // 触发setPageTitle action
        setPageTitle('首页')
    }
    changeTitle = _ => {

        const { setPageTitle } = this.props
        setPageTitle('新的标题')

        // 上面在container中定义了方法，或者直接用store（下面的方法）
        // store.dispatch({ type: 'SET_PAGE_TITLE', data: '新的标题' })
    }
    render() {
        const { pageTitle, infoList } = this.props
        return(
            <div>
                <h1>{pageTitle}</h1>
                <Button type='primary' onClick={this.changeTitle}>改变标题</Button>
                {
                    infoList.length > 0 ? (
                        <ul>
                            {
                                infoList.map((item, index) => (
                                    <li key={item.tid}>{item.tname}</li>
                                ))
                            }
                        </ul>
                    ):null
                }
            </div>
        )
    }
}

export default ReduxComponent
