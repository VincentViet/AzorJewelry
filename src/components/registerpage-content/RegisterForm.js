import React, {isValidElement, useState} from 'react'

import {
    Select,
    DatePicker,
    Row,
    Typography,
    Input,
    Button,
    // Icon,
    Form,
    // Checkbox
} from 'antd';
import logo from '../../images/j-logo.png'

import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { loggingRequest, loggingSuccess, loggingFailure } from '../../store/login'

const { Title } = Typography;

const LF = (props) =>
{
    const { getFieldDecorator } = props.form;

    const [state, setState] = useState({confirmDirty: false});

    const loading = useSelector(state => state.login.logging);
    const err = useSelector(state => state.login.err);

    const dispath = useDispatch();
    const logging = (username, pass) =>
    {
        dispath(loggingRequest());
        axios.post(props.url, {
            username: username,
            password: pass
        })
            .then(res =>
            {
                dispath(loggingSuccess(res))
            }).catch(err =>
            {
                dispath(loggingFailure(err))
        })
    };
    const onLogin = (e) =>
    {
        e.preventDefault();
        props.form.validateFields((err, values) =>
        {
            if (!err)
            {
                // console.log('Received values of form: ', values);
                logging(values.username, values.password)
            }
        });
    };

    const validatePassword = (rule, value, callback) => {
        const {form} = props;
        if (value && value.length < 6){
            callback('Mật khẩu phải chứa ít nhất 6 kí tự.');
        }else {
            callback();
        }

        if (value && state.confirmDirty){
            form.validateFields(['xacnhanmatkhau'], {force: true});
        }
    };

    const confirmPassword = (rule, value, callback) =>{
        const {form} = props;

        if (value && value !== form.getFieldValue('matkhau')){
            callback('Mật khẩu không trùng khớp!');
        }else {
            callback();
        }
        // console.log(value, form.getFieldValue('xacnhanmatkhau'));
    };

    const handleConfirmBlur = e => {
        const {value} = e.target;
        setState({confirmDirty: state.confirmDirty || !!value});
        // console.log(state.confirmDirty || !!value);
    };

    return (
        <div>
            <Row type='flex' justify='center' align='middle' style={{marginTop: 50}}>
                <img src={logo} alt='logo' width={100} height={100}/>
            </Row>
            <Row type='flex' justify='center' align='middle'>
                <Title
                    level={3}
                    style={{
                        margin: 50,
                        // color: 'white'
                    }}
                >
                    ĐĂNG KÍ
                </Title>
            </Row>

            <Form onSubmit={onLogin} layout="vertical" labelAlign={"left"}>
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
                    <Form.Item label={"Ngày sinh"} style={{display: 'inline-block', width: 'calc(50% - 12px)'}}>
                        {getFieldDecorator('ngaysinh', {
                            rules: [{
                                required: true
                            }],
                        })(<DatePicker format='DD-MM-YYYY'/>)}
                    </Form.Item>
                    <Form.Item label={"Giới tính"} style={{display: 'inline-block', width: 'calc(50% - 12px)'}}>
                        {getFieldDecorator('gioitinh', {
                            rules: [{
                                required: true
                            }],
                        })(<Select>
                            <Select.Option value={0}>NAM</Select.Option>
                            <Select.Option value={1}>NỮ</Select.Option>
                            <Select.Option value={2}>KHÔNG RÕ</Select.Option>
                        </Select>)}
                    </Form.Item>
                </Form.Item>
                <Form.Item label={"SĐT"} hasFeedback={true}>
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
                <Form.Item>
                    <Button
                        size='large'
                        shape='round'
                        htmlType="submit"
                        loading={loading}
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
                    validateStatus= {err ? 'error' : null}
                    help={err ? err.message : ''} />
            </Form>
        </div>
    )
};

export const RegisterForm = Form.create({name: 'registerForm'})(LF);