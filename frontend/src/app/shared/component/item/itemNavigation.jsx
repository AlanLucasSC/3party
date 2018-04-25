import React from 'react'

export default props => {
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
                        <a className="nav-link js-scroll-trigger" href="#services">Serviços</a>
                    </li>
                    <li className="nav-item">
                        <a href="cart.html">
                            <i className="fa fa-shopping-bag fa-3x" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            )
    }
}