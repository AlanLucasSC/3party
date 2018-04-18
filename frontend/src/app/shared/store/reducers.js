//Third Party
import { combineReducers } from 'redux'

//Application files
//import todoReducer from '../todo/todoReducer'
import login from './reducers/auth/login'

const rootReducer = combineReducers({
    //todo: todoReducer,
    login: login
})

export default rootReducer