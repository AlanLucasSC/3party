import React from 'react'

const ValidateEmail = props => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regEx.test(props.email) && props.email.length != 0) {
        return props.children
    } else {
        return false
    }
}

const ValidatePassword = props => {
    if(props.password.length < 5) {
        return props.children
    } else {
        return false
    }
}

const ValidateLogin = props => {
    if(props.failed) {
        return props.children
    } else {
        return false
    }
}

export { ValidateEmail, ValidatePassword, ValidateLogin }