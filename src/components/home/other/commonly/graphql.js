/* 简单实用fetch模拟了一下，相关请移步GraphQL Apollo */

import React from 'react'
import fetch from 'isomorphic-fetch'
import { Button } from 'antd'

class Graphql extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
        }
    }

    // `mutation{
    //     addOne(listObj:{
    //       id: "11111",
    //       desc: "这个是描述",
    //       title: "这个是新建的标题",
    //       date: "这个是新建的时间",
    //       checked: false
    //     }){
    //       id,
    //       success
    //     }
    //   }`

    componentDidMount() {
        fetch('/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: `query{
                    lists{
                        id,
                        title,
                        desc,
                        date,
                    }
                }`,
            }),
        })
            .then(res => res.json())
            .then(data => {
                console.log('#####Graphql#####', data.data.lists)
                this.setState({
                    list: data.data.lists,
                })
            })
    }

    add = () => {
        fetch('/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: `mutation{
                    addOne(listObj:{
                      id: "77777",
                      desc: "7777这个是描述",
                      title: "777这个是新建的标题",
                      date: "7777这个是新建的时间",
                      checked: false
                    }){
                      id,
                      success
                    }
                  }`,
            }),
        })
            .then(res => res.json())
            .then(data => {
                console.log('#####Graphql#####', data)
            })
    }

    edit = () => {
        fetch('/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: `mutation{
                    editOne(listObj:{
                      id: "2222",
                      desc: "编辑后的",
                      title: "编辑后的",
                      date: "7777这个是新建的时间",
                      checked: false
                    }){
                      id,
                      success
                    }
                  }`,
            }),
        })
            .then(res => res.json())
            .then(data => {
                console.log('#####Graphql#####', data)
            })
    }

    render() {
        const {
            list,
        } = this.state
        return (
            <div>
                11. GraphQL
                <Button onClick={this.add} type="primary">添加</Button>
                <Button onClick={this.edit}>编辑</Button>
                {
                    list.map((item, index) => <div key={index}>{index + 1}、{item.title}、{item.desc}、{item.date}</div>)
                }
            </div>
        )
    }
}

export default Graphql
