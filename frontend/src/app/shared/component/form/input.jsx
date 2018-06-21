import React from 'react'

const Margins = {
    marginRight: 10+'px'
}

const Weight = {
    weight: 10+'px'
}

export const Input = props => {
    console.log(props.value)
    console.log(props.defaultValue)
    if(props.value != undefined){
        return (
            <div 
                className={ "input-group mb-3 "+props.className } 
                id={ props.ID } 
                style={ Margins }
            >
                <input
                    type={ props.type } 
                    className="form-control"
                    value={ props.value }
                    placeholder={ props.name } 
                    id={ props.id }  
                    aria-describedby="basic-addon1"
                    onChange={ props.onChange }
                    style={ Weight }
                />
                <div className="input-group-append">
                   { props.children }
               </div>
            </div>
        )
    }
    if(props.defaultValue){
        return (
            <div 
                className={ "input-group mb-3 "+props.className } 
                id={ props.ID } 
                style={ Margins }
            >
                <input 
                    type={ props.type } 
                    id={ props.id } 
                    className="form-control"
                    defaultValue={ props.defaultValue }
                    placeholder={ props.name } 
                    aria-describedby="basic-addon1"
                    onChange={ props.onChange }
                    style={ Weight }
                />
                <div className="input-group-append">
                   { props.children }
               </div>
            </div>
        )
    }

    return false
} 