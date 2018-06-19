import React from 'react'

const Pointer = {
    cursor: 'pointer',
}


export const ItemDropdown = props => {
    if(props.click){
        return (
            <a 
                className="dropdown-item"  
                onClick={ props.click } 
                style={ Pointer }
            > { props.children } </a>
        )
    } else {
        return (
            <a 
                className="dropdown-item" 
                href={ '#/'+props.URL }
                style={ Pointer }
            > { props.children } </a>
        )
    }
}