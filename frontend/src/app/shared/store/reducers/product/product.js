const INITIAL_STATE = {
    name: '',
    type:'',
    price: 0.0,
    amount: 0,
    informations: {},
    image: {},
    people: 0,
    desc: ''
}

const URL = "http://localhost:8080/#"

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case '[PRODUCT] NAME_CHANGED':
            return { 
                ...state, 
                name: action.payload
            }
        
        case '[PRODUCT] TYPE_CHANGED':
            return { 
                ...state, 
                type: action.payload
            }
        
        case '[PRODUCT] PRICE_CHANGED':
            return { 
                ...state, 
                price: action.payload
            }

        case '[PRODUCT] AMOUNT_CHANGED':
            return { 
                ...state, 
                amount: action.payload
            }

        case '[PRODUCT] PEOPLE_CHANGED':
            return { 
                ...state, 
                people: action.payload
            }
        
        case '[PRODUCT] DESC_CHANGED':
            return { 
                ...state, 
                desc: action.payload
            }
        
        case '[PRODUCT] IMAGE_CHANGED': {
            return { 
                ...state, 
                image: action.payload
            }
        }

        case '[PRODUCT] ERROR':
            return { ...state }

        default: 
            return state
    }
}