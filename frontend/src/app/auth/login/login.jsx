//Third party 
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Subject } from 'rxjs'
import { browserHistory } from 'react-router'

//Application file
import { changeEmail, changePassword, redirect, doLogin } from '../../shared/store/actions/auth/login'
import { ValidateEmail, ValidatePassword, ValidateLogin } from '../../shared/component/validationService'
import Submit from '../../shared/component/button/submitLogin'

//Css file
import './login.css'

//Helpers
import { history } from '../../shared/utils/history';

//Observables
const stream = new Subject()

//React component
class Login extends React.Component{

    constructor(props) {
        super(props)
    }

    call() {
        counter.subscribe(
            (value) => this.props.changeEmail
        )
    }

    

    render() {
        return (
            <div className="form-container" id="mainNav">
                <h2 className="login-title center">AZ LOGIN</h2>
                <div className="alert alert-info">
                    <p>Email: admin@az.com</p>
                    <p>Password: admin</p>
                </div>

                <div className="error-wrapper">
                    <ValidateLogin failed={ this.props.failed }>
                        <label className="error-label">User does not exist</label>
                    </ValidateLogin>
                    <ValidateEmail email={ this.props.email }>
                        <label className="error-label">Email is not in valid format</label>
                    </ValidateEmail>
                    <ValidatePassword password={ this.props.password }>
                        <label className="error-label">Password is required</label>
                    </ValidatePassword>
                </div>

                <div role='form' className='todoForm'>
                    <input 
                        type="text" 
                        placeholder="Email" 
                        className="txt" 
                        value={ this.props.email }
                        onChange={ this.props.changeEmail }
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="txt"
                        value={ this.props.password }
                        onChange={ this.props.changePassword }
                    />
                    <Submit
                        email={ this.props.email }
                        password={ this.props.password }
                        doLogin={ () => { this.props.doLogin(this.props.email, this.props.password) } }
                        text={ 'Login' }
                    >
                    </Submit>
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