import React from 'react'

export const Badges = props => {

    if(props.click)
        return (
            <button 
                type={ props.type } 
                className={ "btn btn-"+props.color } 
                onClick={ props.click }
                style={ props.style }
            >
                { props.children } <span className="badge badge-light">{ props.badge }</span>
            </button>
        )
    else
        switch(props.status){
            case 'ABERTO':
                return (
                    <button 
                        type={ props.type } 
                        className={ "btn btn-outline-success" } 
                        style={ props.style }
                        disabled
                    >
                        { props.children } <span className="badge badge-light">{ props.badge }</span>
                    </button>
                )
            
            case 'FECHADO':
                return (
                    <button 
                        type={ props.type } 
                        className={ "btn btn-outline-danger" } 
                        style={ props.style }
                        disabled
                    >
                        { props.children } <span className="badge badge-light">{ props.badge }</span>
                    </button>
                )

            default:
                return (
                    <button 
                        type={ props.type } 
                        className={ "btn btn-"+props.color } 
                        style={ props.style }
                        disabled
                    >
                        { props.children } <span className="badge badge-light">{ props.badge }</span>
                    </button>
                )
        }
            
        
}