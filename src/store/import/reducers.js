import
{
    ActionType
} from './actions'
import {Map} from "immutable";

const initialState = {
    products: Map(),
    provider: null,
    loading: false,
    error: null
};

export const importReducer = (state = initialState, action) =>
{
    switch (action.type) {
        case ActionType.IMPORT_ADD_PRODUCT:
            if (state.provider)
            {
                const newProduct = action.payload.info;
                return {
                    ...state,
                    products: state.products.set(newProduct.idsp, newProduct)
                };
            }
            action.payload.callback();
            return state;

        case ActionType.IMPORT_EDIT_PRODUCT:
            const product = action.payload;
            return {
                ...state,
                products: state.products.set(product.idsp, product)
            };

        case ActionType.IMPORT_DELETE_PRODUCT:
            // console.log(action.payload);
            return {
                ...state,
                products: state.products.remove(action.payload.idsp)
            };

        case ActionType.CHOOSE_PROVIDER:
            return {
                ...state,
                provider: action.payload
            };

        case ActionType.CREATE_IMPORT:
            return {
                ...state,
                loading: true
            };
        case ActionType.CREATE_IMPORT_SUCCESS:
            return initialState;
        case ActionType.CREATE_IMPORT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default: return state;
    }
};