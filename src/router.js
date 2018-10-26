import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import App from './components/app/App.js'
import Home from './components/home/home.js'
class Router extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/"render={() => <Redirect to='/app' push />} />        
                    <Route path="/app" component={App} />
                    <Route path="/home" component={Home} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router
