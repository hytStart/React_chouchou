import React from 'react'
import { NavLink, Prompt } from 'react-router-dom'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            price: true,
        }
    }
    componentDidMount() {
        console.log('location', this.props.location)
        console.log('match', this.props.match)
    }
    render() {
        return(
            <div>
                <NavLink
                    to="/about"
                    activeStyle={{ color: 'green', fontWeight: 'bold' }}
                >MyBlog</NavLink>
                <Prompt 
                    when={this.state.price} 
                    message="数据尚未保存，确定离开？"
                />
            </div>
        )
    }
}

export default Home