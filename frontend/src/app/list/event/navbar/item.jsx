import React from 'react'

export const Item = props => {
    if(props.active){
        return (
            <li className="nav-item active">
                <a className="nav-link" href="#">
                    { props.children } 
                    <span className="sr-only">(current)</span>
                </a>
            </li>
        )
    }
    else {
        return (
            <li className="nav-item">
                <a className="nav-link" href="#">
                    { props.children }
                </a>
            </li>
        )
    }
}