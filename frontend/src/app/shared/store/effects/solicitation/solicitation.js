import axios from 'axios'

import { redirect } from '../../actions/app/app.js'

const URL = 'http://localhost:4009/api/solicitation'
const URL_Product = 'http://localhost:4009/product'
const URL_Solicitation = 'http://localhost:4009/event/solicitation'
const URL_Soli = 'http://localhost:4009/api/solicitation'

const URL_Event = 'http://localhost:4009/api/event'

export const solicitationsVendor = (id) => {
    return (dispatch) => {
        const request = axios
            .get(`${URL}?vendor=${id}`)
            .then(
                resp => {
                    return dispatch({
                        type: '[SOLICITATION] FETCH_MY_SOLICITATION',
                        payload: resp.data
                    })
                }
            )
    }
}

export const solicitationsUser = (id) => {
    return (dispatch) => {
        const request = axios
            .get(`${URL}?id=${id}`)
            .then(
                resp => {
                    return dispatch({
                        type: '[SOLICITATION] FETCH_MY_SOLICITATION',
                        payload: resp.data
                    })
                }
            )
    }
}

//Get Events
export const events = (id) => {
    return (dispatch) => {
        //console.log(id)
        const request = axios
            .get(`${URL_Event}?_id=${id}`)
            .then(
                resp => {
                    //console.log(resp.data[0].solicitation)
                    //console.log('aqui')
                    return dispatch({
                        type: '[SOLICITATION] FETCH_MY_SOLICITATIONS_ON_EVENT',
                        payload: resp.data[0].solicitation
                    })
                }
            )
    }
}

export const productSelected = (id) => {
    return (dispatch) => {
        //console.log(id)
        //console.log('Aqui')
        const request = axios
            .get(`${URL_Product}/${id}`)
            .then(
                resp => {
                    //console.log(resp.data)
                    return dispatch({
                        type: '[SOLICITATION] FETCH_PRODUCT',
                        payload: resp.data
                    })
                }
            )
    } 
}

export const solicitationSelected = (id) => {
    return (dispatch) => {
        //console.log(id)
        //console.log('Aqui')
        const request = axios
            .get(`${URL_Solicitation}/${id}`)
            .then(
                resp => {
                    //console.log(resp.data)
                    return dispatch({
                        type: '[SOLICITATION] FETCH_SOLICITATION',
                        payload: resp.data
                    })
                }
            )
    } 
}

export const changeStatus = (id, status, price) => {
    return (dispatch) => {
        //console.log(id)
        //console.log('Aqui')
        var change = {
            status: status,
            price: price
        }
        //console.log(change)
        const putRequest = axios
            .put(URL_Soli+'/'+id, change)
            .then(
                response => {
                    //console.log(response)
                }
            )
    } 
}