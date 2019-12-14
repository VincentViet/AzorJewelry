import React from 'react'

import { Layout } from 'antd'

import
{
    Header,
    EmployeeContent as Content,
    Footer
} from '../../components'

const headerStyles = {
    backgroundColor: '#FFF',
}

const footerStyles = {
    backgroundColor: '#FFF',
}

export function EmployeePage(props) {
    return (
        <Layout>
            <Layout.Header style={headerStyles}>
                <Header hideSearchBar/>
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