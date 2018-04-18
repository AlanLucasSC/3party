import { login } from '../../effects/auth/login'

export const changeEmail = event => ({
    type: '[AUTH] EMAIL_CHANGED',
    payload: event.target.value
})

export const changePassword = event => ({
    type: '[AUTH] PASSWORD_CHANGED',
    payload: event.target.value
})

export const doLogin = (email, password) => {
    return [{
        type: '[AUTH] DO_LOGIN'
    }, login(email, password)]
}

export const doLogoutSuccess = () => ({
    type: '[AUTH] DO_LOGOUT_SUCCESS',
    payload: {
        email: '',
        isLoggedIn: false
    }
})

export const doLogout = () => {
    return [{
        type: '[AUTH] DO_LOGOUT'
    }, doLogoutSuccess(), redirect('/login')]
}