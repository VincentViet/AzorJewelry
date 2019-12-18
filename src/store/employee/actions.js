import axios from 'axios'

export const ActionType = {
    GET_EMPLOYEES: 'GET_EMPLOYEES',
    GET_EMPLOYEES_SUCCESS: 'GET_EMPLOYEES_SUCCESS',
    GET_EMPLOYEES_FAILURE: 'GET_EMPLOYEES_FAILURE',

    CHOOSE_EMPLOYEE: 'CHOOSE_EMPLOYEE',

    ADD_EMPLOYEE: 'ADD_EMPLOYEE',
    ADD_EMPLOYEE_SUCCESS: 'ADD_EMPLOYEE_SUCCESS',
    ADD_EMPLOYEE_FAILURE: 'ADD_EMPLOYEE_FAILURE',

    UPDATE_EMPLOYEE: 'UPDATE_EMPLOYEE',
    UPDATE_EMPLOYEE_SUCCESS: 'UPDATE_EMPLOYEE_SUCCESS',
    UPDATE_EMPLOYEE_FAILURE: 'UPDATE_EMPLOYEE_FAILURE',

    TOGGLE_ADD_MODAL: 'TOGGLE_ADD_MODAL',
    TOGGLE_EDIT_MODAL: 'TOGGLE_EDIT_MODAL',

    TOGGLE_CHECK: 'TOGGLE_CHECK'
};

const URLS = {
    GET_EMPLOYEES: 'http://localhost:3000/quanly/nhanvien/',
    ADD_EMPLOYEE: 'http://localhost:3000/quanly/nhanvien'
};

export const getEmployee = (url, successCallback, failedCallback)=>{
    url = url || URLS.GET_EMPLOYEES;
    axios.get(url)
        .then(res => successCallback(res.data))
        .catch(err => failedCallback(err));

    return {
        type: ActionType.GET_EMPLOYEES
    }
};

export const getEmployeeSuccess = (data) =>{
    return{
        type: ActionType.GET_EMPLOYEES_SUCCESS,
        payload: data
    }
};

export const getEmployeeFailed = (err)=>{
    return{
        type: ActionType.GET_EMPLOYEES_FAILURE,
        payload: err
    }
};

export const chooseEmployee = (key)=>{
    return {
        type: ActionType.CHOOSE_EMPLOYEE,
        payload: key
    }
};

export const addEmployee = (url, info, successCallback, failedCallback) =>{
    url = url || URLS.ADD_EMPLOYEE;
    axios.post(url, info)
        .then(res => successCallback(res.data))
        .catch(err => failedCallback(err));
    return{
        type: ActionType.ADD_EMPLOYEE
    }
};

export const addEmployeeSuccess = (newEmployee)=>{
    return{
        type: ActionType.ADD_EMPLOYEE_SUCCESS,
        payload: newEmployee
    }
};
export const addEmployeeFailed = (err)=>{
    return{
        type: ActionType.ADD_EMPLOYEE_FAILURE,
        payload: err
    }
};

export const updateEmployee = (url, info, successCallback, failedCallback) =>{
    return{
        type: ActionType.UPDATE_EMPLOYEE
    }
};

export const updateEmployeeSuccess = ()=>{
    return{
        type: ActionType.UPDATE_EMPLOYEE_SUCCESS,
    }
};
export const updateEmployeeFailed = (err)=>{
    return{
        type: ActionType.UPDATE_EMPLOYEE_FAILURE,
        payload: err
    }
};

export const toggleAddModal = () =>{
    return{
        type: ActionType.TOGGLE_ADD_MODAL
    }
};
export const toggleEditModal = () =>{
    return{
        type: ActionType.TOGGLE_EDIT_MODAL
    }
};

export const toggleCheck = (key) =>{
    return {
        type: ActionType.TOGGLE_CHECK,
        payload: key
    }
};


