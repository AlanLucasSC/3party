const INITIAL_STATE = {
    selected: '',
    name: '',
    date: '',
    events: ''
}

const URL = "http://localhost:8080/#"

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case '[EVENT] DO_CREATE_EVENT_SUCCESS': {
            return { 
                ...state, 
                message: action.payload.message,
                name: '',
                date: ''
            }
        }
        
        case '[EVENT] NAME_CHANGED': {
            return { 
                ...state, 
                name: action.payload
            }
        }

        case '[EVENT] DATE_CHANGED': {
            return { 
                ...state, 
                date: action.payload
            }
        }
            

        case '[EVENT] LOAD_EVENTS': {
            return { 
                ...state,
                events: action.payload.events
            }
        }

        default: 
            return state
    }
}