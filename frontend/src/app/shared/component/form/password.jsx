import React from 'react'

export class Password extends React.Component{

    constructor(props){
        super(props)
        this.validatePassword = this.validatePassword.bind(this)
    }

    validatePassword(){
        const element = $('#pwd')
        
        if(this.props.password.length <= 5){
            element.removeClass('true');
            element.addClass('is-invalid');
        }
        else{
            element.removeClass('is-invalid');
            element.addClass('true');
        }
    }

    render(){
            return (
                <div className="form-group">
                    <label htmlFor="pwd">Senha:</label>
                    <input 
                        type="password" 
                        className={ "form-control "+this.props.validate }
                        id="pwd"
                        value={ this.props.password }
                        onChange={ this.props.changePassword }
                        onBlur={ this.validatePassword }
                    />
                    <div className="invalid-feedback">
                        Por favor, insira uma combinação de pelo menos seis números, letras, sinais de pontuação e símbolos
                    </div>
                </div>
            )
    }
}