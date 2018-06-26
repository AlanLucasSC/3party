import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Navbar } from '../event/navbar/navbar'
import { Collapse } from '../event/navbar/collapse'
import { List } from '../event/navbar/list'
import { Item } from '../event/navbar/item'
import { Button } from '../../shared/component/button/button'
import { Input } from  '../../shared/component/form/input'
import { Column } from '../../shared/component/column/column'
import { Alert } from '../../shared/component/alert/alert'

import { RenderSolicitation } from './renderSolicitation'

//Effects
import { solicitationsVendor, productSelected, solicitationSelected, changeStatus } from '../../shared/store/effects/solicitation/solicitation'

const Margin = {
    marginLeft: 10+'px',
    marginRight: 10+'px',
}

const Card = {
    fontSize: 15+'px',
}


class Solicitation extends React.Component{
    constructor(props){
        super(props)

        if( this.props.user )
            this.props.solicitationsVendor( this.props.user.vendor )
    }

    render(){
        var products
        if( this.props.products ){
            products = this.props.products
        }
        return (
            <section>
                <Navbar name="Solicitação" ID="solicitation">
                    <Collapse ID="evento">
                        <List>
                            <Item URL={ '' } active> Todos </Item>
                        </List>
                    </Collapse>
                </Navbar>
                <hr style={ Margin }/>
                <RenderSolicitation 
                    Card={ Card } 
                    solicitations={ this.props.solicitations }
                    productSelected={ this.props.productSelected }
                    products={ products }
                    solicitationSelected={ this.props.solicitationSelected }
                    events={ this.props.events }
                    changeStatus={ this.props.changeStatus }
                />
            </section>
        )
    }
}

//State
const mapStateToProps = state => ({
    user: state.login.user.data,
    solicitations: state.solicitation.solicitations,
    products: state.solicitation.products,
    events: state.solicitation.events
})

//Actions
const mapDispatchToProps = dispatch => bindActionCreators({
    solicitationsVendor,
    productSelected,
    solicitationSelected,
    changeStatus
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Solicitation)