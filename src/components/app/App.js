import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from './logo.svg';
import style from './App.css';
import { notification, Icon } from 'antd';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
        this.showNotification()
    }
    showNotification = _ => {
        const openNotification = () => {
            notification.open({
                message: 'You can follow me',
                description: (
                    <div>
                        <a href="https://github.com/hytStart">
                            GitHub地址： 
                            https://github.com/hytStart
                        </a>
                    </div>
                ),
                icon: <Icon type="github" />,
                duration: 0,
            })
            localStorage.setItem('chou_First', JSON.stringify(true))
        }
        const isFirst = JSON.parse(localStorage.getItem('chou_First'))
        !isFirst && openNotification()
    }
    render() {
        return (
            <div className={style.App}>
                <header className={style['App-header']}>
                  <img src={logo} className={style['App-logo']} alt={style.logo} />
                  <p>
                      <Link
                          to={{
                                pathname: '/home',
                                search: '?name=ting',
                                state: { price: 18 }
                          }}
                        >
                            我的React(create-react-app)
                      </Link>
                  </p>
                </header>
            </div>
        );
    }
}

export default App;
