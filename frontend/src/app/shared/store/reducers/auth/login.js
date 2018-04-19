import * as model from '../../../models/user'

const INITIAL_STATE = {
    loading: false,
    loaded: false,
    failed: false,
    email: '',
    password: '',
    user: model.user
}

const URL = "http://localhost:8080/#"

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case '[LOGIN] EMAIL_CHANGED':
            return { ...state, email: action.payload }

        case '[LOGIN] PASSWORD_CHANGED':
            return { ...state, password: action.payload }

        case '[LOGIN] DO_LOGIN':
        case '[LOGIN] DO_LOGOUT': {
            return {
                ...state, 
                loading: true,
                loaded: false,
                failed: false
            }
        }

        case '[LOGIN] DO_LOGOUT_SUCCESS': {
            return {
                ...state, 
                loading: false,
                loaded: true,
                failed: false,
                user: action.payload
            }
        }

        case '[LOGIN] DO_LOGIN_SUCCESS': {
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

        case '[LOGIN] DO_LOGIN_FAIL': {
            return {
                ...state, 
                loading: false,
                loaded: false,
                failed: true,
            }
        }

        case '[LOGIN] IS_ALIVE':
            return { ...state, loading: action.payload }

        default: 
            return state
    }
}