import React from 'react';
import { useSelector } from 'react-redux';
import
{
    Row,
    Col,
    Input,
    Button,
    Dropdown,
    Menu,
    Icon
    // Drawer
} from 'antd'

import './Header.css'
import logo from '../../images/store-logo.png'

const { Search } = Input;

export function Header(props)
{
    const taiKhoan = useSelector(state => state.taiKhoan);

    const onLoginBtnClick = () =>
    {

    };

    const handleMenuClick = (e) =>{

    };

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1">
                <Icon type="user" />
                1st menu item
            </Menu.Item>
            <Menu.Item key="2">
                <Icon type="user" />
                2nd menu item
            </Menu.Item>
            <Menu.Item key="3">
                <Icon type="user" />
                3rd item
            </Menu.Item>
        </Menu>
    );
    return (
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
                {taiKhoan ?
                    (<Dropdown
                        overlay={menu}
                        icon={<Icon type="user" />}
                    >
                        Chào, {taiKhoan.hoten}
                    </Dropdown>) :
                    (<Row type="flex" justify="end" align="middle">
                        <Col>
                            <a href='/dangnhap'>
                                <Button type="primary" size='large' onClick={onLoginBtnClick}>Đăng nhập</Button>
                            </a>
                        </Col>
                        <Col>
                            {
                                !props.hideSearchBar &&
                                <Button type="primary" size='large' style={{ margin: 10, backgroundColor: '#B46088' }}>
                                    Đăng kí
                                </Button>
                            }
                        </Col>
                    </Row>
                )}
            </Col>
        </Row>
    )
}