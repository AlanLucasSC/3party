//Third Party
import { combineReducers } from 'redux'

//Application files
import login from './reducers/auth/login'
import register from './reducers/auth/register'
import app from './reducers/app/app'

const rootReducer = combineReducers({
    app: app,
    login: login,
    register: register,
})

export default rootReducer