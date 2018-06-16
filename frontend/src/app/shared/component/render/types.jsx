import React from 'react'

export const Types = props => {
    if(props.type){
        var cont = 1;
        const type = props.type.map(
            value => <option key={ value } value={ value }>{ value }</option>
        )
        return (
            <select size="3" className="form-control" id="exampleFormControlSelect2">
                { type }
            </select>
        )
    }

    return false
}