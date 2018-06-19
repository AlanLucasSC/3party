import React from 'react'

const textButton = {
    color: 'white'
}

export const Splint = (props) => {
    return (
        <div className="btn-group" style={ props.style }>
            <button type="button" className={ "btn btn-"+props.color } >{ props.name }</button>
            <button type="button" className={ "btn btn-"+props.color+" dropdown-toggle dropdown-toggle-split" } data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="sr-only">Toggle Dropdown</span>
            </button>
            <div className="dropdown-menu">
                { props.children }
            </div>
        </div>
    )
}