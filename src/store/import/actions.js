import axios from 'axios'

export const ActionType = {
    IMPORT_ADD_PRODUCT: 'IMPORT_ADD_PRODUCT',
    IMPORT_EDIT_PRODUCT: 'IMPORT_EDIT_PRODUCT',
    IMPORT_DELETE_PRODUCT: 'IMPORT_DELETE_PRODUCT',

    CHOOSE_PROVIDER: 'CHOOSE_PROVIDER',

    CREATE_IMPORT: 'CREATE_IMPORT',
    CREATE_IMPORT_SUCCESS: 'CREATE_IMPORT_SUCCESS',
    CREATE_IMPORT_FAILED: 'CREATE_IMPORT_FAILED'
};

const URLS = {
    CREATE: 'http://localhost:3000/kho/phieu/7'
};

export const addProduct = (productInfo, callback)=>{
    return {
        type: ActionType.IMPORT_ADD_PRODUCT,
        payload: {
            info: productInfo,
            callback: callback
        }
    }
};

export const editProduct = (productInfo) =>{
    return{
        type: ActionType.IMPORT_EDIT_PRODUCT,
        payload: productInfo
    }
};

export const deleteProduct = (productInfo) =>{
    return{
        type: ActionType.IMPORT_DELETE_PRODUCT,
        payload: productInfo
    }
};

export const chooseProvider = (providerInfo) =>{
    console.log(providerInfo);
    return{
        type: ActionType.CHOOSE_PROVIDER,
        payload: providerInfo
    }
};

export const createImport = (url, importInfo, successCallback, failureCallback)=>{
    // console.log(importInfo);
    url = url || URLS.CREATE;
    axios.post(url, importInfo)
        .then(res => successCallback())
        .catch(err => failureCallback(err));

    return{
        type: ActionType.CREATE_IMPORT,
    }
};

export const createImportSuccess = (total)=>{
    return{
        type: ActionType.CREATE_IMPORT_SUCCESS,
        payload: total
    }
};

export const createImportFailed = (err)=>{
    return{
        type: ActionType.CREATE_IMPORT_FAILED,
        payload: err
    }
};



