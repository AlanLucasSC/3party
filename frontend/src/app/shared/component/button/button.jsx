import React from 'react'

export const Button = props => {
    return (
        <button 
            type="button" 
            className={ "btn btn-"+props.color } 
            onClick={ props.click }
            style={ props.style }
        >{ props.name }</button>
    )
} 