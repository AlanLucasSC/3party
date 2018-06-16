//Third Party
import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import { connect } from 'react-redux'

//Application files
import Login from '../../auth/login/login'
import Layout from '../container/layout/layout'
import Information from '../../information/information'
import Dashboard from '../../dashboard/dashboard'
import UserProfile from '../../profile/user'
import Service from '../../service/service'
import Files from '../../file/file'

class Routes extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Router history={ hashHistory }>
                <Route exac path='/' component={ Information }/>
                <Route exac path='/dashboard' component={ Dashboard }/>
                <Route exac path='/profile' component={ UserProfile }/>
                <Route exac path='/products' component={ Service }/>
                <Route exac path='/file' component={ Files }/>
                <Redirect from='*' to='/' />
            </Router>   
        )
    }
}

//State
const mapStateToProps = state => ({
    userType: state.app.userType
})

export default connect(mapStateToProps)(Routes)
