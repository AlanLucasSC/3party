import React from 'react'
import { connect } from 'react-redux'

//Mudar o Portifolio em um metodo que busca as categorias

class Service extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <Portifolio />
            </div>
        )
    }
}

//State
const mapStateToProps = state => ({
})

//Actions
const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Service)