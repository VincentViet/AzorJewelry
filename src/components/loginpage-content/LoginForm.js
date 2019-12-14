import React from 'react'

import { Row, Typography, Input, Button, Icon, Form, Checkbox } from 'antd';
import logo from '../../images/j-logo.png'

import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { loggingRequest, loggingSuccess, loggingFailure } from '../../store/login'

import Cookies from 'js-cookie'

const { Title } = Typography;


const NHAN_VIEN_INFO_URL = 'http://26.154.82.91:3000/nhanvien/profile';

const LF = (props) =>
{
    const { getFieldDecorator } = props.form;

    const loading = useSelector(state => state.login.logging);
    const err = useSelector(state => state.login.err);
    const dispatch = useDispatch();

    // const logging = (username, pass, remember) =>
    // {
    //
    // };

    const onLogin = (e) =>
    {
        e.preventDefault();
        props.form.validateFields((err, values) =>
        {
            if (!err)
            {
                // console.log('Received values of form: ', values);
                dispatch(loggingRequest());
                axios.post(props.url, {
                    tendangnhap: values.username,
                    matkhau: values.password
                })
                    .then(res =>
                    {
                        // console.log(res.data.taikhoan);
                        if (res.data.valid){
                            const taiKhoan = res.data.data;
                            axios.get(`${NHAN_VIEN_INFO_URL}/${taiKhoan.idnv}`)
                                .then(res=>{
                                    dispatch(loggingSuccess(taiKhoan))
                                }).catch(err => dispatch(loggingFailure(err)))
                        }else
                            dispatch(loggingFailure({message: 'Tên đăng nhập hoặc mật khẩu không đúng ?'}))
                    }).catch(err => dispatch(loggingFailure(err)))
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

export const LoginForm = Form.create({name: 'loginForm'})(LF);