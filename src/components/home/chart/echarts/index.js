import React from 'react'
import echarts from 'echarts'
import { Row, Col, Card } from 'antd'
import { option } from './config.js'

class Echarts extends React.Component {
    componentDidMount() {
        const myChart = echarts.init(document.getElementById('main'));
        myChart.setOption(option)
    }
    render() {
        return(
            <Row gutter={2}>
                <Col span={20}>
                    <Card bordered={true} id='main' style={{height: '400px', width: '100%'}}></Card>
                </Col>
            </Row>
        )
    }
}

export default Echarts