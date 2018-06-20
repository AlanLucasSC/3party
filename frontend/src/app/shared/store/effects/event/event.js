import axios from 'axios'

import { redirect } from '../../actions/app/app.js'

const URL = 'http://localhost:4009/api/event'

export const createEvent = (user, name, date) => {
    return (dispatch) => {
        const request = axios
            .post(URL, {
                user: user,
                name: name,
                date, date
            })
            .then(function (resp) {
                return dispatch({
                    type: '[EVENT] DO_CREATE_EVENT_SUCCESS',
                    payload: {
                        message: 'Evento criado com sucesso'
                    }
                })
            })
            .catch(function (err) {
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
        const request = axios
            .get(URL, {
                params: {
                    user: user
                }
            })
            .then(function (resp) {
                return dispatch({
                    type: '[EVENT] LOAD_EVENTS_SUCCESS',
                    payload: {
                        events: resp.data
                    }
                })
            })
            .catch(function (err) {
                return dispatch({
                    type: '[EVENT] LOAD_EVENTS_FAIL',
                    payload: {
                        message: 'Erro ao carregar os Eventos'
                    }
                })
            });
    }
}