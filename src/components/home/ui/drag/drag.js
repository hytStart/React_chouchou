import React from 'react'
import Draggable from 'react-draggable'
import { Card } from 'antd'

class Drag extends React.Component {

    // eventLogger = (e: MouseEvent, data: Object) => {
    //     console.log('Event: ', e)
    //     console.log('Data: ', data)
    // }
    render() {
        return(
            <div >
                <Draggable
                    axis="both"
                    handle=".handle"
                    defaultPosition={{x: 0, y: 0}}
                    position={null}
                    grid={[1, 1]}
                    onStart={this.handleStart}
                    onDrag={this.handleDrag}
                    onStop={this.handleStop}>
                    <div
                        className='handle'
                        style={{ cursor: 'pointer' }}
                    >
                        <Card
                            title="Drag Me"
                            extra={<a target="_blank" href="https://github.com/hytStart">More</a>}
                            style={{ width: 300, background: 'cadetblue', color: '#fff' }}
                        >
                            <p>Drag me</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </div>
                </Draggable>
            </div>
        )
    }
}

export default Drag