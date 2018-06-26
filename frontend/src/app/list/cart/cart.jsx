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

//Effects
import { solicitationsUser, productSelected, solicitationSelected, changeStatus } from '../../shared/store/effects/solicitation/solicitation'

import { Render } from './render'

const Margin = {
    marginLeft: 10+'px',
    marginRight: 10+'px',
}

const Card = {
    fontSize: 15+'px',
}

class Cart extends React.Component{
    constructor(props){
        super(props)

        if(this.props.user)
            this.props.solicitationsUser( this.props.user._id )

        var i = 0

        for(i = 0; i < this.props.solicitations.length; i++){
            this.props.productSelected( this.props.solicitations[i].product )
        }
    }

    render(){
        return(
            <section>
                <Navbar name="Solicitação" ID="solicitation">
                    <Collapse ID="evento">
                        <List>
                            <Item URL={ '' } active> Todos </Item>
                        </List>
                    </Collapse>
                </Navbar>
                <hr style={ Margin }/>
                <div className="row">
                    <div className="col-md-8">
                        <Render solicitations={ this.props.solicitations } products={ this.props.products }/>
                    </div>
                </div>
            </section>
        )
    }
}

//State
const mapStateToProps = state => ({
    user: state.login.user.data,
    solicitations: state.solicitation.solicitations,
    products: state.solicitation.products
})

//Actions
const mapDispatchToProps = dispatch => bindActionCreators({
    solicitationsUser,
    productSelected
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cart)