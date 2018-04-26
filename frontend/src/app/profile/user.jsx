import React from 'react'
import { connect } from 'react-redux'

import Link from '../shared/component/button/link'
import Card from '../shared/component/card/card'


class UserProfile extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <section className='bg-light' id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h5 className="section-heading text-uppercase">Olá { this.props.name }</h5>
                            <br/>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-sm-4">
                            <Link url="#"> Início </Link>
                            <Link url="#"> Cancelamento </Link>
                            <Link url="#"> Meus Eventos </Link>
                            <Link url="#"> Meus Desejos </Link>
                            <Link url="#"> Informações do Perfil </Link>
                            <Link url="#"> Cartões e Vales </Link>
                            <Link url="#"> Sair </Link>
                        </div>
                    
                        <div className="col-sm-4">
                            <Card url="#" icon="shopping-bag"> Meus Eventos </Card>
                            <Card url="#" icon="heart"> Meus Desejos </Card>
                        </div>    
                
                        <div className="col-sm-4" >
                            <Card url="#" icon="user-circle-o"> Informações do Perfil </Card>
                            <Card url="#" icon="credit-card"> Cartões e Vales </Card>
                        </div>    
                    
                    </div>
                </div>
            </section>
        )
    }
}

//State
const mapStateToProps = state => ({
    name: state.login.user.data.name,
    email: state.login.user.data.email,
    information: state.login.user.data.information,
})

export default connect(mapStateToProps)(UserProfile)