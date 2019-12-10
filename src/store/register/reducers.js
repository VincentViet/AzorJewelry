import
{
    TOOGLE_REGISTER_DRAWER,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from './actions'

const initialState = {
    visible: false,
    registering: false,
    data: null,
    err: null
}

export const registerReducer = (state = initialState, action) =>
{
    switch (action.type)
    {
        case TOOGLE_REGISTER_DRAWER:
            return {
                ...state,
                visible: !state.registering ? !state.visible : state.visible
            }

        case REGISTER_REQUEST:
            return {
                ...state,
                registering: true
            }

        case REGISTER_SUCCESS:
            return {
                ...state,
                registering: false,
                data: action.payload,
                err: null
            }

        case REGISTER_FAILURE:
            return {
                ...state,
                registering: false,
                data: null,
                err: action.payload
            }

        default: return state;
    }
}