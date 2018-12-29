import React from 'react'
import { Row, Col, Button, Modal } from 'antd'
import handSomeMan from '../../../../images/userimg.jpg'

class Lazyload extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545188437&di=7ce6ff9c851f15c997619fe84c9781b3&imgtype=jpg&er=1&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FpDOO7SqewjWb9maqJxJdBYueZYT8MtVJtk6jMZ9MivyNu1540726070948compressflag.jpg',
        }
    }
    componentDidMount() {
        this.lazyLoadImg()
    }
    // 页面中的图片url事先先存在其data-src属性上
    // 轮到他才加载
    lazyLoadImg = () => {
        const images = document.getElementsByTagName('img');
        for(let i = 0; i < images.length; i++) {
            if(images[i].getAttribute('data-src')) {
                images[i].setAttribute('src', images[i].getAttribute('data-src'));
                images[i].onload = () => images[i].removeAttribute('data-src');
            }
        }
    }
    render() {
        const { url } = this.state
        return (
          <Row style={{ marginTop: '20px' }}>
                <Col span={4}>
                    9. 懒加载 （虚拟代理加载）
                </Col>
                <Col span={4}>
                    <img
                        src={url}
                        alt="显示"
                        style={{ width: '200px', height: '200px' }}
                        data-src={handSomeMan}
                    />
                </Col>
          </Row>
        )
    }
}

export default Lazyload
