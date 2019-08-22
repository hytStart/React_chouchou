
import React, { Component } from 'react'
import { Button } from 'antd'
import style from './index.scss'

// 可以把document.getElementByid 变成ths.node. 然后把addeventlisner换成 onchange={this.onchange}

// 兼容阻止冒泡
export const stopProp =  (e) => {
    window.event ? window.event.cancelBubble = true : e.stopPropagation();
};
export const prevent = (e) => {
    window.event ? window.event.returnValue = false : e.preventDefault();
};
const formdata = new FormData()
class SelfUpload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            resFileSrc: '', // 图片来源
        }
        this.imgLocal = null
    }
    // 阻止冒泡和默认行为
    rawEvent = (e) => {
        stopProp(e)
        prevent(e)
    };
    componentDidMount() {
        // 监听dragenter和dragover事件，保证drap事件的触发
        document.addEventListener('dragenter', this.rawEvent);
        document.addEventListener('dragover', this.rawEvent);
        this.imgLocal.onchange = () => {
            const fileList = document.querySelector('#imgLocal').files
            this.creatImgSrc(fileList)
            this.creatRequestData(fileList, this.upFile)
        }
    }
    creatImgSrc = params => {
        //继续使用上文的fileList
        const file = params[0]
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file) //读取图片
        fileReader.addEventListener('load', () => {
            // 读取完成
            const resFileSrc = fileReader.result
            // resFileSrc是base64格式的图片
            this.setState({
                resFileSrc,
            })
        })
    }
    creatRequestData = (fileList, cb) => {
        const file = fileList[0]
        const { name } = file
        formdata.append('testPictur', file, name)
        cb(formdata)
    }
    upFile = formdata => {
        // eslint-disable-next-line vars-on-top
        for (var pair of formdata.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
        console.log(formdata.entries())
        // ajax()
    }
    // 拖拽图片的触发事件
    drapImage = (e) => {
        prevent(e)
        this.creatImgSrc(e.dataTransfer.files)
        this.creatRequestData(e.dataTransfer.files, this.upFile)
    }
    render() {
        const { resFileSrc } = this.state
        return (
           <div>
                <input
                    type="file"
                    multiple
                    id="imgLocal"
                    accept="image/*"
                    ref={ dom => { this.imgLocal = dom } }
                />
                <div className={style['drap-area']} onDrop={this.drapImage} onDragOver={this.rawEvent}
    onDragEnter={this.rawEvent}>
                    拖拽图片到此
                </div>
                预览：
                <img src={resFileSrc} alt="" style={{ width: '100px', height: '100px' }} />
                <Button onClick={this.upFile} type="primary">上传</Button>
           </div>
        )
    }
}

export default SelfUpload
