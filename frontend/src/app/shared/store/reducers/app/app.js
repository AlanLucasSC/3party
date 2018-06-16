const INITIAL_STATE = {
    page: '/home',
    userType: 'VISITOR',
}

const URL = "http://localhost:8008/#"

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case '[APP] REDIRECT': {
            window.location = URL+action.payload.page
            return { 
                ...state, 
                page: action.payload.page,
                userType: action.payload.userType
            }
        }
        
        default: 
            return state
    }
}