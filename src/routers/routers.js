import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Notfound from '../components/404/index.js'
import Canvas from '../components/home/canvas/canvas.js'

const creatRouters = path => (
    <Switch>
        <Route exact path={`${path}/canvas`} component={Canvas} />
        <Route path="*" component={Notfound} />
        {/* <Route render={() => <Redirect to='/404' />} /> */}
  </Switch>
)

export default creatRouters