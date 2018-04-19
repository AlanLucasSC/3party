import React from 'react'

export class Email extends React.Component{

    constructor(props){
        super(props)
        this.validateEmail = this.validateEmail.bind(this)
    }

    validateEmail(){
        const valEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const element = $('#email')
        if(!valEmail.test(this.props.email)){
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
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        className={ "form-control "+this.props.validate }
                        id="email"
                        value={ this.props.email }
                        onChange={ this.props.changeEmail }
                        onBlur={ this.validateEmail }
                    />
                    <div className="invalid-feedback">
                        Por favor, insira um email valido
                    </div>
                </div>
            )
    }
}