//Third Party
import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

//Application files
import Login from '../../auth/login/login'
import Layout from '../container/layout/layout'
import Information from '../../information/information'

export default props => (
    <Router history={ hashHistory }>
        <Route exac path='login' component={ Login }/>
        <Route exac path='home' component={ Information }/>
        <Redirect from='*' to='home' />
    </Router>
)