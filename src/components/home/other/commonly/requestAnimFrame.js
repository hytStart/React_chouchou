import React from 'react'
import { Row, Col } from 'antd'

let startTime
let moveId

class RequestAnimFrame extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.anim = null
    }

    componentDidMount() {
        window.requestAnimFrame = (() => (
            window.requestAnimationFrame
            || window.webkitRequestAnimationFrame
            || window.mozRequestAnimationFrame
            || window.oRequestAnimationFrame
            || window.msRequestAnimationFrame
            || (callback => {
                window.setTimeout(callback, 1000 / 60)
            })
        ))()
    }

    componentWillUnmount() {
        window.cancelAnimationFrame(moveId)
    }

    move = time => {
        if (time === undefined) {
            time = Date.now()
        }
        if (startTime === undefined) {
            startTime = time
        }
        this.anim.style.left = `${(((time - startTime) / 10) % 500)}px`
    }

    startMove = _ => {
        (() => {
            this.move()
            moveId = window.requestAnimFrame(this.startMove)
        })()
    }

    render() {
        return (
            <Row gutter={4} style={{ marginTop: '20px' }}>
                <Col span={12}>
                    10. requestAnimFrame 浏览器用于定时循环操作的一个接口
                </Col>
                <div
                    id="anim"
                    ref={node => { this.anim = node }}
                    onClick={this.startMove}
                    style={{
                        position: 'relative',
                        left: '0px',
                        width: '90px',
                        height: '40px',
                        backgroundColor: 'pink',
                    }}
                >
                    点击运行动画
                </div>
            </Row>
        )
    }
}

export default RequestAnimFrame
