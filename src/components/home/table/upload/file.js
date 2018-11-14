import React from 'react'
import { Upload, Icon, message } from 'antd'

const Dragger = Upload.Dragger

class File extends React.Component {
    state = {
        fileList: [],
    }
    handleChange = info => {
        const status = info.file.status
        if (status !== 'uploading') {
            console.log(info.file, info.fileList)
            this.setState({
                fileList: info.fileList,
            })
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`)
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`)
        }
    }
    render() {
        const props = {
            name: 'file',
            multiple: true,
            action: '//jsonplaceholder.typicode.com/posts/',
            onChange: this.handleChange
        }
        // const { fileList } = this.state
        return (
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
            </Dragger>
        )
    }
}

export default File