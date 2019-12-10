import React from 'react'

import { Layout } from 'antd'

import
{
    Header,
    InventoryContent as Content,
    Footer
} from '../../components'

const headerStyles = {
    backgroundColor: '#FFF',
}

const footerStyles = {
    backgroundColor: '#FFF',
    marginTop: 10
}

export function InventoryPage(props)
{
    return (
        <Layout>
            <Layout.Header style={headerStyles}>
                <Header hideSearchBar />
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