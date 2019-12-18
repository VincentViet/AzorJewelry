import {
    ActionType
} from "./actions";
import {List} from 'immutable'

const initialState = {
    providers: List(),
    error: null,
    info: null,
    // addFormLoading: false,
    singleProviderModal: {
        visible: false,
        loading: false
    },
    multipleProviderModal:{
        visible: false,
        loading: false,
    }
};

export const providerReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ActionType.GET_PROVIDERS_SUCCESS:
        // case ActionType.UPDATE_PROVIDER_INFO_SUCCESS:
            const list = List(action.payload);
            const result = list.map((value, key) =>{
                return {
                    ...value,
                    key: key.toString(10)
                }
            });
            return {
                ...state,
                providers: result,
                error: null
            };
        // case ActionType.UPDATE_PROVIDER_INFO_SUCCESS:
        //     console.log(action.payload);
        //     return state;
        case ActionType.GET_PROVIDERS_FAILURE:
            return {
                ...state,
                providers: List(),
                error: action.payload
            };
        case ActionType.UPDATE_PROVIDER_INFO_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case ActionType.GET_PROVIDER_INFO_SUCCESS:
            return {
                ...state,
                info: action.payload,
                error: null
            };
        case ActionType.GET_PROVIDER_INFO_FAILURE:
            return {
                ...state,
                info: null,
                error: action.payload
            };
        case ActionType.ADD_PROVIDER:
            return {
                ...state,
                // addFormLoading: true,
                singleProviderModal: {
                    ...state.singleProviderModal,
                    loading: true
                }
            };
        case ActionType.ADD_PROVIDER_SUCCESS:
            return {
                ...state,
                // addFormLoading: false,
                singleProviderModal: {
                    ...state.singleProviderModal,
                    visible: false,
                    loading: false,
                },
                error: null
            };
        case ActionType.ADD_PROVIDER_FAILURE:
            return {
                ...state,
                // addFormLoading: false,
                singleProviderModal: {
                    ...state.singleProviderModal,
                    loading: false
                },
                error: action.payload
            };
        case ActionType.TOGGLE_SINGLE_PROVIDER_MODAL:
            return {
                ...state,
                // addFormLoading: true,
                singleProviderModal: {
                    ...state.singleProviderModal,
                    visible: !state.singleProviderModal.visible
                }
            };
        case ActionType.TOGGLE_MULTIPLE_PROVIDER_MODAL:
            return {
                ...state,
                // addFormLoading: true,
                multipleProviderModal: {
                    ...state.multipleProviderModal,
                    visible: !state.multipleProviderModal.visible
                }
            };
        default:
            return state;
    }
};

