import * as model from '../../models/user'

const INITIAL_STATE = {
    loading: false,
    loaded: false,
    failed: false,
    page: '/login',
    email: '',
    password: '',
    user: model.user
}

const URL = "http://localhost:8080/#"

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case '[AUTH] EMAIL_CHANGED':
            return { ...state, email: action.payload }

        case '[AUTH] PASSWORD_CHANGED':
            return { ...state, password: action.payload }

        case '[AUTH] DO_LOGIN':
        case '[AUTH] DO_LOGOUT': {
            return {
                ...state, 
                loading: true,
                loaded: false,
                failed: false
            }
        }

        case '[AUTH] DO_LOGOUT_SUCCESS': {
            return {
                ...state, 
                loading: false,
                loaded: true,
                failed: false,
                user: action.payload
            }
        }

        case '[AUTH] DO_LOGIN_SUCCESS': {
            return {
                ...state, 
                loading: false,
                loaded: true,
                failed: false,
                email: '',
                password: '',
                user: action.payload
            }
        }

        case '[AUTH] DO_LOGIN_FAIL': {
            return {
                ...state, 
                loading: false,
                loaded: false,
                failed: true,
            }
        }

        case '[AUTH] IS_ALIVE':
            return { ...state, loading: action.payload }

        case '[AUTH] REDIRECT': {
            window.location = URL+action.payload
            return { ...state, page: action.payload }
        }

        default: 
            return state
    }
}