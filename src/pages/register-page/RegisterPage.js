import React from 'react';
import './RegisterPage.css';

import {Layout} from "antd";
import
{
    // Header,
    RegisterPageContent as Content,
    Footer
} from '../../components'

const headerStyles = {
    backgroundColor: '#FFF',
    borderBottom: "solid 1px #ddd"
};

const footerStyles = {
    backgroundColor: 'white'
};

export function RegisterPage(props) {
    return (
        <Layout>
            <Layout.Header style={headerStyles}>
                {/*<Header />*/}
            </Layout.Header>
            <Layout.Content style={{ marginBottom: 100 }}>
                <Content />
            </Layout.Content>
            <Layout.Footer style={footerStyles}>
                <Footer />
            </Layout.Footer>
        </Layout>
    )
}