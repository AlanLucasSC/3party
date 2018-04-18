//Third Party
import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

//Application files
import Login from '../../auth/login/login'
import Layout from '../container/layout/layout'

export default props => (
    <Router history={ hashHistory }>
        <Route exac path='login' component={ Login }/>
        <Route exac path='layout' component={ Layout }/>
        <Redirect from='*' to='login' />
    </Router>
)