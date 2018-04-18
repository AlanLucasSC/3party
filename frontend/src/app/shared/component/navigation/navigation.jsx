import React from 'react'

export default props => (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top header" id="mainNav">
    	<img src=""/>
        <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">Terceira Festa</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fa fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
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
                        <a className="nav-link js-scroll-trigger" href="#contact">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="modal" data-target="#myModal" href="#register">Cadastro</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)