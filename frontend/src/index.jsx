//Thrid Party
import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

//Middlewares
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'


//Application
import App from './app/app'
import reducers from './app/shared/store/reducers'

//Save state on localstorage
function savaToLocalStorage( state ) {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch(e) {
        console.log(e)
    }
}

//Load state from localstorage
function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('state')
        if(serializedState === null) return undefined
        return JSON.parse(serializedState)
    } catch(e) {
        console.log(e)
        return undefined
    }
}

const persistedState = loadFromLocalStorage();

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
        && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, persistedState, devTools)

store.subscribe(() => savaToLocalStorage(store.getState()))

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>
, document.getElementById('app'))