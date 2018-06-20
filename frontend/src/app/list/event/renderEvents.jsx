import React from 'react'

import { ListItem } from './listGroup/item'
import { Badges } from './badges/badges'
import { ListGroup } from './listGroup/listGroup'

const Margin = {
    marginLeft: 10+'px',
    marginRight: 10+'px',
}

const Card = {
    fontSize: 15+'px',
    marginLeft: 10+'px',
    marginRight: 10+'px',
    marginTop: 10+'px'
}

export const RenderEvents = props => {
    if(props.events){
        //console.log( props.events )
        const events = props.events.map(
            value => {
                //console.log(value)
                //console.log(value.solicitation.length)
                //console.log(value.status)
                //console.log(value.date)
                return (
                    <ListItem style={ Card } key={ value._id }>
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{ value.name }</h5>
                            <small>
                                <Badges 
                                    type={ '' }
                                    status={ value.status }
                                    style={ Margin }
                                    readonly
                                > { value.status } </Badges>
                                <Badges 
                                    type={ 'button' }
                                    color={ 'outline-info' }
                                    badge={ value.solicitation.length }
                                    click={ () => console.log('Ba') }
                                    style={ Margin }
                                > Solicitações </Badges>
                            </small>
                        </div>
                        <p className="mb-1">{ 'Data' }: { value.date }</p>
                    </ListItem>
                )
            }
        )
        console.log(events)
        return (
            <ListGroup >
                { events }
            </ListGroup >
        )
    } else {
        return false
    }
}