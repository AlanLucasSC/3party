import React from 'react'
import { connect } from 'react-redux'

import ItemNavigation from '../item/itemNavigation'


class Navigation extends React.Component{

    constructor(props){
        super(props)
    }

    render(){    
        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top header" id="mainNav">
                <img src=""/>
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">3Party</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" 
                    data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fa fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ItemNavigation userType={ this.props.userType } />
                    </div>
                </div>
            </nav>
        )
    }
}

//State
const mapStateToProps = state => ({
    userType: state.app.userType
})

export default connect(mapStateToProps)(Navigation)
