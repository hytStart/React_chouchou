import React from 'react'
import { Row, Col, TimePicker, Button } from 'antd'
import moment from 'moment'
import style from './style.scss'

class KeyNoIndex extends React.Component {
    state = {
        data: ['6.20']
    }
    addTimepicker = index => _ => {
        const { data } = this.state
        const arr = data
        arr.splice(index+1, 0, "")
        this.setState({ data: [...arr] })
    }
    deleteTimepicker = index => _ => {
        const { data } = this.state
        let arr = [...data]
        arr.splice(index, 1)
        this.setState({data:[...arr]})
    }
    renderDom = _ => {
        const { data } = this.state
        return data.map((item, index) => (
            <div className={style.testKey}>
                <TimePicker defaultValue={item ? moment(item, 'HH:mm') : null} format="HH:mm"/>
                <Button type="primary" onClick={this.addTimepicker(index)}>增加</Button>
                <Button onClick={this.deleteTimepicker(index)}>删除</Button>
            </div>
        ))
    }
    render() {
        return (
            <Row style={{ marginTop: '20px' }}>
                <Col span={4}>
                    6. 不要使用index作为key
                </Col>
                <Col span={4}>
                    {this.renderDom()}
                </Col>
            </Row>
        )
    }
}

export default KeyNoIndex
