import { loginReducer } from './login'
import { providerReducer } from "./provider";
import { createLogger } from 'redux-logger'
import { combineReducers, createStore, applyMiddleware } from 'redux';

const rootReducer = combineReducers({
    login: loginReducer,
    provider: providerReducer
});
const middleware = createLogger();

const store = createStore(rootReducer, applyMiddleware(middleware));
export default store