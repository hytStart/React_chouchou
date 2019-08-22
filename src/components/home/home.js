import React from 'react'
import { Layout, Icon } from 'antd'
import style from './home.scss'
import userImg from '../../images/userimg.jpg'
import NavMenu from '../common/nav/nav.js'
import creatRouters from '../../routers/routers.js'

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
                            React Redux
                        </div>
                        <NavMenu {...this.props} />
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
                            {creatRouters(this.props.match.path)}
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            React-Redux-thunk-Router ©2018 Created by Yiting Huang
                        </Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default Home