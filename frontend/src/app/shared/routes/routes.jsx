//Third Party
import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

//Application files
import Login from '../../auth/login/login'
import Layout from '../container/layout/layout'
import Information from '../../information/information'
import Dashboard from '../../dashboard/dashboard'

export default props => (
    <Router history={ hashHistory }>
        <Route exac path='/' component={ Information }/>
        <Route exac path='/dashboard' component={ Dashboard }/>
        <Redirect from='*' to='/' />
    </Router>
)