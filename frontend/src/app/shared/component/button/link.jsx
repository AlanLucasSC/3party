import React from 'react'

export default props => (
    <a className="btn btn-ok btn-lg btn-block" href={ "#"+props.url } role="button">
        { props.children }
    </a>
)