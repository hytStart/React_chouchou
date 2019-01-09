import React from 'react'
import { Row, Col } from 'antd'


class Flip extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
    }

    render() {
        return (
            <Row gutter={4} style={{ marginTop: '20px' }}>
                <Col span={12}>
                    111
                </Col>
            </Row>
        )
    }
}

export default Flip
