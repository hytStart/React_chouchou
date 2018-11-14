/*
 * @Description: banner ui
 * @Author: Yiting Huang
 * @Date: 2018-11-13 10:49:32
 * @LastEditTime: 2018-11-13 12:27:08
 * @LastEditors: Yiting Huang
 */

import React from 'react'
import BannerAnim, { Element } from 'rc-banner-anim'
import TweenOne from 'rc-tween-one'
import { Card } from 'antd'

import style from './banner.scss'

const { BgElement } = Element


class Banner extends React.Component {
    render() {
        return(
            <Card title="基本用法" bordered={false}>
                <BannerAnim prefixCls={style.bannerItem} autoPlay autoPlaySpeed={2000}>
                    <Element key="demo1" prefixCls={style.eleItem}>
                        <BgElement
                            key="bg"
                            className={style.bg}
                            style={{
                                background: '#364D79',
                            }}
                        />
                        <TweenOne animation={{ x: -30, type: 'from' }}>Ant Motion Demo</TweenOne>
                    </Element>
                    <Element key="demo2" prefixCls={style.eleItem}>
                        <BgElement
                            key="bg"
                            className={style.bg}
                            style={{
                                background: '#64CBCC',
                            }}
                        />
                        <TweenOne animation={{ x: -30, type: 'from' }}>缘分让我们相遇</TweenOne>
                    </Element>
                </BannerAnim>
            </Card>
        )
    }
}

export default Banner