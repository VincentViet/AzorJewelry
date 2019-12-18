import React, {useEffect} from 'react'

import { Layout } from 'antd'
import
{
    // Header,
    LoginPageContent as Content,
    Footer
} from '../../components'

import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import {
    employeeAutoLoginRequest,
    employeeLoggingSuccess,
    employeeLoggingFailure
} from "../../store/login";

const headerStyles = {
    backgroundColor: '#FFF',
    borderBottom: "solid 1px #ddd"
};

const footerStyles = {
    backgroundColor: 'white'
};

export function LoginPage(props)
{
    const dispatch = useDispatch();
    const account = useSelector(state => state.login.account);
    // const account = localStorage.getItem('employeeAccount');
    const url = (loaiTK) =>{
        switch (loaiTK) {
            case 1:
                return '/nhanvien';
            case 2:
                return '/quanly';
            case 3:
                return '/kho';
            case 4:
                return '/giamdoc';
            default:
                return '/';
        }
    };

    useEffect(() => {
        dispatch(employeeAutoLoginRequest(
            null,
            (account)=> dispatch(employeeLoggingSuccess(account)),
            (err) => dispatch(employeeLoggingFailure(err))
        ))
    }, [dispatch]);

    // console.log(account);

    return (
        account ? (<Redirect to={url(account.taikhoan.loaitk)}/>) :
            (<Layout>
                <Layout.Header style={headerStyles}>
                    {/*<Header />*/}
                </Layout.Header>
                <Layout.Content style={{ marginBottom: 100 }}>
                    <Content type={props.type} />
                </Layout.Content>
                <Layout.Footer style={footerStyles}>
                    <Footer />
                </Layout.Footer>
            </Layout>)
    )
}