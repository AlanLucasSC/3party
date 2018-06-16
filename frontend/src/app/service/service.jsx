import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import { products } from '../shared/store/effects/service/service'
import { ItemList } from '../shared/component/item/itemList'

import { product, bgGray } from './style.jsx'

//My Class
import { Types } from '../shared/component/render/types'
import { Products } from '../shared/component/render/products'

//Mudar o Portifolio em um metodo que busca as categorias

class Service extends React.Component{
    constructor(props){
        super(props)

        this.chosen = this.chosen.bind(this)
        this.props.products()
        /*
        const type = this.props.types.map(
            (value) => <option>{value}</option>
        )
        */
    }

    chosen(){
        var cont = 1;
        var info = this.props.types
    }

    render(){
        return (
            <section>
                <div className="container" id="portfolio">
                    <div className="row">
                        <div className="col-lg-12 ">
                            <h2 className="section-heading text-uppercase">Produtos</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row " >
                        <div className="col-md-12 filtro">
                            <div className="row">
                                <div className="form-group col-sm-3">
                                    <label htmlFor="exampleFormControlSelect2">Tipo</label>
                                    <Types type={ this.props.types }/>
                                </div>
                                <div className="form-group col-sm-3">
                                    <label htmlFor="formControlRange">Preço</label>
                                    <input min="0" max="100000" type="range" className="form-control-range" id="formControlRange"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12" style={ bgGray }>
                            <Products products={ this.props.product }/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

//State
const mapStateToProps = state => ({
    product: state.service.products,
    types: state.service.type,
    email: state.login.user.email,
})

//Actions
const mapDispatchToProps = dispatch => bindActionCreators({
    products
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Service)