import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Notfound from '../components/404/index.js'
import Canvas from '../components/home/canvas/canvas.js'
import ReduxComponent from '../containers/redux.js'
import Drag from '../components/home/ui/drag/drag.js'
import Picture from '../components/home/ui/picture/picture.js'
import Banner from '../components/home/ui/banner/banner.js'
import Swipers from '../components/home/ui/swiper/swipers.js'
import Action from '../components/home/ui/action/index.js'
import Upload from '../components/home/table/upload/upload.js'
import Commonly from '../components/home/other/commonly/commonly.js'
import RenderCallback from '../components/home/other/zujian/index.js'
import ReactNew from '../components/home/other/reactNew/index.js'
import Echarts from '../components/home/chart/echarts/index.js'
import Highcharts from '../components/home/chart/highcharts/index.js'

const creatRouters = path => (
    <Switch>
        <Route exact path={`${path}/canvas`} component={Canvas} />
        <Route exact path={`${path}/redux`} component={ReduxComponent} />
        <Route exact path={`${path}/ui/drag`} component={Drag} />
        <Route exact path={`${path}/ui/picture`} component={Picture} />
        <Route exact path={`${path}/ui/banner`} component={Banner} />
        <Route exact path={`${path}/ui/swiper`} component={Swipers} />
        <Route exact path={`${path}/ui/action`} component={Action} />
        <Route exact path={`${path}/table/upload`} component={Upload} />
        <Route exact path={`${path}/other/commonly`} component={Commonly} />
        <Route exact path={`${path}/other/RenderCallback`} component={RenderCallback} />
        <Route exact path={`${path}/other/reactNew`} component={ReactNew} />
        <Route exact path={`${path}/chart/echarts`} component={Echarts} />
        <Route exact path={`${path}/chart/highcharts`} component={Highcharts} />
        <Route path="*" component={Notfound} />
        {/* <Route render={() => <Redirect to='/404' />} /> */}
  </Switch>
)

export default creatRouters