import axios from 'axios'

const URL = 'http://localhost:4009/api/solicitation'
const URL_Event = 'http://localhost:4009/api/event'


//Inseri a solicitação
export const createSolicitation = (vendor, product, amount, people, event, type) => {
    return (dispatch) => {
        const request = axios
            .post(`${URL}`, {
                vendor: vendor,
                product: product,
                amount: amount,
                people: people
            })
            .then(
                resp => {
                    return dispatch({
                        type: '[SERVICE] DO_CREATE_SOLICITATION_SUCCESS',
                        payload: {
                            message: 'Solicitação criada com sucesso',
                            id: resp.data._id
                        }
                    })
            })
            .then(
                resp => {
                    switch(resp.type) {
                        case '[SERVICE] DO_CREATE_SOLICITATION_SUCCESS':
                            dispatch( addSolicitation(event, resp.payload.id, type) )
                    }
                }
            )
            .catch(
                err => {
                    return dispatch({
                        type: '[SERVICE] DO_CREATE_SOLICITATION_FAIL',
                        payload: {
                            message: 'Falha ao criar Solicitação'
                        }
                    })
            });
    }
}

export const addSolicitation = (event, id, type) => {
    return (dispatch) => {
        //console.log(event)
        //console.log('ID solicitation: '+id)

        const request = axios
            .get(URL_Event, {
                params: {
                    _id: event
                }
            })
            .then(
                resp => {
                    resp.data[0].solicitation.push({
                        id: id,
                        type: type
                    })
                    //console.log(resp.data[0])
                    const putRequest = axios
                        .put(URL_Event+'/'+event, resp.data[0])
                        .then(
                            response => {
                                console.log(response)
                            }
                        )
            })
            .catch(
                err => {
                    console.log(err);
            });

        return dispatch({
            type: '[SERVICE] DO_ADD_SOLICITATION_SUCCESS'
        })
    }
}