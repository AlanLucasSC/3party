import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Badges } from '../list/event/badges/badges'

//Effects
import { contract } from '../shared/store/effects/app/app'

//Actions
import { redirect } from '../shared/store/actions/app/app'


const Margin = {
    marginTop: 10+'px'
}

class ContractVendor extends React.Component{
    constructor(props){
        super(props)

        console.log(this.props.contractAccept)

        if(this.props.contractAccept === 'ACEITO'){
            this.props.redirect('', 'VENDOR')
        }
    }

    render(){
        return (
            <section>
                <div className="container">
                    <label><h4>CONTRATO DE USO DA PLATAFORMA</h4></label>
                    <br/>
                    <div className="form-control" id="exampleFormControlTextarea1" rows="25">
                        <h6> SERVIÇOS E SUAS EXECUÇÕES </h6>
                        &nbsp;&nbsp;&nbsp; 

                        <h6>PAGAMENTO</h6>
                        &nbsp;&nbsp;&nbsp; 
                        
                        <h6>DO PRAZO</h6>
                        &nbsp;&nbsp;&nbsp; O presente fornecedor de serviço/produto deverá obrigatoriamente depois do pagamento de alguma solicitação entregar o produto/serviço na data agendada. Se não, houverá penalidades. 
                    </div>
                    <div className="text-right">
                        <Badges
                            type={ 'button' }
                            color={ 'outline-info' }
                            click={ () => this.props.contract( this.props.id ) }
                            style={ Margin }
                        > Aceito os termos </Badges>
                    </div>
                </div>
            </section>
        )
    }
}

//State
const mapStateToProps = state => ({
    id: state.login.user.data._id,
    contractAccept: state.login.user.data.contract
})

//Actions
const mapDispatchToProps = dispatch => bindActionCreators({
    contract,
    redirect
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ContractVendor)