import React, { useState, useEffect } from 'react'
import { cold } from 'react-hot-loader'
import { Row, Col, Button } from 'antd'

const ReactHooks = function (){
    const [count, setCount] = useState(0)
    const set = () => {
        setCount(count + 1)
    }
    // useEffect(() => {
    //     setCount(count + 3)
    // })
    
    return(
        <Row style={{ marginTop: '20px' }}>
            <Col span={4}>
                8. 测试hooks
            </Col>
            <Col span={2}>
                {count}
            </Col>
            <Col span={4}>
                <Button type="primary" onClick={set}>
                    Click me
                </Button>
            </Col>
        </Row>
    )
}
cold(ReactHooks)

export default ReactHooks
