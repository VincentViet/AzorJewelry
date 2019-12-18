import
{
    ActionType
} from './actions'
import {List} from "immutable";

const initialState = {
    err: null,
    loading: false,
    employees: List(),
    chosenEmployee: null,
    addModal:{
        visible: false,
        loading: false,
        err: null
    },
    editModal:{
        visible: false,
        loading: false
    }
};

export const employeeReducer = (state = initialState, action) =>
{
    switch (action.type) {
        case ActionType.GET_EMPLOYEES:
            return {
                ...state,
                loading: true
            };
        case ActionType.GET_EMPLOYEES_SUCCESS:
            const list = List(action.payload);

            return {
                ...state,
                loading: false,
                employees: list.map((value, key) => ({
                    ...value,
                    key: key,
                    chosen: false,
                    check: false
                })),
                err: null
            };
        case ActionType.GET_EMPLOYEES_FAILURE:
            return {
                ...state,
                loading: false,
                err: action.payload,
                employees: List()
            };
        case ActionType.CHOOSE_EMPLOYEE:
            const key = action.payload;
            return {
                ...state,
                employees: state.employees.map(value => {
                    if (value.key === key)
                        return{
                            ...value,
                            chosen: !value.chosen
                        };
                    else
                        return {
                            ...value,
                            chosen: false
                        }
                }),
                chosenEmployee: state.employees.get(key)
            };

        case ActionType.TOGGLE_ADD_MODAL:
            return {
              ...state,
              addModal: {
                  ...state.addModal,
                  visible: !state.addModal.visible
              }
            };
        case ActionType.TOGGLE_EDIT_MODAL:
            return {
                ...state,
                editModal: {
                    ...state.editModal,
                    visible: !state.editModal.visible
                }
            };

        case ActionType.ADD_EMPLOYEE:
            return {
                ...state,
                addModal: {
                    ...state.addModal,
                    loading: true
                }
            };
        case ActionType.ADD_EMPLOYEE_SUCCESS:
            const newEmployee = action.payload;
            console.log(newEmployee);
            return {
                ...state,
                employees: state.employees.push({
                    ...newEmployee.nhanvien,
                    taikhoan: {
                        idtk: newEmployee.idtk,
                        hoten: newEmployee.hoten,
                        cmnd: newEmployee.cmnd,
                        ngaysinh: newEmployee.ngaysinh,
                        gioitinh: newEmployee.gioitinh,
                        sdt: newEmployee.sdt,
                        diachi: newEmployee.diachi,
                        anhdaidien: newEmployee.anhdaidien,
                        loaitk: newEmployee.loaitk
                    },
                    key: state.employees.size,
                    chosen: false,
                    check: false
                }),
                addModal: {
                    ...state.addModal,
                    loading: false,
                    err: null
                }
            };
        case ActionType.ADD_EMPLOYEE_FAILURE:
            return {
                ...state,
                addModal: {
                    ...state.addModal,
                    loading: false,
                    err: action.payload
                }
            };

        case ActionType.TOGGLE_CHECK:
            return {
                ...state,
                employees: state.employees.map((value, key)=>{
                    return{
                        ...value,
                        check: key === action.payload ? !value.check : value.check
                    }
                })
            };
        default: return state;
    }
};