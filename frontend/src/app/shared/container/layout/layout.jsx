//Third Party
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//Application file
import Navigation from '../../component/navigation/navigation'
import Footer from '../../component/footer/footer'
import { doLogout } from '../../store/actions/auth/login'

class Layout extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
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
    doLogout
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Layout)