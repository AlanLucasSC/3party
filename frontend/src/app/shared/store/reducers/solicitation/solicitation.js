const INITIAL_STATE = {
    solicitations: '',
    productSelected: '',
    products: {},
    events: {},
    page: 1
}

const URL = "http://localhost:8080/#"

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case '[SOLICITATION] FETCH_MY_SOLICITATION':
            return { 
                ...state, 
                solicitations: action.payload
            }
        
        case '[SOLICITATION] FETCH_PRODUCT':{
            var products = state.products
            var id = action.payload._id
            //console.log(action.payload)
            console.log(products)
            if(id !== undefined && action.payload !== undefined){
                products[id] = action.payload
            }
            //console.log(products)
            return { 
                ...state, 
                products: products
            }
        }

        case '[SOLICITATION] FETCH_SOLICITATION':{
            var solicitations = state.events
            var id = action.payload._id
            //console.log('id: '+action.payload._id)
            //console.log('solicitação: '+solicitations)
            solicitations[id] = action.payload
            //console.log(solicitations)
            return { 
                ...state, 
                events: solicitations
            }
        }

        default: 
            return state
    }
}