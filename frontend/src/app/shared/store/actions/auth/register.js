export const changeName = event => ({
    type: '[REGISTER] NAME_CHANGED',
    payload: event.target.value
})

export const changeEmail = event => ({
    type: '[REGISTER] EMAIL_CHANGED',
    payload: event.target.value
})

export const changePassword = event => ({
    type: '[REGISTER] PASSWORD_CHANGED',
    payload: event.target.value
})