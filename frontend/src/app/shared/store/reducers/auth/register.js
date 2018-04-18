const INITIAL_STATE = {
    loading: false,
    loaded: false,
    failed: false,
    email: '',
    password: '',
    name: ''
}

const URL = "http://localhost:8080/#"

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default: 
            return state
    }
}