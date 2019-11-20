import React from 'react'

import { Row, Col, Typography, Input, Button, Icon, Form, Checkbox } from 'antd';
import logo from '../../images/j-logo.png'

import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { loggingRequest, loggingSuccess, loggingFailure } from '../../store/login'

const { Title } = Typography;
const LOGGING_URL = 'http://localhost:4000/login'

const LF = (props) =>
{
    const { getFieldDecorator } = props.form;

    const loading = useSelector(state => state.login.logging)
    const err = useSelector(state => state.login.err)

    const dispath = useDispatch()
    const logging = (username, pass) =>
    {
        dispath(loggingRequest())
        axios.post(LOGGING_URL, {
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
    }
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
    }

    return (
        <div>
            <Row type='flex' justify='center' align='middle'>
                <img src={logo} alt='logo' width={100} height={100}/>
            </Row>
            <Row type='flex' justify='center' align='middle'>
                <Title level={3} style={{ color: 'white', margin: 50}}>ĐĂNG NHẬP</Title>
            </Row>

            <Row type='flex' justify='center' align='middle'>
                {/* <Input.Group size='large'>
                    
                </Input.Group> */}

                <Form onSubmit={onLogin} layout="vertical">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox style={{color: 'white'}}>Nhớ Mật Khẩu</Checkbox>)}
                        <Button type='link' style={{color: 'white'}}>
                            Quên Mật Khẩu ?
                        </Button>
                        {/* <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button> */}

                        <Button
                            size='large'
                            shape='round'
                            htmlType="submit"
                            loading={loading}
                            style={{
                                backgroundColor: '#42376A',
                                color: 'white',
                                width: '100%'
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

            {/* <Row type='flex' justify='center' align='middle' style={{ marginTop: 20 }}>
                
            </Row> */}

            <Row type='flex' justify='center' align='middle' style={{marginTop: 50}}>
                <Button
                    type='link'
                    size='large'
                    style={{ color: 'white', fontSize: 20 }}
                >hoặc xem với tư cách khách hàng</Button>
            </Row>

            <Row type='flex' justify='center' align='middle'>
                <Col>
                    <Button size='large' style={{margin: 10}}>
                        <Icon type="facebook" theme="filled" />
                    </Button>
                </Col>
                <Col>
                    <Button size='large' style={{ margin: 10 }}>
                        <Icon type="google-circle" theme="filled" />
                    </Button>
                </Col>
                <Col>
                    <Button size='large' style={{ margin: 10 }}>
                        <Icon type="twitter-circle" theme="filled" />
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

export const LoginForm = Form.create({name: 'loginForm'})(LF) 