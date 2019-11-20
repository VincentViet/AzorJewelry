import React from 'react'

import { Layout } from 'antd'
import { Header } from '../../components/header'
import { InventoryContent as Content } from '../../components/inventory-content'

const headerStyles = {
    backgroundColor: '#FFF',
}

const footerStyles = {
    backgroundColor: '#AAA',
    color: 'white',
    textAlign: 'center',
    fontStyle: 'bold',
    fontSize: 50
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
                THIS IS FOOTER
            </Layout.Footer>
        </Layout>
    )
}