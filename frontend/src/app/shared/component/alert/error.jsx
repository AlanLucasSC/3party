import React from 'react'

export const Error = props => {
    if(props.if == true){
        return (
            <div className="alert alert-warning" role="alert">
                Houve algum problema no { props.children }
            </div>
        )
    }
    else{
        return null
    }
}