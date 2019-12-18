import {
    ActionType
} from "./actions";
import {List} from 'immutable'

const initialState = {
    products: List(),
    error: null,
    productInfo: {
        data: null,
        loading: false
    },
    // addFormLoading: false,
    singleProductModal: {
        visible: false,
        loading: false
    },
    multipleProductModal:{
        visible: false,
        loading: false,
    }
};

export const productReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ActionType.GET_PRODUCTS_SUCCESS:
        // case ActionType.UPDATE_PRODUCT_INFO_SUCCESS:
            const list = List(action.payload);
            const result = list.map((value, key) =>{
                return {
                    idsp: value.idsp,
                    tensp: value.tensp,
                    gianhap: value.gianhap,
                    giaban: value.giaban,
                    nhacungcap: value.nhacungcap,
                    key: key.toString(10),
                    chosen: false
                }
            });
            return {
                ...state,
                products: result,
                error: null
            };
        case ActionType.GET_PRODUCTS_FAILURE:
            return {
                ...state,
                products: List(),
                error: action.payload
            };
        case ActionType.UPDATE_PRODUCT_INFO_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case ActionType.GET_PRODUCT_INFO:
            const product = action.payload;
            return {
                ...state,
                productInfo: {
                    ...state.productInfo,
                    loading: !product.chosen,
                    data: null
                },
                products: state.products.map(value => {
                    return value.key === product.key ? {...value, chosen: !product.chosen} : {...value, chosen: false}
                })
            };

        case ActionType.GET_PRODUCT_INFO_SUCCESS:
            return {
                ...state,
                productInfo: {
                    ...state.productInfo,
                    loading: false,
                    data: action.payload
                },
                error: null
            };
        case ActionType.GET_PRODUCT_INFO_FAILURE:
            return {
                ...state,
                productInfo: {
                    ...state.productInfo,
                    loading: false,
                    data: null,
                },
                error: action.payload
            };
        case ActionType.ADD_PRODUCT:
            return {
                ...state,
                // addFormLoading: true,
                singleProductModal: {
                    ...state.singleProductModal,
                    loading: true
                }
            };
        case ActionType.ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                // addFormLoading: false,
                singleProductModal: {
                    ...state.singleProductModal,
                    visible: false,
                    loading: false,
                },
                error: null
            };
        case ActionType.ADD_PRODUCT_FAILURE:
            return {
                ...state,
                // addFormLoading: false,
                singleProductModal: {
                    ...state.singleProductModal,
                    loading: false
                },
                error: action.payload
            };
        case ActionType.TOGGLE_SINGLE_PRODUCT_MODAL:
            return {
                ...state,
                // addFormLoading: true,
                singleProductModal: {
                    ...state.singleProductModal,
                    visible: !state.singleProductModal.visible
                }
            };
        case ActionType.TOGGLE_MULTIPLE_PRODUCT_MODAL:
            return {
                ...state,
                // addFormLoading: true,
                multipleProductModal: {
                    ...state.multipleProductModal,
                    visible: !state.multipleProductModal.visible
                }
            };
        default:
            return state;
    }
};

