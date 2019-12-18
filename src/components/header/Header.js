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
    const account = useSelector(state => state.login.account);

    const getMenu = (tk) =>{
        switch (tk) {
            case 1:
                return (
                    <Menu
                    >
                        <Menu.Item key="profile">
                            <a href={'/kho'}>
                                <Icon type="user" />
                                &nbsp; Thông tin tài khoản
                            </a>
                        </Menu.Item>
                        <Menu.Item key="logout">
                            <a href={'/dangxuat'}>
                                <Icon type="logout" />
                                &nbsp; Đăng xuất
                            </a>
                        </Menu.Item>
                    </Menu>
                );
            case 2:
                return (
                    <Menu
                    >
                        <Menu.Item key="profile">
                            <a href={'/kho'}>
                                <Icon type="user" />
                                &nbsp; Thông tin tài khoản
                            </a>
                        </Menu.Item>
                        <Menu.Item key="logout">
                            <a href={'/dangxuat'}>
                                <Icon type="logout" />
                                &nbsp; Đăng xuất
                            </a>
                        </Menu.Item>
                    </Menu>
                );
            case 3:
            return (
                <Menu
                >
                    <Menu.Item key="profile">
                        <a href={'/kho'}>
                            <Icon type="user" />
                            &nbsp; Thông tin tài khoản
                        </a>
                    </Menu.Item>
                    <Menu.Item key="logout">
                        <a href={'/dangxuat'}>
                            <Icon type="logout" />
                            &nbsp; Đăng xuất
                        </a>
                    </Menu.Item>
                </Menu>
            );
            case 4:
                return (
                    <Menu
                    >
                        <Menu.Item key="profile">
                            <a href={'/kho'}>
                                <Icon type="user" />
                                &nbsp; Thông tin tài khoản
                            </a>
                        </Menu.Item>
                        <Menu.Item key="logout">
                            <a href={'/dangxuat'}>
                                <Icon type="logout" />
                                &nbsp; Đăng xuất
                            </a>
                        </Menu.Item>
                    </Menu>
                );
            default:
                return (<></>);
        }
    };
    const menu = account ? getMenu(account.taikhoan.loaitk) : null;

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
                {
                    account ?
                    (<Row type={"flex"} justify={"end"} align={"middle"}>
                        <Dropdown.Button overlay={menu} icon={<Icon type="user" />}>
                            Chào, {account.taikhoan.hoten}
                        </Dropdown.Button>
                    </Row>) :
                    (<Row type="flex" justify="end" align="middle">
                        <Col>
                            <a href='/dangnhap'>
                                <Button type="primary" size='large'>Đăng nhập</Button>
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
                    </Row>)
                }
            </Col>
        </Row>
    )
}