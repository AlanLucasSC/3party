import React from 'react'

export class Submit extends React.Component{
    constructor(props){
        super(props)
        this.validateSubmit = this.validateSubmit.bind(this)
    }

    validateSubmit(){
        var elements = $('.'+this.props.validate);
        var cont = 0;
        elements.each(function(){
            if(!$(this).hasClass('true')){
                $(this).addClass('is-invalid');
                cont++;
            }
        });
    
        if(cont == 0){
            this.props.register()
        }
        cont = 0;
    }


    render(){
        return (
            <div className="submit">
                <button 
                    type="submit" 
                    id="submit" 
                    className="btn btn-outline-warning"
                    onClick={ this.validateSubmit }
                >Cadastrar</button>
                <label><input type="checkbox"/> Lembre-me</label>
            </div>
        )
    }
}

