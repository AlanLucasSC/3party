import React from 'react'

export const ListItem = props => {
    return (
        <li className="d-flex justify-content-between align-items-center">
            <a style={ props.style } className="list-group-item list-group-item-action flex-column align-items-start">
                { props.children }
            </a>
        </li>
    )
}