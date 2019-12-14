import React from 'react'

import { Layout } from 'antd'
import
{
    // Header,
    LoginPageContent as Content,
    Footer
} from '../../components'

import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const headerStyles = {
    backgroundColor: '#FFF',
    borderBottom: "solid 1px #ddd"
};

const footerStyles = {
    backgroundColor: 'white'
};

export function LoginPage(props)
{
    const taiKhoan = useSelector(state => state.login.taiKhoan);
    const url = (loaiTK) =>{
        // eslint-disable-next-line default-case
        switch (loaiTK) {
            case 1:
                return '/nhanvien';
            case 2:
                return '/quanly';
            case 3:
                return '/kho';
            case 4:
                return '/giamdoc';
        }
        // return '/';
    };
    return (
        taiKhoan ? (<Redirect to={url(taiKhoan.loaitk)}/>) :
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