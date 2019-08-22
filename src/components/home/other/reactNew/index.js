/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-01-08 13:33:12
 * @LastEditTime: 2019-02-19 15:37:22
 * @LastEditors: Please set LastEditors
 */

import React from 'react'
import ReactLazy from './reactLazy/reactLazy.js'
import SuspenseDemo from './Suspense/Suspense.js'

class ReactNew extends React.Component {
    render() {
        return (
            <div>
                <ReactLazy />
                <SuspenseDemo />
            </div>
        )
    }
}

export default ReactNew