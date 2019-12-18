import React, {useState, useEffect} from "react";
import {
    AutoComplete,
    Button,
    Icon,
    Modal,
    Row,
    Table,
    Tooltip,
    Checkbox,
    Form,
    Input,
    InputNumber,
    DatePicker,
    Select, message
} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {
    addEmployee, addEmployeeFailed, addEmployeeSuccess,
    chooseEmployee,
    getEmployee,
    getEmployeeFailed,
    getEmployeeSuccess,
    toggleAddModal,
} from "../../store/employee";

const AddEmployeeForm = Form.create()((props)=>{
    const {getFieldDecorator} = props.form;

    const dispatch = useDispatch();
    const [state, setState] = useState({confirmDirty: false});
    const validatePassword = (rule, value, callback) => {
        const {form} = props;
        if (value && value.length < 8){
            callback('Mật khẩu phải chứa ít nhất 8 kí tự.');
        }else {
            callback();
        }

        if (value && state.confirmDirty){
            form.validateFields(['xacnhanmatkhau'], {force: true});
        }
    };

    const addModal = useSelector(state => state.employee.addModal);

    const confirmPassword = (rule, value, callback) =>{
        const {form} = props;

        if (value && value !== form.getFieldValue('matkhau')){
            callback('Mật khẩu không trùng khớp!');
        }else {
            callback();
        }
    };

    const dateOfBirth = (rule, value, callback) =>{
        if (2019 - value.year() < 18)
            callback('Nhân viên phải lớn hơn 18 tuổi');
        else
            callback()
    };

    const handleConfirmBlur = e => {
        const {value} = e.target;
        setState({confirmDirty: state.confirmDirty || !!value});
    };

    const submitHandler = event =>{
        event.preventDefault();
        props.form.validateFields((err, values) =>
        {
            if (!err)
            {
                const info = {
                    ...values,
                    ngaysinh: `${values.ngaysinh.date()}/${values.ngaysinh.month() + 1}/${values.ngaysinh.year()}`,
                    anhdaidien: null,
                };

                dispatch(addEmployee(
                    null,
                    info,
                    (newEmployee) => {
                        dispatch(addEmployeeSuccess(newEmployee));
                        dispatch(toggleAddModal());
                        message.success('Thêm nhân viên thành công.');
                    },
                    (err) => {
                        dispatch(addEmployeeFailed(err));
                    }
                ))
            }
        });
    };

    const formatter = (value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const parser = (value) => value.replace(/VNĐ\s?|(,*)/g, '');

    return(
        <Form onSubmit={submitHandler} layout="vertical" labelAlign={"left"}>
            <Form.Item label="Tên đăng nhập">
                {getFieldDecorator('tendangnhap', {
                    rules: [{ required: true, message: 'Vui lòng điền tên đăng nhập!' }],
                })(<Input />)}
            </Form.Item>
            <Form.Item label="Mật khẩu" hasFeedback={true}>
                {getFieldDecorator('matkhau', {
                    rules: [
                        {
                            required: true,
                            message: 'Vui lòng điền mật khẩu!'
                        },
                        {
                            validator: validatePassword
                        }],
                })(<Input.Password />)}
            </Form.Item>
            <Form.Item label="Xác nhận mật khẩu" hasFeedback={true}>
                {getFieldDecorator('xacnhanmatkhau', {
                    rules: [
                        {
                            required: true,
                            message: 'Vui lòng điền lại mật khẩu.'
                        },
                        {
                            validator: confirmPassword
                        },
                    ],
                })(<Input.Password onBlur={handleConfirmBlur} />)}
            </Form.Item>
            <Form.Item label={"Họ và tên"}>
                {getFieldDecorator('hoten', {
                    rules: [{ required: true, message: 'Vui lòng điền họ tên.' }],
                })(<Input/>)}
            </Form.Item>
            <Form.Item label={"CMND"}>
                {getFieldDecorator('cmnd', {
                    rules: [{
                        required: true,
                        message: 'Vui lòng điền mật khẩu.'
                    },
                        {
                            pattern: '\\d',
                            message: 'Số CMND không hợp lệ.'
                        }
                    ],
                })(<Input/>)}
            </Form.Item>
            <Form.Item>
                <Form.Item label={"Ngày sinh"}
                           style={{display: 'inline-block', width: 'calc(50% - 12px)'}}
                           hasFeedback={true}>
                    {getFieldDecorator('ngaysinh', {
                        rules: [{
                            required: true
                        }, {
                           validator:  dateOfBirth
                        }],
                    })(<DatePicker format='DD-MM-YYYY'/>)}
                </Form.Item>
                <Form.Item label={"Giới tính"} style={{display: 'inline-block', width: 'calc(50% - 12px)'}}>
                    {getFieldDecorator('gioitinh', {
                        rules: [{
                            required: true
                        }],
                    })(<Select>
                        <Select.Option value={'NAM'}>NAM</Select.Option>
                        <Select.Option value={'NU'}>NỮ</Select.Option>
                        <Select.Option value={'KHONGRO'}>KHÔNG RÕ</Select.Option>
                    </Select>)}
                </Form.Item>
            </Form.Item>
            <Form.Item>
                <Form.Item label={"SĐT"} hasFeedback={true}
                           style={{
                               display: 'inline-block',
                               width: 'calc(50% - 12px)',
                               paddingRight: '40px'
                           }}>
                    {getFieldDecorator('sdt', {
                        rules: [{
                            required: true,
                            message: 'Vui lòng điền số điện thoại.'
                        },
                            {
                                pattern: '^(0|\\+84)(\\s|\\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\\d)(\\s|\\.)?(\\d{3})(\\s|\\.)?(\\d{3})$',
                                message: 'Số điện thoại không hợp lệ.'
                            }
                        ],
                    })(<Input/>)}
                </Form.Item>
                <Form.Item label={"Chức vụ"} style={{display: 'inline-block', width: 'calc(50% - 12px)'}}>
                    {getFieldDecorator('chucvu', {
                        rules: [{
                            required: true
                        }],
                    })(<Select>
                        <Select.Option value={1}>NHÂN VIÊN BÁN HÀNG</Select.Option>
                        <Select.Option value={2}>NHÂN VIÊN QUẢN LÝ NHÂN SỰ</Select.Option>
                        <Select.Option value={3}>NHÂN VIÊN QUẢN LÝ KHO</Select.Option>
                        <Select.Option value={4}>GIÁM ĐỐC</Select.Option>
                    </Select>)}
                </Form.Item>
            </Form.Item>
            <Form.Item>
                <Form.Item label={"Địa chỉ"}
                           style={{
                               display: 'inline-block',
                               width: 'calc(50% - 12px)',
                               paddingRight: '40px'
                           }}>
                    {getFieldDecorator('diachi', {
                        rules: [{
                            required: true,
                            message: 'Vui lòng điền mật khẩu.'
                        }],
                    })(<Input/>)}
                </Form.Item>
                <Form.Item label={"Lương cơ bản"}
                           style={{
                               display: 'inline-block',
                               width: 'calc(50% - 12px)'
                           }}>
                    {getFieldDecorator('luongcoban', {
                        rules: [{
                            required: true,
                            message: 'Vui lòng điền mật khẩu.'
                        }],
                    })(<InputNumber
                        style={{
                            width: '100%'
                        }}
                        formatter={value => formatter(value)}
                        parser={parser}
                        min={0}
                        step={100000}
                    />)}
                </Form.Item>
            </Form.Item>
            <Form.Item>
                <Button
                    size='large'
                    shape='round'
                    htmlType="submit"
                    loading={addModal.loading}
                    style={{
                        backgroundColor: '#42376A',
                        color: 'white',
                        width: '100%',
                        marginTop: 20
                    }}
                >
                    Đăng kí
                </Button>
            </Form.Item>
            <Form.Item
                validateStatus= {addModal.err ? 'error' : null}
                help={addModal.err ? addModal.err.message : ''} />
        </Form>
    )
});

export function EmployeeTable(props) {

    const columns = [
        {
          dataIndex: 'chosen',
          fixed: 'left',
          render: (value)=>{
              return (<Checkbox checked={value}/>)
          }
        },
        {
          title: "Mã nhân viên",
          dataIndex: "manv"
        },
        {
            title: "Tên nhân viên",
            dataIndex: "tennv",
        },
        {
            title: "Chức vụ",
            dataIndex: "chucvu",
            filters: [
                {
                    text: 'Nhân viên bán hàng',
                    value: 1
                },
                {
                    text: 'Nhân viên quản lý nhân sự',
                    value: 2
                },
                {
                    text: 'Nhân viên quản lý kho',
                    value: 3
                },
                {
                    text: 'Giám đốc',
                    value: 4
                }
            ],
            filterMultiple: true,
            onFilter: (value, record) => record.chucvu === value,
            render: (value) =>{
                let result = '';
                if (value === 1)
                    result = 'Nhân viên bán hàng';
                else if(value === 2)
                    result = 'Nhân viên quản lý nhân sự';
                else if (value === 3)
                    result = 'Nhân viên quản lý kho';
                else if (value === 4)
                    result = 'Giám đốc';
                return result;
            }
        },
    ];

    const dispatch = useDispatch();
    const [state, setState] = useState({
        searchDataSource: null,
        tableDataSource: null
    });

    const employees = useSelector(state => state.employee.employees.map((data,key) =>{
        return{
            manv: `NV00${key}`,
            tennv: data.taikhoan.hoten,
            chucvu: data.chucvu,
            key: data.key,
            chosen: data.chosen
        }
    }));

    const addModal = useSelector(state => state.employee.addModal);

    useEffect(() =>{
        dispatch(getEmployee(
            null,
            (data) => dispatch(getEmployeeSuccess(data)),
            (err) => dispatch(getEmployeeFailed(err))
        ))
    },[dispatch]);

    const searchHandler = (value) =>{
        if (value || value !== ''){
            const pattern = new RegExp(value);
            const list = employees
                .filter(data => data.manv.match(pattern) || data.tennv.match(pattern))
                .map(data => {
                    if (data.manv.match(pattern)) {
                        return data.manv;
                    } else {
                        return data.tennv;
                    }
                });

            setState({
                ...state,
                searchDataSource: list
            });
        }else
            setState({
                ...state,
                tableDataSource: null
            });
    };

    const selectHandler = (value) =>{
        const pattern = new RegExp(value);
        const list = employees
            .filter(data => data.manv.match(pattern) || data.tennv.match(pattern));
        setState({
            ...state,
            tableDataSource: list
        });
    };

    const rowClickHandler = (record, rowIndex)=>{
        dispatch(chooseEmployee(record.key));
        if (state.tableDataSource){
            setState({
                ...state,
                tableDataSource: state.tableDataSource.map((value, key) =>{
                    if (key === rowIndex)
                        return{
                            ...value,
                            chosen: !value.chosen
                        };
                    else
                        return {
                            ...value,
                            chosen: false
                        }
                })
            })
        }
    };

    return (
        <>
            <AutoComplete
                allowClear={true}
                suffix={<Icon type="search" />}
                placeholder='Nhập tên hoặc mã nhân viên'
                style={{width: '100%'}}
                dataSource={state.searchDataSource ? state.searchDataSource.toArray() : []}
                onSearch={searchHandler}
                onSelect={selectHandler}
            />
            <Row
                type="flex"
                justify="start"
                align="middle"
                style={{marginTop: 20}}
            >
                <Tooltip
                    placement="top"
                    title="Thêm nhân viên"
                >
                    <Button
                        type="primary"
                        icon="plus"
                        style={{ marginRight: 10 }}
                        onClick={() => dispatch(toggleAddModal())}
                    />
                </Tooltip>
                {
                    // single product modal
                    <Modal
                        visible={addModal.visible || addModal.loading}
                        onOk={() => dispatch(toggleAddModal())}
                        onCancel={()=> dispatch(toggleAddModal())}
                        centered
                        closable
                        title="Thêm nhân viên"
                        footer={null}
                    >
                        <AddEmployeeForm/>
                    </Modal>
                }
            </Row>
            <Table
                columns={columns}

                onRow={(record, rowIndex)=>({
                    onClick: event => {
                        event.preventDefault();
                        rowClickHandler(record, rowIndex)
                    }
                })}

                style={{ marginTop: 20 }}
                dataSource={state.tableDataSource ? state.tableDataSource.toArray() : employees.toArray()}
            />
        </>
    )
}