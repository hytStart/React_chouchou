/*
 * @Description: upload ui
 * @Author: Yiting Huang
 * @Date: 2018-11-13 11:36:35
 * @LastEditTime: 2018-11-14 14:44:15
 * @LastEditors: Please set LastEditors
 */

import React from 'react'
import { Row, Col, Card } from 'antd'
import PicturesWall from './photo.js'
import File from './file.js'

class Upload extends React.Component {

    render() {
        return (
            <div>
                <Row gutter={8}>
                    <Col span={8}>
                        <Card title="图片上传(antd)" bordered={true}>
                            <PicturesWall />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="文件上传(antd)" bordered={true}>
                            <File />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Upload