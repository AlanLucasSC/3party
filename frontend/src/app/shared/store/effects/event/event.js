import axios from 'axios'

import { redirect, reload } from '../../actions/app/app.js'

const URL = 'http://localhost:4009/api/event'
const URL_Solicitation = 'http://localhost:4009/api/solicitation'

export const createEvent = (user, name, date) => {
    return (dispatch) => {
        const request = axios
            .post(URL, {
                user: user,
                name: name,
                date, date
            })
            .then( 
                resp => {
                return dispatch({
                    type: '[EVENT] DO_CREATE_EVENT_SUCCESS',
                    payload: {
                        message: 'Evento criado com sucesso'
                    }
                })
            })
            .then(
                resp => {
                    switch(resp.type) {
                        case '[EVENT] DO_CREATE_EVENT_SUCCESS':
                            dispatch( loadEvents(user) )
                    }
                }
            )
            .catch( 
                err => {
                return dispatch({
                    type: '[EVENT] DO_CREATE_EVENT_FAIL',
                    payload: {
                        message: 'Erro ao criar Evento'
                    }
                })
            });
            
    }
}

export const loadEvents = (user) => {
    return (dispatch) => {
        console.log(URL+'?user='+user)
        const request = axios
            .get(URL+'?user='+user)
            .then(function (resp) {
                return dispatch({
                    type: '[EVENT] LOAD_EVENTS_SUCCESS',
                    payload: {
                        events: resp.data
                    }
                })
            })
            .catch(function (err) {
                console.log(err)
                return dispatch({
                    type: '[EVENT] LOAD_EVENTS_FAIL',
                    payload: {
                        message: 'Erro ao carregar os Eventos'
                    }
                })
            });
    }
}

export const removeEvent = ( id ) => {
    console.log('Entrou')
    console.log(id)
    const request = axios
            .get(URL+'?_id='+id)
            .then(
                (event) => {
                    //console.log(event.data[0])
                    for(var i = 0; i < event.data[0].solicitation.length; i++){
                        console.log( event.data[0].solicitation[i] )
                        const deleteRequestSolicitation = axios.delete(URL_Solicitation+'/'+event.data[0].solicitation[i].id)
                            .then(
                                ( resp ) => {
                                    console.log('OK')
                                }
                            )
                    }
                }
            )
    const deleteRequestEvent = axios
            .delete( URL+'/'+id )
    reload()
}