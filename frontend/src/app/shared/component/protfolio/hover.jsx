import React from 'react'

export const Hover = props => {
    return (
        <div className="portfolio-link">
            <div className="portfolio-hover" onClick={ props.click }>
                <div className="portfolio-hover-content">
                    <i className="fa fa-handshake-o text-white fa-3x" aria-hidden="true"></i>
                </div>
            </div>
            <img className="img-fluid" src={ props.src } alt=""/>
        </div>
    )
}