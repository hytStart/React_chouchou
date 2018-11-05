import React from 'react'
import { Link } from 'react-router-dom'
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
                        {/* <Icon type={item.icon} /> */}
                        {this.renderMenuItem(item.subs)}
                    </SubMenu>
                )
            } else {
                res = (
                    <Menu.Item key={item.title}>
                        <Link to={item.path}>
                            {/* <Icon type={item.icon} /> */}
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            }
            return res
        })
    }
    renderMenuItem = (params = []) => {
        return params.map(item => (
            <Menu.Item key={item.title}>
                <Link to={item.path}>
                    <Icon type={item.icon} />
                    <span>{item.title}</span>
                </Link>
            </Menu.Item>
        ))
    }
    render() {
        // 取第一项为menu默认项
        const { menu: [{ title }] } = menuConfig
        return(
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[title]} style={{ background: '#282c34' }}>
                {this.renderSubmenu(menuConfig.menu)}
            </Menu>
        )
    }
}

export default NavMenu