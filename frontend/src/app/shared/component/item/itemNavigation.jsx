import React from 'react'

import { Splint } from '../splintDropdown/splint'
import { Button } from '../button/button'
import { A } from '../button/a'
import { ItemDropdown } from '../item/itemDropdown'

//Styles
const Icon = {
    marginTop: 10+'px',
    marginRight: 20+'px'
}

export default props => {
    var URL = '/#/'
    switch(props.userType){
        case 'VISITOR':
            return (
                <ul className="navbar-nav text-uppercase ml-auto">
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#services">Serviços</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#about">Sobre</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="modal" data-target="#loginModal" href="#login">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="modal" data-target="#registerModal" href="#register">Cadastro</a>
                    </li>
                </ul>
            )
        
        case 'USER': 
            return (
                <ul className="navbar-nav text-uppercase ml-auto">
                    <li className="nav-item">
                        <Splint 
                            style={ Icon } 
                            name="EVENTOS" 
                            color="outline-warning"
                        >
                            <ItemDropdown URL={ 'service' } > Outros </ItemDropdown>
                            <div className="dropdown-divider"></div>
                            <ItemDropdown URL={ 'event' } > Meus Eventos </ItemDropdown>                            
                        </Splint>
                    </li>
                    <li className="nav-item">
                        <A 
                            style={ Icon } 
                            color="outline-warning" 
                            URL={ 'service' } 
                            name="Serviços" 
                        />
                    </li>
                    <li className="nav-item">
                        <a href="cart.html">
                            <i className="fa fa-shopping-bag fa-2x" style={ Icon } aria-hidden="true"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" onClick={ props.logout }>
                            <i className="fa fa-sign-out fa-2x" style={ Icon } aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            )
    }
}

function Teste() {
    console.log('Funcionou')
}