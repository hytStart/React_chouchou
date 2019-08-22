/*
 * @Description: 节流
 * @Author: Yingting Huang
 * @Date: 2018-11-15 12:00:08
 * @LastEditTime: 2019-04-12 20:35:09
 * @LastEditors: Please set LastEditors
 * 
 *   let stattime = new Date(); 这个位置不能写成   let stattime = 0
 *   因为如果test函数里，setState以后，会造成组件重新渲染，stattime又变成0了，所以一直执行
 */

import React from 'react'
import { Row, Col, Card } from 'antd'

class Throttle extends React.Component {

    constructor() {
        super()
        this.state = {
            value: 0,
        }
    }

    throttleFn = (fn, delay = 2000, mustRunDelay) => { 
        let timeout
        //节流 控制执行间隔时间 防止频繁触发 scroll resize mousemove
        let stattime = new Date();
        return function (...args) {
            let curTime = new Date();
            clearTimeout(timeout)//总是干掉事件回调
            if (curTime - stattime >= delay) {
                // console.log(123)
                stattime = curTime;
                return fn.apply(this, args);
            } else {
                timeout = setTimeout(function(){
                    fn.apply(this, args) 
                }, delay);
            }
        }
    }
    throttleFn2(fn, threshold){
        var timeout
        var start = new Date();
        var threshhold = threshhold || 1600
    
        return function () {
            var context = this, 
            args = arguments, 
            curr = new Date() - 0;
    
            clearTimeout(timeout)//总是干掉事件回调
    
            if(curr - start >= threshhold){ 
                console.log("now", curr, curr - start)
                            //注意这里相减的结果，都差不多是160左右
                fn.apply(context, args) 
                            //只执行一部分方法，这些方法是在某个时间段内执行一次
                start = curr 
                            //重新开始计算时间
            }else{
                //让方法在脱离事件后也能执行一次
                timeout = setTimeout(function(){
                    fn.apply(context, args) 
                }, threshhold);
            }
        }
    }
    throttle = (fn, delay = 2000) => {
        let timer = null
        let startTime = new Date()
        return function() {
            const context = this
            let currentTime = new Date()
            clearTimeout(timer)
            if (currentTime - startTime >= delay) {
                fn.apply(context, arguments)
                startTime = currentTime
            } else {
                //让方法在脱离事件后也能执行一次
                timer = setTimeout(() => {
                    fn.apply(context, arguments)
                }, delay)
            }
        }
    }
    test = _ => {
        let { value } = this.state
        value = value + 1
        this.setState({
            value,
        })
        console.log(2222)
    }
    
    render() {
        const { value } = this.state
         return (
            <Row gutter={4} style={{ marginTop: '20px' }}>
                <Col span={4}>
                    3. 性能优化--节流
                </Col>
                <Col span={8}>
                    <Card title="hover" bordered={true} onMouseMove={this.throttleFn(this.test)}>
                    </Card>
                </Col>
                <Col span={4}>
                    {value ? `开始请求，请求结果${value}` : "节流验证（未请求）"}
                </Col>
            </Row>
        )
    }
}

export default Throttle