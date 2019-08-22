import React, { useState, useEffect, useRef } from 'react'
import { cold } from 'react-hot-loader'
import { Row, Col, Button } from 'antd'

let flag = true

const ReactHooks = () => {
    const [count, setCount] = useState(0)
    const ref = React.useRef(count)
    const increment = () => {
        setCount(count + 1)
        // setTimeout(() => {
        //     alert(ref.current)
        // }, 1000)
    }

    useEffect(() => {
        // document.title = `Count: ${count}`
        console.log(ref.current) // 前者
        ref.current = count
        console.log('@@', ref.current) // 后者
        setTimeout(() => {
            // console.log(ref.current)
        }, 1000)
    })
    // // 用一点小技巧就可以解决。useEffect 还支持第二个可选参数，只有同一 useEffect 的两次调用第二个参数不同时
    // // 第一个函数参数才会被调用，所以，如果想模拟 componentDidMount，只需要这样写：

    // useEffect(() => {
    //     // 这里只有mount时才被调用，相当于componentDidMount
    //     document.title = `Count: ${count}`
    // }, [123])

    // useEffect(() => {
    //     // 只有mount时，调用这里
    //     return () => {
    //         // 只有unmount时，调用这里
    //     }
    // }, [])

    // useEffect模拟componDidUpdate
    const mounted = useRef() // 返回的东西是一样的
    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true
        } else {
            // do something
            console.log(11111111111)
        }
        if (flag === true) {
            flag = false
        } else {
            console.log(222222)
        }
    })
    return (
        <Row style={{ marginTop: '20px' }}>
            <Col span={4}>
                8. 测试hooksdsafds
            </Col>
            <Col span={2}>
                {count}
            </Col>
            <Col span={4}>
                <Button type="primary" onClick={increment}>
                    Click mescd
                </Button>
            </Col>
        </Row>
    )
}
// cold(ReactHooks)

export default ReactHooks
