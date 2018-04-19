import React from 'react'

export const Success = props => {
    if(props.if == true){
        return (
            <div className="alert alert-success" role="alert">
                { props.children } feito com sucesso
            </div>
        )
    }
    else{
        return null
    }
}