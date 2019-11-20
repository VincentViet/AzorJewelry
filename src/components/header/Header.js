import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Input, Button, Drawer } from 'antd'

import { LoginForm } from '../login-form';
import { toggleLoginDrawer } from '../../store/login'


import './Header.css'
import logo from '../../images/store-logo.png'

const { Search } = Input

export function Header(props)
{
    const visible = useSelector(state => state.login.visible)
    const dispatch = useDispatch()

    const onLoginBtnClick = () =>
    {
        dispatch(toggleLoginDrawer())
    }
    return ( 
        <>
            <Row>
                <Col span={4}>
                    <img src={logo} alt="Logo" width={180} height={50} />
                </Col>
                <Col span={12}>
                    {
                        !props.hideSearchBar &&
                        <Search
                            placeholder="Bạn muốn mặt hàng nào?"
                        />
                    }
                </Col>
                <Col span={8}>
                    <Row type="flex" justify="space-around" align="middle">
                        <Col>
                            <Button type="primary" size='large' onClick={onLoginBtnClick}>Đăng nhập</Button>
                        </Col>
                        <Col>
                            <Button icon="phone" size='large' style={{ backgroundColor: '#B46088', color: 'white' }}>
                                Liên hệ
                        </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Drawer
                visible={visible}
                closable={false}
                width={500}
                drawerStyle={{ backgroundColor: '#B46088' }}
                onClose={onLoginBtnClick}
            >
                <LoginForm/>
            </Drawer>
        </>
    )
}