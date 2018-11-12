import React from 'react'
import { Input } from 'antd'
import _ from 'lodash'

class Canvas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            price: 0,
        }
    }

    // ￥转换
    formatAmount = num => {
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
        this.setState({
            price,
        })
    }

    render() {
        const { price } = this.state
        return(
            <div>
                canvasa
                <Input placeholder="Basic usage" onChange={this.onInputChange} value={price} />
                {this.reductAmount(price)}
            </div>
        )
    }
}

export default Canvas