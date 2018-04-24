//Third party 
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Subject } from 'rxjs'
import { browserHistory } from 'react-router'

//Application file
import { changeEmail, changePassword, redirect, doLogin } from '../../shared/store/actions/auth/login'
import { ValidateEmail, ValidatePassword, ValidateLogin } from '../../shared/component/validationService'

import { Email, Password, Name, Submit } from '../../shared/component/form'
import { Success, Error } from '../../shared/component/alert'

//React component
class Login extends React.Component{

    constructor(props) {
        super(props)
    }
    

    render() {
        return (
            <div className="modal fade" id="loginModal" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <button type="button" className="btn btn-default" data-dismiss="modal">
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </button>
                        <div className="modal-body">
                            <Error if={ this.props.failed }>
                                Login
                                <br/>
                                Por favor, tente logar denovo
                            </Error>
                            <Email 
                                email={ this.props.email }
                                changeEmail={ this.props.changeEmail }
                                validate="login"
                            />
                            <Password
                                password={ this.props.password }
                                changePassword={ this.props.changePassword }
                                validate="login"
                            />
                            <Submit 
                                validate="login"
                                register={ () => { 
                                    this.props.doLogin(this.props.email, this.props.password) 
                                } }
                            >Login</Submit>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

//State
const mapStateToProps = state => ({
    email: state.login.email,
    password: state.login.password,
    failed: state.login.failed
})

//Actions
const mapDispatchToProps = dispatch => bindActionCreators({ 
    changeEmail, 
    changePassword, 
    doLogin,
    redirect
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)