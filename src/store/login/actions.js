import axios from 'axios'

export const ActionType = {
    EMPLOYEE_LOGGING_REQUEST : 'EMPLOYEE_LOGGING_REQUEST',
    EMPLOYEE_LOGGING_SUCCESS : 'EMPLOYEE_LOGGING_SUCCESS',
    EMPLOYEE_LOGGING_FAILURE : 'EMPLOYEE_LOGGING_FAILURE',

    EMPLOYEE_AUTO_LOGIN_REQUEST: 'EMPLOYEE_AUTO_LOGIN_REQUEST',

    LOGOUT : 'LOGOUT'
};

const URLS = {
    EMPLOYEE_LOGGING: 'http://localhost:3000/login/nhanvien',
    EMPLOYEE_TOKEN_LOGGING: (token)=> `http://localhost:3000/nhanvien/profile/${token}`
};

export const employeeLoggingRequest = (url, loginInfo, successCallback, failureCallback) =>
{
    url = url || URLS.EMPLOYEE_LOGGING;
    axios.post(url, loginInfo)
        .then(res => {
            const token = res.data.data.idnv;
            if (loginInfo.nhomatkhau)
                localStorage.setItem('azor.jewelry.token', token);

            url = URLS.EMPLOYEE_TOKEN_LOGGING(token);
            axios.get(url)
                .then(res => successCallback(res.data))
                .catch(err => failureCallback(err));
        })
        .catch(err => failureCallback(err));

    return {
        type: ActionType.EMPLOYEE_LOGGING_REQUEST,
    }
};

export const employeeLoggingSuccess = (account) =>
{
    // console.log(account);
    // localStorage.setItem('employeeAccount', account);
    return {
        type: ActionType.EMPLOYEE_LOGGING_SUCCESS,
        payload: account
    }
};

export const employeeLoggingFailure = (err) =>
{
    return {
        type: ActionType.EMPLOYEE_LOGGING_FAILURE,
        payload: err
    }
};

export const employeeAutoLoginRequest = (url, successCallback, failureCallback) =>
{
    const token = localStorage.getItem('azor.jewelry.token');
    if (token){
        url = url || URLS.EMPLOYEE_TOKEN_LOGGING(token);
        axios.get(url)
            .then(res => successCallback(res.data))
            .catch(err => failureCallback(err));
    }

    return {
        type: ActionType.EMPLOYEE_AUTO_LOGIN_REQUEST
    }
};

export const logout = () => {
    localStorage.removeItem('azor.jewelry.token');
    return{
        type: ActionType.LOGOUT
    }
};