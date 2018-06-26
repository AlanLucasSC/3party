//Third Party
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Navbar } from './navbar/navbar'
import { Collapse } from './navbar/collapse'
import { List } from './navbar/list'
import { Item } from './navbar/item'
import { Button } from '../../shared/component/button/button'
import { Input } from  '../../shared/component/form/input'
import { Column } from '../../shared/component/column/column'
import { Alert } from '../../shared/component/alert/alert'


import { RenderEvents } from './renderEvents'

//Actions
import { changeName, changeDate } from '../../shared/store/actions/event/event'

//Effects
import { createEvent, loadEvents } from '../../shared/store/effects/event/event'


const Margin = {
    marginLeft: 10+'px',
    marginRight: 10+'px',
}

const Card = {
    fontSize: 15+'px',
}



class Events extends React.Component{

    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this)
        if(this.props.user)
            this.props.loadEvents( this.props.user._id )
    }

    toggle( id ){
        $('#'+id).fadeToggle()
    }

    render(){
        var id
        if(this.props.user)
            id = this.props.user._id
        return (
            <section>
                <div className="row container">
                    <Column column={ 'sm-8' }/>
                    <Column column={ 'sm-4' }> 
                        <Alert 
                            color={ 'danger' }
                            display={ 'd-none' }
                        > Erro ao criar Evento </Alert> 
                    </Column>
                </div>
                <Navbar name="Eventos" ID="evento">
                    <Collapse ID="evento">
                        <List>
                            <Item URL={ '' } active> Todos </Item>
                        </List>
                        <Input 
                            type= { 'date' }
                            ID={ 'newData' }
                            name={ 'Evento' }
                            onChange={ (this.props.changeDate) }
                            value= { this.props.date }
                            className={ 'col-4' }
                        >
                            <span className="input-group-text" id="basic-addon1">Data</span>
                        </Input>
                        <Input
                            type= { 'text' }
                            ID={ 'newEvent' }
                            description={ 'Novo Evento' }
                            name={ 'Evento' }
                            onChange={ this.props.changeName }
                            value= { this.props.name }
                            className={ 'col-4' }
                        >
                            <Button 
                                color={ 'outline-success' }
                                name={ 'Novo Evento' }
                                click={ () => this.props.createEvent( id, this.props.name, this.props.date) }
                            />
                        </Input>
                    </Collapse>
                </Navbar>
                <hr style={ Margin }/>
                <RenderEvents style={ Card } events={ this.props.events }/>
                <section>
                    
                </section>
            </section>
        )
    }
}

//State
const mapStateToProps = state => ({
    name: state.event.name,
    date: state.event.date,
    user: state.login.user.data,
    events: state.event.events
})

//Actions
const mapDispatchToProps = dispatch => bindActionCreators({
    changeName,
    changeDate,
    createEvent,
    loadEvents
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Events)