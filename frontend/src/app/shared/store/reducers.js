//Third Party
import { combineReducers } from 'redux'

//Application files
//import todoReducer from '../todo/todoReducer'
import authReducer from './reducers/authReducer'

const rootReducer = combineReducers({
    //todo: todoReducer,
    login: authReducer
})

export default rootReducer