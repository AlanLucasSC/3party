//Third Party
import { combineReducers } from 'redux'

//Application files
import login from './reducers/auth/login'
import register from './reducers/auth/register'
import app from './reducers/app/app'
import service from './reducers/service/service'
import event from './reducers/event/event'
import solicitation from './reducers/solicitation/solicitation'
import product from './reducers/product/product'

const rootReducer = combineReducers({
    app: app,
    login: login,
    register: register,
    service: service,
    event: event,
    solicitation: solicitation,
    product: product
})

export default rootReducer