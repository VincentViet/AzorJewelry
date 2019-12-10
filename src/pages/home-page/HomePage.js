import React from 'react'

import { Layout } from 'antd'
import
{
    Header,
    HomePageContent as Content,
    Footer
} from '../../components'

const headerStyles = {
    backgroundColor: '#FFF',
    borderBottom: "solid 1px #ddd"
};

const footerStyles = {
    backgroundColor: 'white'
};

export function HomePage(props)
{
    return (
        <Layout>
            <Layout.Header style={headerStyles}>
                <Header />
            </Layout.Header>
            <Layout.Content style={{ minHeight: 1500 }}>
                <Content />
            </Layout.Content>
            <Layout.Footer style={footerStyles}>
                <Footer />
            </Layout.Footer>
        </Layout>
    )
}