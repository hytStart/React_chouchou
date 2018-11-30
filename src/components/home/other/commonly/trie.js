
import React from 'react'
import { Row, Col, Input } from 'antd'

// const DATA = {
//     "name": {
//         "firstName": "yi",
//         "lastName": "li"
//     },
//     "age": 23,
//     "roles": ['developer', 'admin'],
//     "projects": [{
//         "name": "demo",
//         "repo": ""
//     }]
// }

const DATA = {
    "name": 'huangyiting',
    "age": '23',
    "testObject": {
        "key1": 'wen',
        "key2": "jiahui",
        "key3": ['array','lala']
    },
    "testArray": [
        {
            "ke": "oij",
        },
        ['trie','luelu']
    ]
}

class Trie extends React.Component {

    state = {
        value: '',
    }

    handleChange = e => {
        const value = e.target.value
        this.search(value, DATA)
    }

    search = (params, originalData) => {
        // for (let key in originalData){
        //     let type = Object.prototype.toString.call(originalData[key])
        //     if (type !== '[object object]' && type !== '[object array]') {
        //         if (params === originalData[key]) {
        //             console.log(originalData[key])
        //             return
        //         } else {
        //             console.log('不存在')
        //         }
        //     } else if (type === '[object object]') {
        //         console.log(11110)
        //         this.search(originalData[key])
        //     } else if (type === '[object array]') {
        //         for (let k of originalData[key]) {
        //             if(Object.prototype.toString.call(k) !== '[object object]' && Object.prototype.toString.call(k) !== '[object array]' ) {
        //                 console.log(originalData[key])
        //                 return
        //             } else {
        //                 this.search(k)
        //             }
        //         }
        //     }
        for (let i in originalData) {
            let paramsType = Object.prototype.toString.call(originalData[i])
            if (paramsType === '[object Object]') {
                // for (let k in originalData[i]) {
                this.search(params, originalData[i])
                // }
            } else if (paramsType === '[object Array]') {
                for (let j in originalData[i]) {
                    if((Object.prototype.toString.call(originalData[i][j]) !== '[object Object]') && (Object.prototype.toString.call(originalData[i][j]) !== '[object Array]') ){
                        if (params === originalData[i][j]) {
                            console.log(params)
                            return
                        } else {
                            console.log('不存在')
                        }
                    } else {
                        this.search(params, originalData[i][j])
                    }
                }
            } else {
                if (params === originalData[i]) {
                    console.log(params)
                    return
                } else {
                    console.log('不存在')
                }
            }
        }
        // Object.keys(originalData).forEach(item => {
        //     if (params === originalData[item]) {
        //         console.log(originalData[item])
        //         return
        //     } else {
        //         console.log('不存在')
        //     }
        // })
    }

    render() {
        const { value } = this.state
         return (
            <Row gutter={4} style={{ marginTop: '20px' }}>
                <Col span={4}>
                    4. 性能优化--字典树
                </Col>
                <Col span={8}>
                    <Input onChange={this.handleChange} />
                </Col>
                <Col span={4}>
                    {value ? `搜索结果为${value}` : "未搜到"}
                </Col>
            </Row>
        )
    }
}

export default Trie