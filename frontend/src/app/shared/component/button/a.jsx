import React from 'react'

export const A = props => {
    return (
        <a 
            className={ "btn btn-"+props.color }
            href={ "#"+props.URL }
            style={ props.style }
        >
        { props.name }</a>
    )
}