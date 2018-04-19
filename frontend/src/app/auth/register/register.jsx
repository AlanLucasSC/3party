import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeEmail, changePassword, changeName } from '../../shared/store/actions/auth/register'
import { register } from '../../shared/store/effects/auth/register'

import { Email, Password, Name, Submit } from '../../shared/component/form'
import { Success, Error } from '../../shared/component/alert'
 
class Register extends React.Component{
    constructor(props){
        super(props)

        this.validate = this.validate.bind(this)
    }

    validate(){
        const valPassword = 6
        const valName = 0
    }

    

    render(){
        return (
            <div className="modal fade" id="myModal" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <button type="button" className="btn btn-default" data-dismiss="modal">
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </button>
                        <div className="modal-body">
                            <Success if={ this.props.if }>
                                Cadastro
                            </Success>
                            <Error if={ this.props.failed }>
                                Cadastro
                                <br/>
                                Por favor, tente cadastrar denovo
                            </Error>
                            <Name
                                name={ this.props.name }
                                changeName={ this.props.changeName }
                                validate="register"
                            />
                            <Email 
                                email={ this.props.email }
                                changeEmail={ this.props.changeEmail }
                                validate="register"
                            />
                            <Password
                                password={ this.props.password }
                                changePassword={ this.props.changePassword }
                                validate="register"
                            />
                            <Submit 
                                validate="register"
                                register={ () => { 
                                    this.props.register(this.props.name, this.props.email, this.props.password) 
                                } }
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

//State
const mapStateToProps = state => ({
    name: state.register.name,
    email: state.register.email,
    password: state.register.password,
    if: state.register.register,
    failed: state.register.failed
})

//Actions
const mapDispatchToProps = dispatch => bindActionCreators({
    changeName,
    changeEmail, 
    changePassword,
    register
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Register)