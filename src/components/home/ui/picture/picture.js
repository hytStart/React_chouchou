/*
 * @Description: In User Settings Edit
 * @Author: Yiting Huang
 * @Date: 2018-11-12 19:15:49
 * @LastEditTime: 2018-11-13 12:27:42
 * @LastEditors: Yiting Huang
 */

import React from 'react'
import { Card } from 'antd'

const { Meta } = Card

class Picture extends React.Component {

    openGallery = src => {

    }

    render() {
        return(
            <div >
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={
                        <img
                            onClick={() => this.openGallery("https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png")}
                            alt="example"
                            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                        />}
                >
                    <Meta
                        title="惊喜奥"
                        description=" "
                    />
                        <small>
                            <a href="https://hytStart.github.io/" target="_blank" rel="noopener noreferrer">
                                https://hytStart.github.io/
                            </a>
                        </small>
                </Card>
            </div>
        )
    }
}

export default Picture