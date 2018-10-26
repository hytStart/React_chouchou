import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import { Button, notification, Icon } from 'antd';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount() {
    // this.showNotification()
  }
  // showNotification = _ => {
  //   notification.open({
  //     message: '嘻嘻',
  //     description: '小赤佬',
  //     icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
  //   })
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            我的React(create-react-app)
            <br/>
            <Link to='/home'>Come On</Link>
          </p>
          {/* <Button type="primary" ghost>前方的路（antfin）</Button> */}
        </header>
      </div>
    );
  }
}

export default App;
