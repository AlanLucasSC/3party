import React from 'react'

export const Collapse = props => {
    return (
        <div className="collapse navbar-collapse" id={ props.ID }>
            { props.children }
        </div>
    )
}