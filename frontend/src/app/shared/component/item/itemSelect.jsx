import React from 'react'

export const ItemSelect = props => {
    if(props.events){
        const events = props.events.map(
            value => {
                switch(value.status){
                    case 'ABERTO':
                        return (
                            <option 
                                key={ value._id } 
                                value={ value.date  }
                                id={ value._id }
                            > { value.name } </option>
                        )
                    
                    case 'FECHADO':
                        return false
                }
            }
        )
        return (
            <select 
                className="form-control" 
                id="exampleFormControlSelect1"
                onChange={ props.change }
            >
                { events }               
            </select>
        )
    }
    else
        return false
}