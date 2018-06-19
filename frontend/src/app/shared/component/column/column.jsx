import React from 'react'

export const Column = props => {
    return (
        <div className={ 'col-'+props.column }>
            { props.children }
        </div>
    )
}