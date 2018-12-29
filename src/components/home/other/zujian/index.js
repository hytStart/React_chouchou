import React from 'react'
import Ratio from './RenderCallback.js'
class Zujian extends React.Component {
    render() {
        return (
            <div>
                <Ratio>
                    {(width, height, hasComputed) => (
                        <div style={{width, height}}>Hello world!</div>
                    )}
                </Ratio>
            </div>
        )
    }
}

export default Zujian