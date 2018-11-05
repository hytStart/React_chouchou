import React from 'react'

import notfoundJpg from '../../images/404.jpg' 
class Notfound extends React.Component {
    render() {
        return(
            <div>
                <img
                    src={notfoundJpg}
                    alt=""
                    style={{
                        height: '100%',
                        minHeight: '600px',
                        width: '80%',
                        display: 'block',
                        margin: '0 auto',
                    }}/>
            </div>
        )
    }
}

export default Notfound