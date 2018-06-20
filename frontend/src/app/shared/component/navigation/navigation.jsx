import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ItemNavigation from '../item/itemNavigation'

//Actions
import { changeSelected } from '../../store/actions/event/event'



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
                        <ItemNavigation 
                            userType={ this.props.userType } 
                            logout={ this.props.logout }
                            selectedName={ this.props.selectedName }
                            selectedID={ this.props.selectedID }
                            events={ this.props.events }
                            changeSelected={ this.props.changeSelected }
                        />
                    </div>
                </div>
            </nav>
        )
    }
}

//State
const mapStateToProps = state => ({
    userType: state.app.userType,
    selected: state.event.selected,
    events: state.event.events,
    selectedName: state.event.selectedName,
    selectedID: state.event.selectedID
})

//Actions
const mapDispatchToProps = dispatch => bindActionCreators({
    changeSelected
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
