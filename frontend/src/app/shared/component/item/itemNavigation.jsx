import React from 'react'

import { Splint } from '../splintDropdown/splint'
import { Button } from '../button/button'
import { A } from '../button/a'
import { ItemDropdown } from '../item/itemDropdown'
import { ItemSelect } from './itemSelect'

//Styles
const Margin = {
    marginTop: 10+'px',
    marginRight: 20+'px',
}

const Select = {
    marginRight: 10+'px',
    marginLeft: 10+'px',
}

const FontSize = {
    fontSize: 15+'px',
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
        
        case 'USER': {
            return (
                <ul className="navbar-nav text-uppercase ml-auto">
                    <li className="nav-item">
                        <Splint 
                            style={ Margin } 
                            name={ props.selectedName } 
                            color="outline-warning"
                        >
                            <div style={ Select } className="form-group">
                                <ItemSelect 
                                    events={ props.events }
                                    change={ (e) => {
                                        console.log(e.target.options[e.target.selectedIndex].id)
                                        console.log(e.target.options[e.target.selectedIndex].text)
                                        console.log(e.target.options[e.target.selectedIndex].value)
                                        props.changeSelected(e.target.options[e.target.selectedIndex].id, e.target.options[e.target.selectedIndex].text, e.target.options[e.target.selectedIndex].value)
                                    } }
                                />
                            </div>
                            <div className="dropdown-divider"></div>
                            <ItemDropdown URL={ 'event' } > Meus Eventos </ItemDropdown>                            
                        </Splint>
                    </li>
                    <li className="nav-item">
                        <A 
                            style={ Margin } 
                            color="outline-warning" 
                            URL={ 'service' } 
                            name="Catálogo" 
                        />
                    </li>
                    <li className="nav-item">
                        <a href="cart.html">
                            <i className="fa fa-shopping-bag fa-2x" style={ Margin } aria-hidden="true"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" onClick={ props.logout }>
                            <i className="fa fa-sign-out fa-2x" style={ Margin } aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            )
        }

        case 'VENDOR': {
            return (
                <ul className="navbar-nav text-uppercase ml-auto">
                    <li className="nav-item">
                        <A 
                            style={ Margin } 
                            color="outline-warning" 
                            URL={ 'vendor/service' } 
                            name="Catálogo" 
                        />
                    </li>
                    <li className="nav-item">
                        <A 
                            style={ Margin } 
                            color="outline-warning" 
                            URL={ 'solicitation' } 
                            name="Solicitações" 
                        />
                    </li>
                    <li>
                        <A 
                            style={ Margin } 
                            color="outline-warning" 
                            URL={ 'vendor/profile' } 
                            name="Usuário" 
                        />
                    </li>
                    <li className="nav-item">
                        <a href="#" onClick={ props.logout }>
                            <i className="fa fa-sign-out fa-2x" style={ Margin } aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            )
        }

        default: {
            console.log(props.userType)
            return false
        }
    }
}

function Teste() {
    console.log('Funcionou')
}