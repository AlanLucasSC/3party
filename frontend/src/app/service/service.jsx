import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//Effects
import { products } from '../shared/store/effects/service/service'
import { createSolicitation } from '../shared/store/effects/service/solicitation'

//Actions
import { redirect } from '../shared/store/actions/app/app'

//Css
import { product, bgGray } from './style.jsx'

//Dumb component
import { Types } from '../shared/component/render/types'
import { Products } from '../shared/component/render/products'
import { ItemList } from '../shared/component/item/itemList'

//Mudar o Portifolio em um metodo que busca as categorias

class Service extends React.Component{
    constructor(props){
        super(props)

        if(this.props.userType !== 'USER'){
            this.props.redirect('/', this.props.userType)
        }

        this.chosen = this.chosen.bind(this)
        this.props.products()
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
                            <Products
                                event = { this.props.event }
                                createSolicitation={ this.props.createSolicitation } 
                                products={ this.props.product }
                            />
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
    userType: state.app.userType,
    event: state.event.selectedID
})

//Actions
const mapDispatchToProps = dispatch => bindActionCreators({
    products,
    redirect,
    createSolicitation
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Service)