import React from 'react'

export default props => (
    <section id="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">Sobre nós</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <ul className="timeline">
                        <li>
                            <div className="timeline-image">
                                <img className="rounded-circle img-fluid" src="assets/img/logos/thyrd.jpg" alt=""/>
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>2018/1</h4>
                                    <h4 className="subheading">Plataforma Third Party</h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted"> A plataforma possibilita que empresas no ramo de eventos publiquem seus produtos ou serviços para serem comercialializados em nosso site. </p>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                                <img className="rounded-circle img-fluid" src="assets/img/about/missao.jpg" alt=""/>
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>Missão</h4>
                                    <h4 className="subheading">  </h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted"> Facilitar o acesso dos clientes aos itens relacionados as festas de casamento!</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-image">
                                <img className="rounded-circle img-fluid" src="assets/img/about/visao.jpg" alt=""/>
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>Visão</h4>
                                    <h4 className="subheading"> </h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted"> Tonar-se referência no ramo de eventos facilitando a vida de nossos clientes através de nossa plataforma digital.</p>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                                <img className="rounded-circle img-fluid" src="assets/img/about/time.jpg" alt=""/>
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>Equipe</h4>
                                    <h4 className="subheading">Quatro membros</h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted">Hoje, em 27/06/2018, somos uma equipe de desenvolvimento composta por quatro membros de desenvolvedores. Buscando inserir novas tendências tecnológicas para melhorar a experiência de nossos usuários.</p>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                                <h4>Faça Parte
                                <br/>De Nossa
                                <br/>História!</h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
)