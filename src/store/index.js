import { loginReducer } from './login'
import { createLogger } from 'redux-logger'
import { combineReducers, createStore, applyMiddleware } from 'redux';

const rootReducer = combineReducers({
    login: loginReducer
})
const middleware = createLogger()

const store = createStore(rootReducer, applyMiddleware(middleware))
export default store