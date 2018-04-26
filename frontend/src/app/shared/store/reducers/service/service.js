const INITIAL_STATE = {
    products: '',
    type:'' 
}

const URL = "http://localhost:8080/#"

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case '[SERVICE] FETCH_ALL_PRODUCTS':
            return { 
                ...state, 
                products: action.payload.products,
                type: action.payload.informations 
            }

        case '[SERVICE] ERROR':
            return { ...state }

        default: 
            return state
    }
}