import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from './logo.svg';
import style from './App.css';
import styles from './test.css';
import { notification, Icon, Button } from 'antd';

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
        notification.open({
            message: 'You can follow me',
            description: 'https://github.com/hytStart',
            icon: <Icon type="github" />,
            duration: 10,
        })
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
                  <div className={styles.testLess}>
                      test less
                  </div>
                </header>
            </div>
        );
    }
}

export default App;
