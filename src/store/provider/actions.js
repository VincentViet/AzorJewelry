import axios from "axios";

export const ActionType = {
    GET_PROVIDERS: 'GET_PROVIDERS',
    GET_PROVIDERS_SUCCESS: 'GET_PROVIDERS_SUCCESS',
    GET_PROVIDERS_FAILURE: 'GET_PROVIDERS_FAILURE',

    GET_PROVIDER_INFO_SUCCESS: 'GET_PROVIDER_INFO',
    GET_PROVIDER_INFO_FAILURE: 'GET_PROVIDER_INFO_FAILURE',

    UPDATE_PROVIDER_INFO: 'UPDATE_PROVIDER_INFO',
    // UPDATE_PROVIDER_INFO_SUCCESS: 'UPDATE_PROVIDER_INFO_SUCCESS',
    UPDATE_PROVIDER_INFO_FAILURE: 'UPDATE_PROVIDER_INFO_FAILURE',

    ADD_PROVIDER: 'ADD_PROVIDER',
    ADD_PROVIDER_SUCCESS: 'ADD_PROVIDER_SUCCESS',
    ADD_PROVIDER_FAILURE: 'ADD_PROVIDER_FAILURE',

    TOGGLE_SINGLE_PROVIDER_MODAL: 'TOGGLE_SINGLE_PROVIDER_MODAL',
    TOGGLE_MULTIPLE_PROVIDER_MODAL: 'TOGGLE_MULTIPLE_PROVIDER_MODAL'
};

const URLS = {
    GET_PROVIDERS: 'http://localhost:3000/kho/nhacungcap',
    UPDATE_PROVIDER_INFO: (id) => `http://localhost:3000/kho/nhacungcap/${id}`,
    ADD_PROVIDER: 'http://localhost:3000/kho/nhacungcap'
};

export const getProviders = (url, successCallback, failureCallback) =>{
    url = url || URLS.GET_PROVIDERS;
    axios.get(url)
        .then(res =>{
            successCallback(res.data)
        }).catch(err => failureCallback(err));

    return {
        type: ActionType.GET_PROVIDERS
    }
};
export const getProvidersSuccess = (providers)=>{
    return {
        type: ActionType.GET_PROVIDERS_SUCCESS,
        payload: providers
    }
};
export const getProvidersFailed = (err) =>{
    return{
        type: ActionType.GET_PROVIDERS_FAILURE,
        payload: err
    }
};


export const getProviderInfoSuccess = (info) =>{
    return {
        type: ActionType.GET_PROVIDER_INFO_SUCCESS,
        payload: info
    }
};
export const getProviderInfoFailed = (err) =>{
    return{
        type: ActionType.GET_PROVIDER_INFO_FAILURE,
        payload: err
    }
};

export const updateProviderInfo = (url, newInfo, successCallback, failureCallback) =>{
    url = url || URLS.UPDATE_PROVIDER_INFO(newInfo.idnhacc);
    axios.put(url, {
        anhdaidien: null,
        tennhacc: newInfo.tennhacc,
        diachinhacc: newInfo.diachinhacc
    })
        .then(res => successCallback(res.data))
        .catch(err => failureCallback(err));
    // console.log({anhdaidien: null, tennhacc: newInfo.tennhacc});
    return{
        type: ActionType.UPDATE_PROVIDER_INFO
    }
};
// export const updateProviderInfoSuccess = (newProviders)=>{
//   return {
//       type: ActionType.UPDATE_PROVIDER_INFO_SUCCESS,
//       payload: newProviders
//   }
// };
export const updateProviderInfoFailure = (err) =>{
    return{
        type: ActionType.UPDATE_PROVIDER_INFO_FAILURE,
        payload: err
    }
};

export const addProvider = (url, providerData, successCallback, failureCallback) =>{
    url = url || URLS.ADD_PROVIDER;
    axios.post(url, providerData)
        .then(res => successCallback())
        .catch(err => failureCallback(err));
    return {
        type: ActionType.ADD_PROVIDER
    }
};

export const addProviderSuccess = () =>{
    return{
        type: ActionType.ADD_PROVIDER_SUCCESS
    }
};

export const addProviderFailed = (err) =>{
    return{
        type: ActionType.ADD_PROVIDER_FAILURE,
        payload: err
    }
};

export const toggleSingleProviderModal = () =>{
    return{
        type: ActionType.TOGGLE_SINGLE_PROVIDER_MODAL
    }
};

export const toggleMultipleProviderModal = () =>{
    return{
        type: ActionType.TOGGLE_MULTIPLE_PROVIDER_MODAL
    }
};