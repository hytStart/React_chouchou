/*
 * @Description: 防抖
 * @Author: Yiting Huang
 * @Date: 2018-11-14 11:27:32
 * @LastEditTime: 2019-04-12 20:12:05
 * @LastEditors: Please set LastEditors
 *   https://billqiu.github.io/2017/10/15/how-to-debounce-in-react/
 *   https://juejin.im/post/5be693d16fb9a04a053f2f1c
 */
import React from 'react'
import { Row, Col, Input } from 'antd'

class Debounce extends React.Component {

    constructor() {
        super()
        this.state = {
            value: '',
        }
        this.fnFD = this.deb(this.fetchAjax, 2000, true);
    }

    handleChange = e => {
        // e.persist()
        this.fnFD(e.target.value)
    }
    fetchAjax = parma => {
        this.setState({
            value: parma,
        })
        console.log(parma)
    }
    deb = (fn, delay, immediate) => {
        let timer = null
        return function() {	
            const context = this
            timer && clearTimeout(timer)
            if (immediate) {
                !timer && fn.apply(context, arguments)
            }
            timer = setTimeout(() => {
                fn.apply(context, arguments)
            }, delay)
        }
    }
    debounce = (fn, delay, immediate) => {
        let timer = null;
        return function() {
            const context = this;
            const args = arguments;
            return new Promise((resolve, reject) => {
                timer && clearTimeout(timer);
                if (immediate) {
                    const doNow = !timer;
                    timer = setTimeout(() => {
                        timer = null;
                    }, delay);
                    
                    doNow && resolve(fn.apply(context, args));
                }
                else {
                    timer = setTimeout(() => {
                        resolve(fn.apply(context, args));
                    }, delay);
                }
            });
        };
    }
    
    render() {
        const { value } = this.state
         return (
            <Row gutter={4} style={{ marginTop: '20px' }}>
                <Col span={4}>
                    2. 性能优化--防抖
                </Col>
                <Col span={8}>
                    <Input onChange={this.handleChange} />
                </Col>
                <Col span={4}>
                    {value ? `开始请求，请求结果${value}` : "防抖验证（未请求）"}
                </Col>
            </Row>
        )
    }
}

export default Debounce