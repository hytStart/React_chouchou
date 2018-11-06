import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Notfound from '../components/404/index.js'
import Canvas from '../components/home/canvas/canvas.js'
import ReduxComponent from '../containers/redux.js'

const creatRouters = path => (
    <Switch>
        <Route exact path={`${path}/canvas`} component={Canvas} />
        <Route exact path={`${path}/redux`} component={ReduxComponent} />
        <Route path="*" component={Notfound} />
        {/* <Route render={() => <Redirect to='/404' />} /> */}
  </Switch>
)

export default creatRouters