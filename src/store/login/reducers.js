import
{
    LOGGING_REQUEST,
    LOGGING_SUCCESS,
    LOGGING_FAILURE
} from './actions'

const initialState = {
    visible: false,
    logging: false,
    taiKhoan: null,
    err: null
};

export const loginReducer = (state = initialState, action) =>
{
    switch (action.type) {
        case LOGGING_REQUEST:
            return {
                ...state,
                logging: true
            };
        
        case LOGGING_SUCCESS:
            return {
                ...state,
                logging: false,
                taiKhoan: action.payload,
                err: null
            };
        
        case LOGGING_FAILURE:
            return {
                ...state,
                logging: false,
                taiKhoan: null,
                err: action.payload
            };
            
        default: return state;
    }
};