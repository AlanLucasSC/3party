import axios from 'axios'

import { redirect } from '../actions/authAction'

const URL = 'http://localhost:3003/api/auth'

/*
export const changePassword = event => ({
    type: '[AUTH] DO_LOGIN',
    payload: 'Funcionou !!!'
})
*/

export const login = (email, password) => {
    return (dispatch) => {
        const request = axios
            .get(`${URL}?email=${email}&password=${password}`)
            .then(
                resp => {
                    if(resp.data.length) {
                        return dispatch({
                            type: '[AUTH] DO_LOGIN_SUCCESS',
                            payload: {
                                email: resp.data[0].email,
                                isLoggedIn: true
                            }
                        })
                    }
                    else {
                        return dispatch({
                            type: '[AUTH] DO_LOGIN_FAIL',
                        })
                    }
                }
            )
            .then(
                resp => {
                    switch(resp.type) {
                        case '[AUTH] DO_LOGIN_SUCCESS':
                            dispatch(redirect('/home'))
                    }
                }
            )
    }
}