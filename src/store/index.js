import { loginReducer } from './login'
import { providerReducer } from "./provider";
import { productReducer } from "./product";
import { importReducer } from "./import";
import {exportReducer} from "./export";
import {employeeReducer} from "./employee";

import { createLogger } from 'redux-logger'
import {
    combineReducers,
    createStore,
    applyMiddleware
} from 'redux';

const rootReducer = combineReducers({
    login: loginReducer,
    provider: providerReducer,
    product: productReducer,
    import: importReducer,
    export: exportReducer,
    employee: employeeReducer
});
const middleware = createLogger();

const store = createStore(rootReducer, applyMiddleware(middleware));
export default store