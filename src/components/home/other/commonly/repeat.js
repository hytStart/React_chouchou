import React from 'react'
import { Row, Col } from 'antd'
import User from './user.js'


// class Repeat extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             users: [
//                 { id: 1, name: 'Cory' },
//                 { id: 2, name: 'Meg' },
//                 { id: 3, name: 'Bob' },
//             ],
//         }
//     }

//     deleteUser = id => {
//         this.setState(prevState => {
//             return {
//                 users: prevState.users.filter(user => user.id !== id)
//             }
//         })
//     }

//     render() {
//         const { users } = this.state
//         return (
//             <Row gutter={4} style={{ marginTop: '20px' }}>
//                 <Col span={12}>
//                     10. 重复渲染
//                 </Col>
//                 <div>
//                     <h1>Users</h1>
//                     <ul>
//                         {
//                             users.map(user => (
//                                 <User
//                                     key={user.id}
//                                     name={user.name}
//                                     onDeleteClick={() => this.deleteUser(user.id)}
//                                 />
//                             ))
//                         }
//                     </ul>
//                 </div>
//             </Row>
//         )
//     }
// }

class Repeat extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [
          { id: 1, name: 'Cory' }, 
          { id: 2, name: 'Meg' }, 
          { id: 3, name: 'Bob'}
        ],
      };
    }
  
    deleteUser = name => {
        // 子组件传来的name
        console.log(name)
      this.setState(prevState => {
        return { 
          users: prevState.users.filter(user => user.name !== name)
        };
      });
    };
  
    renderUser = user => {
      return <User key={user.id} user={user} onClick={this.deleteUser} />;
    }
  
    render() {
      return (
        <Row gutter={4} style={{ marginTop: '20px' }}>
                <Col span={12}>
                    10. 重复渲染
                </Col>
                <div>
                    <h1>Users</h1>
                    <ul>
                        {this.state.users.map(this.renderUser)}
                    </ul>
                </div>
        </Row>
      );
    }
  }
  

export default Repeat
