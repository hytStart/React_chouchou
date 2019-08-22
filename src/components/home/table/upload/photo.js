/*
 * @Description: 图片上传
 * @Author:Yiting Huang
 * @Date: 2018-11-13 12:19:37
 * @LastEditTime: 2019-04-01 20:16:40
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import { Upload, Icon, Modal } from 'antd'

class PicturesWall extends React.Component {
    state = {
        previewVisible: false,
        previewImage: '',
        fileList: [{
            uid: '-1',
            name: 'xxx.png',
            status: 'done',
            url: 'https://img3.yxlady.com/fs/UploadFiles_2682/2016041/2016040122364028.jpg',
        }],
    }

    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        })
    }

    handleChange = ({ fileList }) => {
        this.setState({ fileList })   
    }

    // handleDelete = () => {
    //     Modal.confirm({
    //         title: 'Are you sure delete this task?',
    //         content: 'Some descriptions',
    //         okText: 'Yes',
    //         okType: 'danger',
    //         cancelText: 'No',
    //         onOk() {
    //           console.log('OK');
    //         },
    //         onCancel() {
    //           console.log('Cancel');
    //         },
    //     })
    // }

    render() {
        const { previewVisible, previewImage, fileList } = this.state
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        )
        return (
            <div className="clearfix">
                <Upload
                    action="//jsonplaceholder.typicode.com/posts/"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                    // onRemove ={this.handleDelete}
                >
                    {fileList.length >= 8 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                   <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        )
    }
}

export default PicturesWall