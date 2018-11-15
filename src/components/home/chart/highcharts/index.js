import React from 'react'
import highcharts from 'highcharts'
import { Row, Col, Card } from 'antd'
import { option } from './config.js'

class Highcharts extends React.Component {
    componentDidMount() {
        highcharts.chart('main', option);
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

export default Highcharts