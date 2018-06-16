import axios from 'axios'

import { redirect } from '../../actions/app/app.js'

const URL = 'http://localhost:4009/api/vendor'
const COMPARE = 'http://localhost:4009/api/compare'

//criar limite de busca do products

export const products = () => {
    return (dispatch) => {
        const request = axios
            .get(`${URL}/products`)
            .then(
                resp => {
                    var information = []
                    resp.data.forEach(product => {
                        product.information.forEach(info => {
                            if(info.key === 'Tipo'){
                                information.push(info.value)
                            }
                        })
                    })
                    information = information.filter(
                        function unique(value, index, self) { 
                            return self.indexOf(value) === index
                        }
                    )
                    information.sort()
                    return dispatch({
                        type: '[SERVICE] FETCH_ALL_PRODUCTS',
                        payload: {
                            products: resp.data,
                            informations: information
                        }
                    })
                }
            )
    }
}


/*
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

*/