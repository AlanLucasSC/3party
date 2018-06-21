import axios from 'axios'

import { changeImage } from '../../actions/product/product'

const URL = 'http://localhost:4009/file'
const URL_Vendor = 'http://localhost:4009/api/vendor'

export const sendImage = (event) => {
    return (dispatch) => {
        var bodyFormData = new FormData();
        bodyFormData.set('image', event.target.files[0]);

        axios({
            method: 'post',
            url: URL,
            data: bodyFormData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function (resp) {
            //handle success
            console.log(resp);
            dispatch( changeImage(resp.data.image) )
        })
        .catch(function (err) {
            //handle error
            console.log(err);
        });
    }
}

export const createProduct = (id, image, type, price, amount, desc, name, people) => {
    return (dispatch) => {

        const request = axios
            .get(`${URL_Vendor}/${id}`)
            .then(function (resp) {
                //handle success
                var product = {
                    image: image,
                    price: price,
                    name: name,
                    information: [
                        {
                            key: "Tipo",
                            value: type
                        },
                        {
                            key: "Quantidade",
                            value: amount
                        },
                        {
                            key: "Pessoas",
                            value: people
                        }
                    ]
                }
                //console.log(product)
                resp.data.products.push(product)
                //console.log(resp)
                const PUTrequest = axios
                    .put(`${URL_Vendor}/${id}`, resp.data)
                    .then(
                        resp => {
                            //console.log(resp.data)
                        }
                    )
            })
            .catch(function (err) {
                //handle error
                console.log(err)
            });
    }
}
