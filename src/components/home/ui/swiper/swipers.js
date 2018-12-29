import React from 'react'
import Swiper from 'react-id-swiper'
import style from './swiper.scss'

class Swipers extends React.Component {
    render() {
        const params = {
            containerClass: 'swiper-container customized-slide-container',
            allowSlidePrev: true
        }
        return(
            <div className={style.container}>
                <Swiper { ...params }>
                    <div className={style.item}>Slide 1</div>
                    <div className={style.item}>Slide 2</div>
                    <div className={style.item}>Slide 3</div>
                    <div className={style.item}>Slide 4</div>
                    <div className={style.item}>Slide 5</div>
                </Swiper>
            </div>
        )
    }
}

export default Swipers