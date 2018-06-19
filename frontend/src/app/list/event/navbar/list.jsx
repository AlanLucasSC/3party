import React from 'react'

export const List = props => {
    return (
        <ul className="navbar-nav mr-auto">
            { props.children }
        </ul>
    )
}