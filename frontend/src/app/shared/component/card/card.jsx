import React from 'react'

const cardLink = {
    fontSize: 60+'px',
    color: 'black'
}

const cardTitle = {
    color: 'black'
}

const card = {
    marginTop: 10+'px'
}

export default props => (
    <div className="card"  style={ card }  >
        <a href={ props.url }>
            <div className="card-body">
                <i className={ "fa fa-"+props.icon } style={ cardLink }></i>
                <br/>
                <br/>
                <h5 className="service-heading" style={ cardTitle }>{ props.children }</h5> 
            </div>
        </a>
    </div>
)