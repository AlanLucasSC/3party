//Third Party
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//Application file
import Navigation from '../../component/navigation/navigation'
import Footer from '../../component/footer/footer'
import { doLogout } from '../../store/actions/auth/login'

//Teste -> excluir depois o import, no mapDispatchToProps e no render
import { products } from '../../store/effects/service/service'

class Layout extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                { this.props.products() }
                <Navigation userEmail={ this.props.email } logout={ this.props.doLogout }/>
                { this.props.children }
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