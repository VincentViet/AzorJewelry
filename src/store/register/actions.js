export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'
export const TOOGLE_REGISTER_DRAWER = 'TOOGLE_REGISTER_DRAWER'

export const toggleRegisterDrawer = () =>
{
    return { type: TOOGLE_REGISTER_DRAWER }
}

export const registerRequest = () =>
{
    return {
        type: REGISTER_REQUEST,
    }
}

export const registerSuccess = (data) =>
{
    return {
        type: REGISTER_SUCCESS,
        payload: data
    }
}

export const registerFailure = (err) =>
{
    return {
        type: REGISTER_FAILURE,
        payload: err
    }
}