//Third Party
import { combineReducers } from 'redux'

//Application files
import login from './reducers/auth/login'
import register from './reducers/auth/register'
import app from './reducers/app/app'
import service from './reducers/service/service'

const rootReducer = combineReducers({
    app: app,
    login: login,
    register: register,
    service: service
})

export default rootReducer