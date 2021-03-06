import axios from 'axios'

import { redirect } from '../../actions/app/app.js'
import { loadEvents } from '../event/event'

const URL = 'http://localhost:4009/api/user'
const COMPARE = 'http://localhost:4009/api/compare'

export const login = (email, password) => {
    return (dispatch) => {
        const request = axios
            .get(`${URL}?email=${email}`)
            .then(
                resp => {
                    if(resp.data.length != 0) {
                        return dispatch({
                            type: '[LOGIN] FETCHING_SUCCESS',
                            payload: {
                                data: resp.data
                            }
                        })
                    }
                    else {
                        return dispatch({
                            type: '[LOGIN] FETCHING_FAIL',
                            payload: 'Email não encontrado'
                        })
                    }
                }
            )
            .then(
                resp => {
                    switch(resp.type) {
                        case '[LOGIN] FETCHING_SUCCESS':
                            console.log(resp.payload)
                            dispatch(pswCompare(resp.payload.data[0].password, password, resp.payload.data[0]))
                    }
                }
            )
    }
}

export const pswCompare = (hash, password, data) => {
    return (dispatch) => {
        const request = axios
            .get(`${COMPARE}/${hash}/${password}`)
            .then(
                resp => {
                    console.log(resp.data.resp)
                    if(resp.data.resp != false) {
                        return dispatch({
                            type: '[LOGIN] DO_LOGIN_SUCCESS',
                            payload: {
                                email: data.email,
                                isLoggedIn: resp.data.resp,
                                data: data
                            }
                        })
                    }
                    else {
                        return dispatch({
                            type: '[LOGIN] DO_LOGIN_FAIL',
                            payload: 'Senha errada'
                        })
                    }
                }
            )
            .then(
                resp => {
                    switch(resp.type) {
                        case '[LOGIN] DO_LOGIN_SUCCESS':{
                            $('#loginModal').modal('hide');
                            console.log(resp.payload.data.vendor)
                            if(resp.payload.data.vendor == undefined){
                                dispatch(redirect('/profile', 'USER'))
                            } else {
                                dispatch(redirect('', 'VENDOR'))
                            }
                            dispatch(loadEvents(resp.payload.data._id))
                        }
                    }
                }
            )
    }
}