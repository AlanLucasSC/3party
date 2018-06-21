import React from 'react'

import { Hover } from '../protfolio/hover'
import { Badges } from '../../../list/event/badges/badges'

const invisible = {
    display: 'none'
}

const pointer = {
    cursor: 'pointer'
}

const inline = {
    display: 'inline'
}

export const Products = props => {
    const URL = "http://localhost:4009/public/img/";

    var fade = function(id){
        $('#caption_'+id).fadeToggle()
        $('#form_'+id).fadeToggle()
    }

    var Solicitation = id => {
        //console.log( $('#vendor_'+id).val() )
        //console.log( $('#product_'+id).val() )
        //console.log( $('#amount_'+id).val() )
        //console.log( $('#people_'+id).val() )

        var vendor = $('#vendor_'+id).val()
        var product = $('#product_'+id).val()
        var amount = $('#amount_'+id).val()
        var people = $('#people_'+id).val()
        var type = $('#Tipo_'+id).text()

        if(vendor === undefined){
            console.log(vendor )
            alert('Crie um evento para conseguir solicitar um produto/serviço')
        } else {
            props.createSolicitation(vendor, product, amount, people, props.event, type, props.eventDate)
        }
    }

    if(props.products){
        //console.log(props.products)

        const products = props.products.map(
            value => {
                var adress = ''
                var image = 'foto.jpg'
                if(value.adress[0]){
                    adress = ' - '+value.adress[0].city
                    adress += ', '+value.adress[0].state
                }
                if(value.image){
                    image = value.image;
                }
                var products = (
                    <div key={ value._id } className="col-md-4 col-sm-6"  >
                        <div className="portfolio-item">
                            <Hover click={ () => { fade( value._id ) } } src={ URL+image }/>
                            <div className="portfolio-caption" id={ "form_"+value._id } style={ invisible }>
                                <input type="text" className={ 'd-none' } defaultValue={ value.vendor_id } id={ 'vendor_'+value._id }/>                               
                                <input type="text" className={ 'd-none' } defaultValue={ value._id } id={ 'product_'+value._id }/>                               
                                <p className="text-right"> <i className="fa fa-times fa-lg" style={ pointer } aria-hidden="true" onClick={ () => { fade( value._id ) } }></i> </p>
                                <label htmlFor="amount">Quantidade de produtos</label>
                                <input type="number" defaultValue={ 0 } min={ 0 } className="form-control" id={ "amount_"+value._id } placeholder="Coloque a quantidade que deseja"/>
                                <label htmlFor="amount">Quantidade de Pessoas</label>
                                <input type="number" defaultValue={ 0 } min={ 0 } className="form-control" id={ "people_"+value._id } placeholder="Coloque a quantidade que deseja"/>
                                <Badges 
                                    type={ 'button' }
                                    color={ 'outline-success' }
                                    style={ {
                                        marginTop: 10+'px'
                                    } }
                                    click={ () => Solicitation( value._id ) }
                                > Solicitar </Badges>
                            </div>
                            <div className="portfolio-caption" id={ "caption_"+value._id }>
                                <h4> { value.name } </h4>
                                <p className="text-muted">{ value.vendor }{ adress }</p>
                                <p className="text-right"> R$ { value.price } </p>
                                <Information id={ value._id } information={ value.information }/>
                            </div>
                        </div>
                    </div>
                )
                return products;
            }
        )

        return (
            <div className="row">
                { products }
            </div>
        )
    } 

    //console.log('Não tem produtos')
    return false
}

export const Information = props => {
    //console.log(props.information)
    var informations = props.information.map(
        value => (
            <div key={ value._id } >
                { value.key }: <p style={ inline } id={ value.key+'_'+props.id }>{ value.value }</p>
            </div>
        )
    )
    return (
        <div>
            { informations }
        </div>
    )
}