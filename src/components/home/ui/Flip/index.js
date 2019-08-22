/*
 * @Description: 让原来的不动的话，就在蒙一层
 * @Author: your name
 * @Date: 2019-01-09 17:38:03
 * @LastEditTime: 2019-03-06 14:59:31
 * @LastEditors: Please set LastEditors
 * https://zhuanlan.zhihu.com/p/27867539
 */

import React from 'react'
import style from './flip.scss'

const OBJECT = {}

class Flip extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            classname: true,
            No: '',
        }
    }

    componentDidMount() {
    }

    changeAnimate = index => {
        const first = OBJECT[index].getBoundingClientRect()
        const { classname } = this.state
        this.setState({
            classname: !classname,
            No: index,
        },
        () => {
            OBJECT[index].classList.add('box-container-change')
            const last = OBJECT[index].getBoundingClientRect()
            const deltaX = first.left - last.left
            const deltaY = first.top - last.top
            const deltaW = first.width / last.width
            const deltaH = first.height / last.height
            OBJECT[index].animate(
                [
                    {
                        transformOrigin: 'top left',
                        transform: `translate(${deltaX}px, ${deltaY}px)
                                    scale(${deltaW}, ${deltaH}) `,
                    },
                    {
                        transformOrigin: 'top left',
                        transform: 'none',
                    },
                ],
                {
                    duration: 1000,
                    easing: 'ease-in-out',
                    fill: 'both',
                },
            )
        },
        )
    }

    render() {
        const { classname, No } = this.state
        const styleAfter = {
            width: '400px',
            height: '400px',
            backgroundColor: 'chocolate',
            position: 'absolute',
            left: '500px',
            top: '200px',
            zIndex: '2',
        }
        const styles = classname ? {} : styleAfter
        return (
            <div className={style['box-wrap']}>
                {
                    (() => (
                        Object.keys(new Array(21).join(',')).map((item, index) => (
                            <div
                                key={Math.random()}
                                style={No === index ? styles : {}}
                                className={style['box-container']}
                                onClick={this.changeAnimate.bind(this, index)}
                                ref={node => { OBJECT[index] = node }}
                            >
                                {index}
                            </div>
                        ))
                    ))()
                }
            </div>
        )
    }
}

export default Flip
