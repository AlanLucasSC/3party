//Third Party
import React from 'react'

//Appliction file
import Header from '../shared/component/header/header'
import Service from './service/service'
import PortfolioGrid from './portfolioGrid/portfolioGrid'
import About from './about/about'
import Contact from './contact/contact'
import Modal from './modal/modal'

export default props => (
    <div>
        <Header />
        <Service />
        <Contact />
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