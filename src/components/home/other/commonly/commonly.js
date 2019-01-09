/*
 * @Description: 常用方法ui
 * @Author: Yiting Huang
 * @Date: 2018-11-14 11:19:13
 * @LastEditTime: 2019-01-09 17:04:08
 * @LastEditors: Please set LastEditors
 */

import React from 'react'
import { Row, Col, DatePicker } from 'antd'
import moment from 'moment'

import Debounce from './debounce.js'
import Amount from './amount.js'
import Throttle from './throttle.js'
import Trie from './trie.js'
import KeyNoIndex from './keyNoIndex.js'
import SetState from './setState.js'
import ReactHooks from './reactHooks.js'
import Lazyload from './lazyload'
import RequestAnimFrame from './requestAnimFrame.js'

const { RangePicker } = DatePicker

class Commonly extends React.Component {
    disabledDate = current => current && (current < moment().add(-5, 'day') || current >= moment().startOf('day'))

    render() {
        return (
            <div>
                <Row gutter={4}>
                    <Col span={4}>1. 时间区间</Col>
                    <Col span={8}>
                        <RangePicker
                            showTime={{ format: 'HH:mm' }}
                            format="YYYY-MM-DD HH:mm"
                            placeholder={['Start Time', 'End Time']}
                            // onChange={onChange}
                            // onOk={onOk}
                            disabledDate={this.disabledDate}
                        />
                    </Col>
                </Row>
                <Debounce />
                <Amount />
                <Throttle />
                <Trie />
                <KeyNoIndex />
                <SetState />
                <ReactHooks />
                <Lazyload />
                <RequestAnimFrame />
            </div>
        )
    }
}

export default Commonly
