import React from 'react'
import style from './action.scss'

class Parabloa extends React.Component {
    componentDidMount() {
        // 起点和终点请自由设定
        let XStart = 0, YStart = 0, XEnd = 300, YEnd = 300; 
        let Time = 40;
        let Xspeed = (XEnd - XStart) / Time; 
        let Yspeed = -10; 
        let A = 2 * (YEnd - YStart - Yspeed * Time) / (Time * Time); 
        // 生成元素
        // 自由控制形体，定位一般设定为Fixed
        this.ball.style.top = YStart + 'px';
        this.ball.style.left = XStart + 'px';

        // 记录元素实时位置
        let nowX = XStart;
        let nowY = YStart;
        // 单位时间
        let loop = 0;
        // 
        let targetTop = 280
        const move = () => {
            if (nowY >= targetTop) {
                // 销毁实例的判断可自行设定
                this.ball.remove();
                return;
            }
            // 当前位置等于原始位置 + 单位时间内的位移
            nowX += Xspeed;
            // 
            nowY += (A * loop + Yspeed);
            requestAnimationFrame(() => {
                this.ball.style.top = Math.min(nowY, XEnd) + 'px';
                this.ball.style.left = Math.min(nowX, YEnd) + 'px';
                loop++;
                move();
            });
        };
        move()

    }

    yidong = () => {

    }

    render() {
        return (
            <div className={style['parabloa-boll']} ref={node => {this.ball = node}} />
        )
    }
}

export default Parabloa
