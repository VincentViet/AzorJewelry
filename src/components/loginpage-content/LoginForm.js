import React from 'react'

import { Row, Typography, Input, Button, Icon, Form, Checkbox } from 'antd';
import logo from '../../images/j-logo.png'

import { useSelector, useDispatch } from 'react-redux'
import {
    employeeLoggingRequest,
    employeeLoggingSuccess,
    employeeLoggingFailure
} from '../../store/login'

const { Title } = Typography;

const LF = (props) =>
{
    const { getFieldDecorator } = props.form;

    const loading = useSelector(state => state.login.loading);
    const err = useSelector(state => state.login.err);
    const dispatch = useDispatch();

    const onLogin = (e) =>
    {
        e.preventDefault();
        props.form.validateFields((err, values) =>
        {
            if (!err)
            {
                dispatch(employeeLoggingRequest(
                    null,
                    {
                        tendangnhap: values.username,
                        matkhau: values.password,
                        nhomatkhau: values.remember
                    },
                    (account) => dispatch(employeeLoggingSuccess(account)),
                    (err) => dispatch(employeeLoggingFailure(err))
                ))
            }
        });
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
                    ĐĂNG NHẬP
                </Title>
            </Row>

            <Row type='flex' justify='center' align='middle'>
                <Form onSubmit={onLogin} layout="vertical">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Vui lòng điền tên đăng nhập!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="tên đăng nhập"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Vui lòng điền mật khẩu!' }],
                        })(
                            <Input.Password
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="mật khẩu"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>Nhớ Mật Khẩu</Checkbox>)}

                        {
                            props.showRegisterLink &&
                            <a href={"/dangki"}>
                                <Button type='link'>
                                    Chưa có tài khoản ?
                                </Button>
                            </a>
                        }

                        {
                            !props.showRegisterLink &&
                            <a href={"/dangki"}>
                                <Button type='link'>
                                    Quên mật khẩu ?
                                </Button>
                            </a>
                        }

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
                            Đăng nhập
                        </Button>
                    </Form.Item>
                    <Form.Item
                        validateStatus= {err ? 'error' : null}
                        help={err ? err.message : ''} />
                </Form>
            </Row>
        </div>
    )
};

// export const LoginForm = Form.create({name: 'loginForm'})(LF);
export const LoginForm = Form.create({})(LF);