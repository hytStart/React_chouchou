import React from 'react'
import { Menu, Icon } from 'antd'

class NavMenu extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }
    render() {
        return(
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{ background: '#282c34' }}>
                <Menu.Item key="1">
                    <Icon type="user" />
                    <span>nav 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="video-camera" />
                    <span>nav 2</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="upload" />
                    <span>nav 3</span>
                </Menu.Item>
            </Menu>
        )
    }
}

export default NavMenu