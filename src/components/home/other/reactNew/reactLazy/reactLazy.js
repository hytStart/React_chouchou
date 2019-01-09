import React, { Suspense } from 'react'
import { Row, Col } from 'antd'

const ReactLazyChild = React.lazy(() => import('./child.js'))

const Loading = (
    <h3>loading...</h3>
)

class ReactLazy extends React.Component {
    componentDidMount() {}

    render() {
        return (
            <Row gutter={4}>
                <Col span={4}>1. React.lazy</Col>
                <Col span={8}>
                    <Suspense fallback={Loading}>
                        <ReactLazyChild />
                    </Suspense>
                </Col>
            </Row>
        )
    }
}

export default ReactLazy
