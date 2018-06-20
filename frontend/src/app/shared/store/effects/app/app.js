import axios from 'axios'

import { redirect } from '../../actions/app/app.js'

const URL = 'http://localhost:4009/api/user'


export const contract = (id) => {
    return (dispatch) => {
        const request = axios
            .put(URL+'/'+id, {
                contract: 'ACEITO'
            })
            .then(
                resp => {
                    return dispatch({
                        type: '[APP] CONTRACT_ACCEPT'
                    })
                }
            )
            .then(
                resp => {
                    switch(resp.type) {
                        case '[APP] CONTRACT_ACCEPT':
                            dispatch( redirect('', 'VENDOR') )
                    }
                }
            )
    }
}