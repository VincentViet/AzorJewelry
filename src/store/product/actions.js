import axios from "axios";

export const ActionType = {
    GET_PRODUCTS: 'GET_PRODUCTS',
    GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
    GET_PRODUCTS_FAILURE: 'GET_PRODUCTS_FAILURE',

    GET_PRODUCT_INFO: 'GET_PRODUCT_INFO',
    GET_PRODUCT_INFO_SUCCESS: 'GET_PRODUCT_INFO_SUCCESS',
    GET_PRODUCT_INFO_FAILURE: 'GET_PRODUCT_INFO_FAILURE',

    UPDATE_PRODUCT_INFO: 'UPDATE_PRODUCT_INFO',
    // UPDATE_PRODUCT_INFO_SUCCESS: 'UPDATE_PRODUCT_INFO_SUCCESS',
    UPDATE_PRODUCT_INFO_FAILURE: 'UPDATE_PRODUCT_INFO_FAILURE',

    ADD_PRODUCT: 'ADD_PRODUCT',
    ADD_PRODUCT_SUCCESS: 'ADD_PRODUCT_SUCCESS',
    ADD_PRODUCT_FAILURE: 'ADD_PRODUCT_FAILURE',

    TOGGLE_SINGLE_PRODUCT_MODAL: 'TOGGLE_SINGLE_PRODUCT_MODAL',
    TOGGLE_MULTIPLE_PRODUCT_MODAL: 'TOGGLE_MULTIPLE_PRODUCT_MODAL'
};

const URLS = {
    GET_PRODUCTS: 'http://localhost:3000/sanpham',
    UPDATE_PRODUCT_INFO: (id) => `http://localhost:3000/kho/nhacungcap/${id}`,
    ADD_PRODUCT: 'http://localhost:3000/kho/nhacungcap',
    SHOW_PRODUCT_INFO: (id) => `http://localhost:3000/sanpham/sp/${id}`
};

export const getProducts = (url, successCallback, failureCallback) =>{
    url = url || URLS.GET_PRODUCTS;
    axios.get(url)
        .then(res =>{
            successCallback(res.data)
        }).catch(err => failureCallback(err));

    return {
        type: ActionType.GET_PRODUCTS,
    }
};
export const getProductsSuccess = (products)=>{
    return {
        type: ActionType.GET_PRODUCTS_SUCCESS,
        payload: products
    }
};
export const getProductsFailed = (err) =>{
    return{
        type: ActionType.GET_PRODUCTS_FAILURE,
        payload: err
    }
};

export const getProductInfo = (url, productData, successCallback, failureCallback) =>{
    if (!productData.chosen){
        url = url || URLS.SHOW_PRODUCT_INFO(productData.idsp);
        axios.get(url)
            .then(res => successCallback(res.data))
            .catch(err => failureCallback(err));
    }

    return{
        type: ActionType.GET_PRODUCT_INFO,
        payload: productData
    }
};
export const getProductInfoSuccess = (info) =>{
    return {
        type: ActionType.GET_PRODUCT_INFO_SUCCESS,
        payload: info
    }
};
export const getProductInfoFailed = (err) =>{
    return{
        type: ActionType.GET_PRODUCT_INFO_FAILURE,
        payload: err
    }
};

export const updateProductInfo = (url, newInfo, successCallback, failureCallback) =>{
    url = url || URLS.UPDATE_PRODUCT_INFO(newInfo.idnhacc);
    axios.put(url, {
        anhdaidien: null,
        tennhacc: newInfo.tennhacc,
        diachinhacc: newInfo.diachinhacc
    })
        .then(res => successCallback(res.data))
        .catch(err => failureCallback(err));
    // console.log({anhdaidien: null, tennhacc: newInfo.tennhacc});
    return{
        type: ActionType.UPDATE_PRODUCT_INFO
    }
};
// export const updateProductInfoSuccess = (newProducts)=>{
//   return {
//       type: ActionType.UPDATE_PRODUCT_INFO_SUCCESS,
//       payload: newProducts
//   }
// };
export const updateProductInfoFailure = (err) =>{
    return{
        type: ActionType.UPDATE_PRODUCT_INFO_FAILURE,
        payload: err
    }
};

export const addProduct = (url, productData, successCallback, failureCallback) =>{
    url = url || URLS.ADD_PRODUCT;
    axios.post(url, productData)
        .then(res => successCallback())
        .catch(err => failureCallback(err));
    return {
        type: ActionType.ADD_PRODUCT
    }
};
export const addProductSuccess = () =>{
    return{
        type: ActionType.ADD_PRODUCT_SUCCESS
    }
};
export const addProductFailed = (err) =>{
    return{
        type: ActionType.ADD_PRODUCT_FAILURE,
        payload: err
    }
};

export const toggleSingleProductModal = () =>{
    return{
        type: ActionType.TOGGLE_SINGLE_PRODUCT_MODAL
    }
};

export const toggleMultipleProductModal = () =>{
    return{
        type: ActionType.TOGGLE_MULTIPLE_PRODUCT_MODAL
    }
};