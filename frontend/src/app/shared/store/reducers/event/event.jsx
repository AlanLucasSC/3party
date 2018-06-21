const INITIAL_STATE = {
    selectedID: '',
    selectedName: '',
    selectedDate: '',
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

        case '[EVENT] SELECTED_EVENT_CHANGED': {
            return { 
                ...state, 
                selectedID: action.payload.selectedID,
                selectedName: action.payload.selectedName,
                selectedDate: action.payload.selectedDate
            }
        }
            

        case '[EVENT] LOAD_EVENTS_SUCCESS': {
            if(state.selectedName){
                return { 
                    ...state,
                    events: action.payload.events
                }
            } else {
                if(action.payload.events.length != 0){
                    return { 
                        ...state,
                        events: action.payload.events,
                        selectedName: action.payload.events[0].name,
                        selectedID: action.payload.events[0]._id
                    }
                } else {
                    return { 
                        ...state,
                        events: action.payload.events,
                        selectedName: 'Eventos',
                        selectedID: ''
                    }
                }
            }
        }

        case '[EVENT] LOAD_EVENTS_FAIL': {
            return { 
                ...state,
                message: action.payload.message,
                err: action.payload.err,
            }
        }

        default: 
            return state
    }
}