const INITIAL_STATE = {
    loading: false,
    loaded: false,
    failed: false,
    register: false,
    email: '',
    password: '',
    name: ''
}

const URL = "http://localhost:8080/#"

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case '[REGISTER] NAME_CHANGED':
            return { ...state, name: action.payload }
        
        case '[REGISTER] EMAIL_CHANGED':
            return { ...state, email: action.payload }

        case '[REGISTER] PASSWORD_CHANGED':
            return { ...state, password: action.payload }

        case '[REGISTER] DO_REGISTER_SUCCESS':
            return { ...state, register: action.payload }
        
        case '[REGISTER] DO_REGISTER_FAIL':
            return { ...state, failed: action.payload }

        default: 
            return state
    }
}