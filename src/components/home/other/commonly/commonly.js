/*
 * @Description: 常用方法ui
 * @Author: Yiting Huang
 * @Date: 2018-11-14 11:19:13
 * @LastEditTime: 2018-11-15 12:29:12
 * @LastEditors: Please set LastEditors
 */

import React from 'react'
import { Row, Col, DatePicker } from 'antd'
import moment from 'moment'

import Debounce from './debounce.js'
import Amount from './amount.js'
import Throttle from './throttle.js'

const { RangePicker } = DatePicker

class Commonly extends React.Component {

    disabledDate = current => current && (current < moment().add(-5, 'day') || current >= moment().startOf('day'))
    
    render() {
        return (
            <div>
                <Row gutter={4}>
                    <Col span={4}>
                        1. 时间区间
                    </Col>
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
            </div>
        )
    }
}

export default Commonly