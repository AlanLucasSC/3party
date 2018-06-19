import React from 'react'

export default props => {
    if(props.click){
        return (
            <a className="btn btn-ok btn-lg btn-block" href={ "#"+props.url } role="button" onClick={ props.click }>
                { props.children }
            </a>
        )
    } else {
        return (
            <a className="btn btn-ok btn-lg btn-block" href={ "#"+props.url } role="button">
                { props.children }
            </a>
        )
    }
}