const INITIAL_STATE = {
    page: '/home',
    userType: 'VISITOR'
}

const URL = "http://localhost:8080/#"

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case '[APP] REDIRECT': {
            window.location = URL+action.payload
            return { ...state, page: action.payload }
        }
        
        default: 
            return state
    }
}