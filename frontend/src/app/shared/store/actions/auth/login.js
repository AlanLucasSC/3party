import { login } from '../../effects/auth/login'

export const changeEmail = event => ({
    type: '[LOGIN] EMAIL_CHANGED',
    payload: event.target.value
})

export const changePassword = event => ({
    type: '[LOGIN] PASSWORD_CHANGED',
    payload: event.target.value
})

export const doLogin = (email, password) => {
    return [{
        type: '[LOGIN] DO_LOGIN'
    }, login(email, password)]
}

export const doLogoutSuccess = () => ({
    type: '[LOGIN] DO_LOGOUT_SUCCESS',
    payload: {
        email: '',
        isLoggedIn: false
    }
})

export const doLogout = () => {
    return [{
        type: '[LOGIN] DO_LOGOUT'
    }, doLogoutSuccess(), redirect('/login', 'VISITOR')]
}