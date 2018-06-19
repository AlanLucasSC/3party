import React from 'react'

export default props => (
    <a className="list-group-item list-group-item-action" id={ props.id } data-toggle="list" href={ "#"+url } role="tab" aria-controls="home">
        { props.children }
    </a>
)