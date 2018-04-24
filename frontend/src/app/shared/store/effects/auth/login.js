import axios from 'axios'

import { redirect } from '../../actions/app/app.js'

const URL = 'http://localhost:3003/api/user'

export const login = (email, password) => {
    return (dispatch) => {
        const request = axios
            .get(`${URL}?email=${email}&password=${password}`)
            .then(
                resp => {
                    if(resp.data.length) {
                        return dispatch({
                            type: '[LOGIN] DO_LOGIN_SUCCESS',
                            payload: {
                                email: resp.data[0].email,
                                isLoggedIn: true
                            }
                        })
                    }
                    else {
                        return dispatch({
                            type: '[LOGIN] DO_LOGIN_FAIL',
                        })
                    }
                }
            )
            .then(
                resp => {
                    switch(resp.type) {
                        case '[LOGIN] DO_LOGIN_SUCCESS':
                            dispatch(redirect('/dashboard'))
                    }
                }
            )
    }
}