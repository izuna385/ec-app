import React from 'react';
import {Switch, Route} from "react-router";
import {Login, Home} from './templates'

const Router = () => {
    return (
        <Switch>
            <Route path={"/login"} component={Login} />
            <Route path={"(/)?"} component={Home} />
        </Switch>
    )
}

export default Router;