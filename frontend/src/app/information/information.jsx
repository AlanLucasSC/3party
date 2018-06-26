//Third Party
import React from 'react'

//Appliction file
import Header from '../shared/component/header/header'
import Service from './service/service'
import PortfolioGrid from './portfolioGrid/portfolioGrid'
import About from './about/about'
import Contact from './contact/contact'
import Modal from './modal/modal'
import Chat from '../shared/component/chatBot/Chat'

const FooterDropUp = {
    position: 'fixed',
    left: 0,
    bottom: 60+'px',
    width: 98+'%',
    color: 'white',
    textAlign: 'right',
    marginLeft: 70+'%',
    display: 'none'
}

const Footer = {
    position: 'fixed',
    left: 0,
    bottom: 5,
    width: 98+'%',
    color: 'white',
    textAlign: 'right',
    marginLeft: 90+'%'
}

const ToogleChat = () => {
    $('#drop').toggle()
}

export default props => (
    <div>
        <Header />
        <br/>
        <br/>
        <br/>
        <div className="btn-group dropup" style={ Footer }>
          <button type="button" className="btn btn-secondary dropdown-toggle" onClick={ ToogleChat }>
            Ajuda
          </button>
        </div>
        <div id="drop" style={ FooterDropUp }>
          <Chat />
        </div>
        <Modal />
    </div>
)

/*

Antigo
export default props => (
    <div>
        <Header />
        <Service />
        <PortfolioGrid />
        <About />
        <Contact />
        <Modal />
    </div>
)

*/