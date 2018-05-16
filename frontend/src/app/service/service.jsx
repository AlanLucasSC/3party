import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import { products } from '../shared/store/effects/service/service'
import { ItemList } from '../shared/component/item/itemList'

//Mudar o Portifolio em um metodo que busca as categorias

class Service extends React.Component{
    constructor(props){
        super(props)

        this.item = this.item.bind(this)
    }

    item(){
        var cont = 1;
        var info = this.props.type
        console.log(info)
    }

    render(){
        this.props.products()
        return (
            <section>
                <div className="row">
                    <div className="col-4">
                        <div className="list-group" id="list-tab" role="tablist">
                            
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="tab-content" id="nav-tabContent">
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

//State
const mapStateToProps = state => ({
    products: state.service.products,
    type: state.service.type
})

//Actions
const mapDispatchToProps = dispatch => bindActionCreators({
    products
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Service)