import React from 'react'

import notfoundJpg from '../../images/404.jpg' 
class Notfound extends React.Component {
    render() {
        return(
            <div>
                <img src={notfoundJpg} alt="" style={{ height: '100%', width: '100%' }}/>
            </div>
        )
    }
}

export default Notfound