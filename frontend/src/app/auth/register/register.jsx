import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeEmail, changePassword, changeName } from '../../shared/store/actions/auth/register'
import { register } from '../../shared/store/effects/auth/register'

class Register extends React.Component{
    constructor(props){
        super(props);
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
                            <div className="form-group">
                                <label htmlFor="email">Usuário:</label>
                                <input 
                                    type="user" 
                                    className="form-control" 
                                    id="user"
                                    value={ this.props.name }
                                    onChange={ this.props.changeName }
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="email"
                                    value={ this.props.email }
                                    onChange={ this.props.changeEmail }
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pwd">Senha:</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="pwd"
                                    value={ this.props.password }
                                    onChange={ this.props.changePassword }
                                />
                            </div>
                            <div className="checkbox">
                                <button 
                                    type="submit" 
                                    id="submit" 
                                    className="btn btn-outline-warning"
                                    onClick={ () => { 
                                        this.props.register(this.props.name, this.props.email, this.props.password) 
                                    } }
                                >Cadastrar</button>
                                <label><input type="checkbox"/> Lembre-me</label>
                            </div>
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