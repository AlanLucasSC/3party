import React from 'react'

import { ListItem } from '../event/listGroup/item'
import { Badges } from '../event/badges/badges'
import { ListGroup } from '../event/listGroup/listGroup'
import { Input } from  '../../shared/component/form/input'

const Margin = {
    marginLeft: 10+'px',
    marginRight: 10+'px',
    fontSize: 15+'px',
}

const Card = {
    fontSize: 15+'px',
    marginLeft: 10+'px',
    marginRight: 10+'px',
    marginTop: 10+'px'
}

export class Render extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        if(this.props.solicitations){
            var solicitations = this.props.solicitations.map(
                value => {
                    console.log(value.event)
                    console.log(this.props.eventId)
                    var date = new Date(value.date)
                    var year = date.getFullYear()
                    var month = date.getMonth() + 1
                    var day = date.getDate()
                    if(month < 10)
                        month = '0'+month
                    if(day < 10)
                        day = '0'+day
                    date = day+'/'+month+'/'+year

                    if(value.event === this.props.eventId)
                        return (
                            <ListItem style={ Card } key={ value._id }>
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">
                                        { this.props.products[ value.product ].name }
                                    </h5>
                                    <small>
                                        <Badges 
                                            type={ '' }
                                            status={ value.status }
                                            style={ Margin }
                                            readonly
                                        > { value.status } </Badges>
                                        <Visible status={ value.status } validate={ 'NEGADO' } >
                                            <Badges 
                                                type={ 'button' }
                                                color={ 'outline-success' }
                                                status={ value.status }
                                                click={ () => this.props.changeStatus(value._id, 'ACEITO', $('#price').val()) }
                                                style={ Margin }
                                            > Adicionar no carrinho </Badges>
                                            <Badges 
                                                type={ 'button' }
                                                color={ 'outline-danger' }
                                                status={ value.status }
                                                click={ () => this.props.deleteSolicitation(value._id) }
                                                style={ Margin }
                                                readonly
                                            > Cancelar </Badges>
                                        </Visible>
                                    </small>
                                </div>
                                <div>
                                    <Comment comment={ value.comment } />
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <p className="mb-1">{ 'Preço' }: { value.price }</p>
                                        <p className="mb-1">{ 'Data do Evento' }: { date }</p>
                                        <p className="mb-1">{ 'Quantidade' }: { value.people }</p>
                                        <p className="mb-1">{ 'Pessoas' }: { value.amount }</p>
                                    </div>
                                    <Information 
                                        information={ this.props.products[ value.product ].information } 
                                    />
                                    <Adress 
                                        productAdress={ this.props.products[ value.product ].adress }
                                    />
                                </div>
                            </ListItem>
                        )
                    else
                        return false
                }
            )
            return (
                <ListGroup >
                    { solicitations }
                </ListGroup >
            )
        } else {
            return false
        }
        
    }
}

export const Comment = props => {
    if( props.comment ){
        return (
            <p className="mb-1 h6">
                <br/>
                { 'Feedback' }: { props.comment }
                <br/>
            </p>
        )
    } else {
        return false
    }
}

export const Visible = props => {
    if( props.status !== props.validate ){
        return (
            props.children
        )
    } else {
        return false
    }
}

export const Information = props => {
    //console.log(props.information)
    var informations = props.information.map(
        value => (
            <p className="mb-1" key={ value._id } >
                { value.key }: { value.value }
            </p>
        )
    )
    return (
        <div className="col-sm-4">
            { informations }
        </div>
    )
}

export const Adress = props => {
    //onsole.log(props.productAdress)
    if(props.productAdress[0] !== undefined){
        return (
            <div className="col-sm-4">
                <p className="mb-1">{ 'Rua' }: { props.productAdress[0].street }</p>
                <p className="mb-1">{ 'Bairro' }: { props.productAdress[0].neighborhood }</p>
                <p className="mb-1">{ 'Number' }: { props.productAdress[0].number }</p>
                <p className="mb-1">{ 'Cidade' }: { props.productAdress[0].city }</p>
                <p className="mb-1">{ 'Estado' }: { props.productAdress[0].state }</p>
            </div>
        )
    } else {
        return false
    }
}