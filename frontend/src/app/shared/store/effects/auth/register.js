import axios from 'axios'

//import { redirect } from '../../actions/app/app.js'

const URL = 'http://localhost:3003/api/user/'

export const register = (name, email, password) => {
    return (dispatch) => {
        const request = axios
            .post(`${URL}`, {
                name: name,
                email: email,
                password: password
            })
            .then(
                resp => {
                    console.log(resp)
                    return dispatch({
                        type: '[REGISTER] DO_REGISTER_SUCCESS',
                        payload: true
                    })
                }
            )
    }
}