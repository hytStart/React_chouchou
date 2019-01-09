/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2018-12-29 10:08:39
 * @LastEditTime: 2019-01-09 11:04:29
 * @LastEditors: Please set LastEditors
 */

import React from 'react'
import { Row, Col, Card, notification } from 'antd'
import style from './action.scss'
import musicOpen from '../../../../images/action/music-icon.png'
import musicClose from '../../../../images/action/music-close.png'

class Action extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            play: true,
            peopleMove: false,
            pausedState: false,
        }
        this.start2 = null
    }

    componentDidUpdate() {
        const { peopleMove } = this.state
        if (peopleMove) {
            this.start2.addEventListener('animationend', this.end)
            this.start2.addEventListener('webkitAnimationEnd', this.end)
            this.start2.addEventListener('mozAnimationEnd', this.end)
            this.start2.addEventListener('oAnimationEnd', this.end)
        }
    }
    end = _ => {
        notification.open({
            message: '动画结束',
            description: 'animationend',
        })
    }
    closeIcon = _ => {
        this.setState({
            play: !this.state.play,
        })
    }
    onTouchStart = _ => {
        this.setState({
            peopleMove: true,
        })
        this.setState({
            pausedState: true,
        })
    }

    onTouchEnd = _ => {
        this.setState({
            pausedState: false,
        })
    }
    render() {
        const { play, peopleMove, pausedState } = this.state
        return(
            <div className={style.container}>
                 <Row gutter={4}>
                    <Col span={6}>
                        <Card
                            title="流星"
                            style={{ width: 300, height: 300, background: '#232c68', color: '#fff' }}
                        >
                            <div className={style['space-section']}>
                                <div className={style['star']}></div>
                            </div>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            title="闪烁星星"
                            style={{ width: 300, height: 300, background: '#232c68', color: '#fff' }}
                        >
                            <div className={style['space-section']}>
                                <div className={style['shine']}></div>
                            </div>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            title="字"
                            style={{ width: 300, height: 300, background: '#232c68', color: '#fff' }}
                        >
                            <div className={style['space-section']}>
                                <div className={style['text-item-0']}></div>
                            </div>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            title="人"
                            style={{ width: 300, height: 300, background: '#232c68', color: '#fff' }}
                            // onTouchStart={this.onTouchStart}
                            // onTouchEnd={this.onTouchEnd}
                            onClick={this.onTouchStart}
                        >
                            <div className={style['space-section']}>
                                {
                                    peopleMove ?
                                        <div
                                            className={`${style.people_move} ${!pausedState && style.people_paused}`}
                                            ref={start2 => { this.start2 = start2 }}
                                        />
                                        :
                                        <div className={style.people} />
                                }
                                <span>
                                   
                                </span>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={4} style={{ marginTop: '20px' }}>
                    <Col span={6}>
                        <Card
                            title="桥"
                            style={{ width: 300, height: 300, background: '#232c68', color: '#fff' }}
                        >
                            <div className={style['space-section']}>
                                <div className={style.brige} />
                            </div>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            title="渐变大（开始旅程）"
                            style={{ width: 300, height: 300, background: '#232c68', color: '#fff' }}
                        >
                            <div className={style['space-section']}>
                                <span className={style['icon-ciecle']} />
                            </div>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            title="旋转"
                            style={{ width: 300, height: 300, background: '#232c68', color: '#fff' }}
                        >
                            <div className={style['space-section']}>
                                <img
                                    className={`${style.music_img} ${play ? '' : style['rotate-pause']}`}
                                    src={play ? musicOpen : musicClose} alt="" onClick={this.closeIcon}
                                />
                            </div>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            title="Swiper(react-id-swiper V4)"
                            style={{ width: 300, height: 300, background: '#232c68', color: '#fff' }}
                        >
                            <div className={style['space-section']}>
                                1. 不一定通过api。也可以通过重写css实现。<br/>
                                    <code>
                                        .swiper-wrapper <br/>
                                            transition-delay: 1.6s;<br/>
                                    </code>
                                2. 重写css的话，会影响它本身的动画效果，所以可以通过添加不可滑动来控制。<br/>
                                    <code>
                                        noSwiping: true,<br/>
                                        noSwipingClass: 'stop-swiping',<br/>
                                    </code>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Action