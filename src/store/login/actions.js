export const LOGGING_REQUEST = 'LOGGING_REQUEST';
export const LOGGING_SUCCESS = 'LOGGING_SUCCESS';
export const LOGGING_FAILURE = 'LOGGING_FAILURE';

export const loggingRequest = () =>
{
    return {
        type: LOGGING_REQUEST,
    }
};

export const loggingSuccess = (data) =>
{
    return {
        type: LOGGING_SUCCESS,
        payload: data
    }
};

export const loggingFailure = (err) =>
{
    return {
        type: LOGGING_FAILURE,
        payload: err
    }
};