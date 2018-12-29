import React from 'react'
import { Row, Col } from 'antd'

class SetState extends React.Component {
    state = {
        value: 1,
        a: '',
        b: '',
        count: 0,
    }
    componentDidMount() {
        // this.setState({
        //     value: ++this.state.value,
        // })
        // // this.setState({
        // //     value: ++this.state.value,
        // // })
        // const s = setTimeout(() => {
        //     this.setState({
        //         value: ++this.state.value,
        //     })
        // }, 0)
        // const l = setTimeout(() => {
        //     this.setState({
        //         value: ++this.state.value,
        //     })
        // }, 0)
        // console.log(this.state.value)
        // this.setState({
        //     a: 'a1',
        //     b: 'b1',
        // })
        // this.setState({
        //     a: 'a2',
        //     c: 'c1',
        // })
        //  after setState 1 after setState 2  after setState 3  ##0 callback 1  1  callback 2 1 callback 3 1
        this.setState({
            count: this.state.count+1
        },_=>{
            console.log('callback 1')
            console.log(this.state.count)
        });
        console.log('after setState 1',this.state.count)
        this.setState({
            count: this.state.count+1
        },_=>{
            console.log('callback 2')
            console.log(this.state.count)
        });
        console.log('after setState 2',this.state.count)
        this.setState({
            count: this.state.count+1
        },_=>{
            console.log('callback 3')
            console.log(this.state.count)
        });
        console.log('after setState 3')
        console.log('##', this.state.count)
    }
    render() {
        const { value, a, b, count } = this.state
        // console.log(a)
        return (
            <Row style={{ marginTop: '20px' }}>
                <Col span={4}>
                    7. 测试setState
                </Col>
                <Col span={4}>
                    {value}
                    count: {count}
                </Col>
            </Row>
        )
    }
}

export default SetState
