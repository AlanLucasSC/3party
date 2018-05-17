import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import { products } from '../shared/store/effects/service/service'
import { ItemList } from '../shared/component/item/itemList'

import { product, bgGray } from './style.jsx'

//Mudar o Portifolio em um metodo que busca as categorias

class Service extends React.Component{
    constructor(props){
        super(props)

        this.item = this.item.bind(this)
    }

    item(){
        var cont = 1;
        var info = this.props.type
        console.log(info)
    }

    render(){
        this.props.products()
        return (
            <section>
                <div className="container" id="portfolio">
                    <div className="row">
                        <div className="col-lg-12 ">
                            <h2 className="section-heading text-uppercase">Produtos</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row " >
                      <div className="col-md-3 filtro">
                        <div className="form-group">
                          <label htmlFor="exampleFormControlSelect2">Tipo</label>
                          <select multiple className="form-control" id="exampleFormControlSelect2">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                        <hr/>
                        <div className="form-group">
                          <label htmlFor="formControlRange">Preço</label>
                          <input min="0" max="100000" type="range" className="form-control-range" id="formControlRange"/>
                        </div>
                      </div>
                      

                      <div className="col-md-9" style={ bgGray }>
                        <div className="row">
                            <div className="col-md-4 col-sm-5" style={ product }>
                              <div className="portfolio-item">
                                  <div className="portfolio-link">
                                      <div className="portfolio-hover">
                                          <div className="portfolio-hover-content">
                                          </div>
                                      </div>
                                      <img className="img-fluid" src="http://localhost:3003/assets/img/thumbnail.jpg" alt=""/>
                                  </div>
                                  <div className="portfolio-caption">
                                      <h4>Buffet para Festas</h4>
                                      <p className="text-muted">Espaço Familia Feliz Fest</p>
                                      <p> Corumba </p>
                                      <p className="text-right"> R$ 10,00 </p>
                                  </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-5" style={ product }>
                              <div className="portfolio-item">
                                  <div className="portfolio-link">
                                      <div className="portfolio-hover">
                                          <div className="portfolio-hover-content">
                                          </div>
                                      </div>
                                      <img className="img-fluid" src="http://localhost:3003/assets/img/buffet.jpg" alt=""/>
                                  </div>
                                  <div className="portfolio-caption">
                                      <h4>Buffet para Festas</h4>
                                      <p className="text-muted">Espaço Familia Feliz Fest</p>
                                      <p> Corumba </p>
                                      <p className="text-right"> R$ 10,00 </p>
                                  </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-5" style={ product }>
                              <div className="portfolio-item">
                                  <div className="portfolio-link">
                                      <div className="portfolio-hover">
                                          <div className="portfolio-hover-content">
                                          </div>
                                      </div>
                                      <img className="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt=""/>
                                  </div>
                                  <div className="portfolio-caption">
                                      <h4>Buffet para Festas</h4>
                                      <p className="text-muted">Espaço Familia Feliz Fest</p>
                                      <p> Corumba </p>
                                      <p className="text-right"> R$ 10,00 </p>
                                  </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-5" style={ product }>
                              <div className="portfolio-item">
                                  <div className="portfolio-link">
                                      <div className="portfolio-hover">
                                          <div className="portfolio-hover-content">
                                          </div>
                                      </div>
                                      <img className="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt=""/>
                                  </div>
                                  <div className="portfolio-caption">
                                      <h4>Buffet para Festas</h4>
                                      <p className="text-muted">Espaço Familia Feliz Fest</p>
                                      <p> Corumba </p>
                                      <p className="text-right"> R$ 10,00 </p>
                                  </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-5" style={ product }>
                              <div className="portfolio-item">
                                  <div className="portfolio-link">
                                      <div className="portfolio-hover">
                                          <div className="portfolio-hover-content">
                                          </div>
                                      </div>
                                      <img className="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt=""/>
                                  </div>
                                  <div className="portfolio-caption">
                                      <h4>Buffet para Festas</h4>
                                      <p className="text-muted">Espaço Familia Feliz Fest</p>
                                      <p> Corumba </p>
                                      <p className="text-right"> R$ 10,00 </p>
                                  </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-5" style={ product }>
                              <div className="portfolio-item">
                                  <div className="portfolio-link">
                                      <div className="portfolio-hover">
                                          <div className="portfolio-hover-content">
                                          </div>
                                      </div>
                                      <img className="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt=""/>
                                  </div>
                                  <div className="portfolio-caption">
                                      <h4>Buffet para Festas</h4>
                                      <p className="text-muted">Espaço Familia Feliz Fest</p>
                                      <p> Corumba </p>
                                      <p className="text-right"> R$ 10,00 </p>
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
    products: state.service.products,
    type: state.service.type
})

//Actions
const mapDispatchToProps = dispatch => bindActionCreators({
    products
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Service)