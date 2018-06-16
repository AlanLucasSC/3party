import React from 'react'

const invisible = {
    display: 'none'
}

const pointer = {
    cursor: 'pointer'
}

export const Products = props => {
    const URL = "http://localhost:4009/public/img/";

    var teste = function(id){
        $('#caption_'+id).fadeToggle()
        $('#form_'+id).fadeToggle()
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
                            <div className="portfolio-link">
                                <div className="portfolio-hover" onClick={ () => { teste( value._id ) } }>
                                    <div className="portfolio-hover-content">
                                        <i className="fa fa-handshake-o text-white fa-3x" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src={ URL+image } alt=""/>
                            </div>
                            <div className="portfolio-caption" id={ "form_"+value._id } style={ invisible }>
                                <p className="text-right"> <i className="fa fa-times fa-lg" style={ pointer } aria-hidden="true" onClick={ () => { teste( value._id ) } }></i> </p>
                                <label htmlFor="amount">Quantidade</label>
                                <input type="number" className="form-control" id="amount" placeholder="Coloque a quantidade que deseja"/>
                            </div>
                            <div className="portfolio-caption" id={ "caption_"+value._id }>
                                <h4> { value.name } </h4>
                                <p className="text-muted">{ value.vendor }{ adress }</p>
                                <p className="text-right"> R$ { value.price } </p>
                                <Information information={ value.information }/>
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
            <p key={ value._id }>
                { value.key }: { value.value }
            </p>
        )
    )
    console.log(informations)
    return (
        <div>
            { informations }
        </div>
    )
}