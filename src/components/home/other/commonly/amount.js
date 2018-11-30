import React from 'react'
import { Row, Col, Input } from 'antd'
import _ from 'lodash'

class Amount extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            price: '',
        }
    }

    // ￥转换
    formatAmount = num => {
        // 注意这里可以变化
        const tmp = _.floor(num)
        let tmpString = (tmp || 0).toString()
        let result = ''
        while (tmpString.length > 3) {
            result = `,${tmpString.slice(-3)}${result}`
            tmpString = tmpString.slice(0, tmpString.length - 3)
        }
        if (tmpString) { result = tmpString + result }
        return result
    }

    // ￥还原
    reductAmount = num => num && +(num.replace(/,/g, ''))

    onInputChange = e => {
        let value = e.target.value.replace(/\D/g, "")
        let price = this.formatAmount(value)
        const { input } = this.inputRef
        const index = this.getPotision(input)
        console.log(price.length - index)
        this.setState({
            price,
        }, () => {
            this.setCaretPosition(input, index)
        })
    }
    getCursortPosition = (element) => {
        var CaretPos = 0
        if (document.selection) {//支持IE
            element.focus()
            const Sel = document.selection.createRange()
            Sel.moveStart('character', -element.value.length)
            CaretPos = Sel.text.length
        }
        else if (element.selectionStart || element.selectionStart === '0')//支持firefox
            CaretPos = element.selectionStart
        return ( CaretPos)
    }
    setCaretPosition = (element, pos) => {
        if(element.setSelectionRange)
        {
            element.focus();
            element.setSelectionRange(pos,pos);
        }
        else if (element.createTextRange) {
            var range = element.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    }
    /**
         * 获取测试元素光标位置
         */
    getPotision = (element) => {
        // console.log(this.getCursortPosition(element))
        return this.getCursortPosition(element)
    }
    render() {
        const { price } = this.state
        return(
            <Row gutter={4} style={{ marginTop: '20px' }}>
                <Col span={4}>
                    3. 金额
                </Col>
                <Col span={8}>
                    <Input
                        placeholder="Basic usage"
                        onChange={this.onInputChange}
                        value={price}
                        ref={(input) => { this.inputRef = input }}
                    />
                </Col>
                <Col span={4}>
                    {this.reductAmount(price)}
                </Col>
            </Row>
        )
    }
}

export default Amount