import React from 'react'
import style from './action.scss'
import { clearTimeout } from 'timers'

class ParabloaCss extends React.Component {
    constructor(props) {
        super(props)
        this.timer = true
    }

    componentDidMount() {
        this.move2()
    }

    componentWillUnmount() {
        setTimeout(() => {
            document.title = "hohoho"
        }, 100)
        this.timer = false
    }

    move2 = _ => {
        const that = this
        const f = ['🌑', '🌘', '🌗', '🌖', '🌕', '🌔', '🌓', '🌒']
        let d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        let m = 0
        function loop() {
            var s = '', x = 0
            if (!m) {
                while (d[x] == 4) {
                    x ++
                }
                if (x >= d.length) m = 1
                else {
                    d[x] ++
                }
            }
            else {
                while (d[x] == 0) {
                    x ++
                }
                if (x >= d.length) m = 0
                else {
                    d[x] ++
                    if (d[x] == 8) d[x] = 0
                }
            }
            d.forEach(function (n) {
                s += f[n]
            })
            document.title = s
            that.timer && setTimeout(loop, 50)
        }
        that.timer && loop()
    }

    render() {
        return (
            <div className={style.outer}>
                <div className={style.inner} />
            </div>
        )
    }
}

export default ParabloaCss
