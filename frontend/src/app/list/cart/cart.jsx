import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Cart extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <section>
                
            </section>
        )
    }
}

//State
const mapStateToProps = state => ({
})

//Actions
const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cart)