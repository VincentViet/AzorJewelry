import
{
    TOOGLE_LOGIN_DRAWER,
    LOGGING_REQUEST,
    LOGGING_SUCCESS,
    LOGGING_FAILURE
} from './actions'

const initialState = {
    visible: false,
    logging: false,
    data: null,
    err: null
}

export const loginReducer = (state = initialState, action) =>
{
    switch (action.type) {
        case TOOGLE_LOGIN_DRAWER:
            return {
                ...state,
                visible: !state.logging ? !state.visible : state.visible
            }
    
        case LOGGING_REQUEST:
            return {
                ...state,
                logging: true
            }
        
        case LOGGING_SUCCESS:
            return {
                ...state,
                logging: false,
                data: action.payload,
                err: null
            }
        
        case LOGGING_FAILURE:
            return {
                ...state,
                logging: false,
                data: null,
                err: action.payload
            }
            
        default: return state;
    }
}