import React from 'react'

export default props => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regEx.test(props.email) && props.email.length != 0 && props.password.length >= 5) {
        return (
            <button 
                type="submit" 
                className="basic-btn login-submitBtn"
                onClick={ props.doLogin }
            >
            { props.text }
            </button>
        )
    } else {
        return (
            <button 
                type="submit" 
                className="basic-btn login-submitBtn"
            >
            { props.text }
            </button>
        )
    }
}