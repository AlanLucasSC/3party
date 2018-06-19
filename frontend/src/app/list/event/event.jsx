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

//Actions
import { changeName, changeDate } from '../../shared/store/actions/event/event'

//Effects
import { createEvent } from '../../shared/store/effects/event/event'


const HR = {
    marginLeft: 20+'px',
    marginRight: 20+'px',
}

class Events extends React.Component{

    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this);
    }

    toggle( id ){
        $('#'+id).fadeToggle()
    }

    render(){
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
                            <Item active> Todos </Item>
                        </List>
                        <Input 
                            type= { 'date' }
                            ID={ 'newData' }
                            name={ 'Evento' }
                            onChange={ this.props.changeDate }
                            value= { this.props.date }
                            className={ 'col-3' }
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
                                click={ () => this.props.createEvent(this.props.user, this.props.name, this.props.date) }
                            />
                        </Input>
                    </Collapse>
                </Navbar>
                <hr style={ HR }/>
            </section>
        )
    }
}

//State
const mapStateToProps = state => ({
    name: state.event.name,
    date: state.event.date,
    user: state.login.user.data._id
})

//Actions
const mapDispatchToProps = dispatch => bindActionCreators({
    changeName,
    changeDate,
    createEvent
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Events)