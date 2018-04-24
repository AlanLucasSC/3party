import React from 'react'

export class Name extends React.Component{

    constructor(props){
        super(props)
        this.validateName = this.validateName.bind(this)
    }

    validateName(){
        const element = $('#user'+this.props.validate)
        
        if(this.props.name === ''){
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
                    <label htmlFor="user">Usuário:</label>
                    <input 
                        type="user" 
                        className={ "form-control "+this.props.validate }
                        id={ "user"+this.props.validate }
                        value={ this.props.name }
                        onChange={ this.props.changeName }
                        onBlur={ this.validateName }
                    />
                    <div className="invalid-feedback">
                        Por favor, insira um nome de usuário
                    </div>
                </div>
            )
    }
}