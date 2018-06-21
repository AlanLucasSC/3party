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

export class RenderSolicitation extends React.Component{
    constructor(props){
        super(props)

        var i = 0;
        //this.props.productSelected( '5ae1f8b73fc4ae3c39bd15ae' )
        //this.props.solicitationSelected( '5ae1f8b73fc4ae3c39bd15ae' )
        for(i = 0; i < this.props.solicitations.length; i++){
            this.props.productSelected( this.props.solicitations[i].product )
        }

        //console.log(this.props.products)

        //
    }

    render(){
        if(this.props.solicitations){
            var solicitations = this.props.solicitations.map(
                value => {
                    var date = new Date(value.date)
                    var year = date.getFullYear()
                    var month = date.getMonth() + 1
                    var day = date.getDate()
                    if(month < 10)
                        month = '0'+month
                    if(day < 10)
                        day = '0'+day
                    date = day+'/'+month+'/'+year

                    if(value.status != 'NEGADO')
                        return (
                            <ListItem style={ Card } key={ value._id }>
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">
                                        { this.props.products[ value.product ].name }
                                    </h5>
                                    <small>
                                        <Input
                                            type= { 'number' }
                                            ID={ 'price' }
                                            description={ 'Preço' }
                                            name={ 'Preço' }
                                            onChange={ () => console.log('Ba') }
                                            defaultValue= { this.props.products[ value.product ].price }
                                            className={ '' }
                                        >
                                            <span className="input-group-text" id="basic-addon1"> Preço da Solicitação </span>
                                        </Input >
                                        <Badges 
                                            type={ '' }
                                            status={ value.status }
                                            style={ Margin }
                                            readonly
                                        > { value.status } </Badges>
                                        <Badges 
                                            type={ 'button' }
                                            color={ 'outline-success' }
                                            status={ value.status }
                                            click={ () => this.props.changeStatus(value._id, 'ACEITO', $('#price').val()) }
                                            style={ Margin }
                                        > Aceitar </Badges>
                                        <Badges 
                                            type={ 'button' }
                                            color={ 'outline-danger' }
                                            status={ value.status }
                                            click={ () => this.props.changeStatus(value._id, 'NEGADO', 0.0) }
                                            style={ Margin }
                                            readonly
                                        > Cancelar </Badges>
                                    </small>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
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
    console.log(props.productAdress)
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