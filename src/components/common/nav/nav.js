import React from 'react'
import { Menu, Icon } from 'antd'
import menuConfig from './config.js'

const { SubMenu } = Menu 

class NavMenu extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }
    renderSubmenu = menu => {
        return menu.map(item => {
            let res = null
            if(item && item.subs) {
                res = (
                    <SubMenu key={item.title} title={item.title}>
                        {this.renderMenuItem(item.subs)}
                    </SubMenu>
                )
            } else {
                res = (
                    <Menu.Item key={item.title}>{item.title}</Menu.Item>
                )
            }
            return res
        })
    }
    renderMenuItem = (params = []) => {
        return params.map(item => (
            <Menu.Item key={item.title}>{item.title}</Menu.Item>
        ))
    }
    render() {
        return(
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{ background: '#282c34' }}>
                {/* <Menu.Item key="1">
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
                </Menu.Item> */}
                {this.renderSubmenu(menuConfig.menu)}
            </Menu>
        )
    }
}

export default NavMenu