import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import style from './home.scss'
import userImg from '../../images/userimg.jpg'

const { Header, Sider, Content, Footer } = Layout
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
        }
    }
    
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }
      render() {
        return (
            <div className={style.wrap}>
                <Layout>
                    <Sider
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                        style={{ background: '#282c34' }}
                    >
                        <div className={style.logo}>
                        </div>
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
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#282c34', padding: 0 }}>
                            <Icon
                                className={style.trigger}
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                            <img src={userImg} alt="" className={style.userImg} />
                        </Header>
                        <Content style={{ margin: '24px 16px 0px', padding: 24, background: '#fff', minHeight: 280 }}>
                            Content
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            React-Redux-Router ©2018 Created by Yiting Huang
                        </Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default Home