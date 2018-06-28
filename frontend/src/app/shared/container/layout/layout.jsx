//Third Party
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//Application file
import Navigation from '../../component/navigation/navigation'
import Footer from '../../component/footer/footer'
import { doLogout } from '../../store/actions/auth/login'
import Chat from '../../component/chatBot/Chat'

//Teste -> excluir depois o import, no mapDispatchToProps e no render
import { products } from '../../store/effects/service/service'


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

const FooterCss = {
    position: 'fixed',
    left: 0,
    bottom: 5,
    width: 98+'%',
    color: '#fed136',
    textAlign: 'right',
    marginLeft: 90+'%'
}

const ToogleChat = () => {
    $('#drop').toggle()
}

class Layout extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Navigation userEmail={ this.props.email } logout={ this.props.doLogout }/>
                { this.props.children }
                <div className="btn-group dropup" style={ FooterCss }>
                    <i className="fa fa-info-circle fa-5x" aria-hidden="true" onClick={ ToogleChat }> 
                        
                    </i>
                </div>
                <div id="drop" style={ FooterDropUp }>
                    <Chat />
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    email: state.login.user.email
})

const mapDispatchToProps = dispatch => bindActionCreators({ 
    doLogout,
    products
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Layout)