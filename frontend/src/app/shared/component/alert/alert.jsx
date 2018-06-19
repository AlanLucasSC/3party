import React from 'react'

export const Alert = props => {
    return (
        <div className={ "alert alert-dismissible fade show alert-"+props.color+" "+props.display } role="alert">
            { props.children }
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div> 
    )
}