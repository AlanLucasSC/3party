import React from 'react'

const Margins = {
    marginRight: 10+'px'
}

const Weight = {
    weight: 10+'px'
}

export const Input = props => {
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