import
{
    ActionType
} from './actions'

const initialState = {
    visible: false,
    loading: false,
    account: null,
    err: null
};

export const loginReducer = (state = initialState, action) =>
{
    switch (action.type) {
        case ActionType.EMPLOYEE_LOGGING_REQUEST:
            return {
                ...state,
                loading: true
            };
        
        case ActionType.EMPLOYEE_LOGGING_SUCCESS:
            return {
                ...state,
                loading: false,
                account: action.payload,
                err: null
            };
        
        case ActionType.EMPLOYEE_LOGGING_FAILURE:
            return {
                ...state,
                loading: false,
                account: null,
                err: action.payload
            };
        case ActionType.LOGOUT:
            return {
                ...state,
                account: null
            };
        default: return state;
    }
};