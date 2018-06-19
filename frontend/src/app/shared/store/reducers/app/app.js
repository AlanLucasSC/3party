const INITIAL_STATE = {
    page: '/home',
    userType: 'VISITOR',
    pagination: 1
}

const URL = "http://localhost:8008/#"

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case '[APP] REDIRECT': {
            window.location = URL+action.payload.page
            return { 
                ...state, 
                page: action.payload.page,
                userType: action.payload.userType,
                pagination: 1
            }
        }

        case '[APP] PAGE': {
            return { 
                ...state, 
                pagination: action.payload
            }
        }
        
        default: 
            return state
    }
}