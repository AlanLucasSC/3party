import React from 'react'

export const Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" >
            <h1> { props.name } </h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target={ "#"+props.ID } aria-controls={ props.ID } aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            { props.children }
        </nav>
    )
}