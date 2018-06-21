import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Badges } from '../list/event/badges/badges'

import { 
    changeName,
    changeType,
    changePrice,
    changeAmount,
    changeDesc,
    changeImage,
    changePeople
} from '../shared/store/actions/product/product'
import { sendImage, createProduct } from '../shared/store/effects/product/product'


const Center = {
    textAlign: 'center'
}

const Margin = {
    marginTop: 10+'px'
}

class Product extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <section className="bg-light" id="portfolio">
                <div className="container">
                    <div className="row">
                        <h2>Cadastrar Produtos e Serviços</h2>
                        <div className="col-sm-12" style={ Center }>
                            
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="card">
                                        <label className="text" style={ Margin }>Foto do Produto/Serciço</label>
                                        <input 
                                            className="form-control" 
                                            id="image" 
                                            type="file" 
                                            name="Foto"
                                            onChange={ this.props.sendImage }
                                        />
                                        <br/>
                                        <h5 className="text-secondary">Descrição Geral </h5>
                                        <br/>
                                        <textarea onChange={ this.props.changeDesc } className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea> 
                                    </div>  
                                </div>
                                <div className="col-sm-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <form>
                                                <label className="text">Nome do Produto</label>
                                                <input onChange={ this.props.changeName } type="text" className="form-control" id="text" placeholder="Digite o Produto"/>
                                                <br/>
                                                <label className="text">Tipo</label>
                                                <select onChange={ this.props.changeType } id="parcelas" className="form-control">
                                                    <option value="Buffet" selected>Buffet</option>
                                                    <option value="Decoração">Decoração</option>
                                                    <option value="Bebida">Bebida</option>
                                                    <option value="Equipe de Som & Animação">Equipe de Som & Animação</option>
                                                    <option value="Fotografia">Fotografia</option>
                                                    <option value="Equipe de Segurança">Equipe de Segurança</option>
                                                    <option value="Lembranças e Artesanatos">Lembranças e Artesanatos</option>
                                                    <option value="Serviço de Confeitaria">Serviço de Confeitaria</option>
                                                    <option value="Salão de festa">Salão de festa</option>
                                                    <option value="Salão de Beleza">Salão de Beleza</option>
                                                    <option value="Animadores de Festa">Animadores de Festa</option>
                                                </select>
                                                <br/>
                                                <div className="row">
                                                    <div className="col-sm-6" style={ Center }>
                                                        <label className="text">Preço</label>
                                                        <input onChange={ this.props.changePrice } type="number" className="form-control" id="text" placeholder="Preço"/>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label className="text">Quantidade</label>
                                                        <input onChange={ this.props.changeAmount } type="number" className="form-control" id="text" placeholder="Quantidade"/>     
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label className="text">Pessoas</label>
                                                        <input onChange={ this.props.changePeople } type="number" className="form-control" id="text" placeholder="Quantidade"/>     
                                                    </div>
                                                </div>
                                                <br/>
                                                <Badges
                                                    status={ 'BUTTON' }
                                                    type={ 'button' }
                                                    color={ 'outline-success' }
                                                    click={ () => this.props.createProduct(this.props.id, this.props.image, this.props.type, this.props.price, this.props.amount, this.props.desc, this.props.name, this.props.people) }
                                                    style={ Margin }
                                                > Salvar </Badges>
                                            </form>                       
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

//State
const mapStateToProps = state => ({
    id: state.login.user.data.vendor,
    name: state.product.name,
    type: state.product.type,
    price: state.product.price,
    amount: state.product.amount,
    informations: state.product.informations,
    people: state.product.people,
    image: state.product.image,
    desc: state.product.desc
})

//Actions
const mapDispatchToProps = dispatch => bindActionCreators({
    changeName,
    changeType,
    changePrice,
    changeAmount,
    changeDesc,
    changeImage,
    changePeople,
    sendImage,
    createProduct
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Product)