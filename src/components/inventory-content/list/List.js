import React from 'react'

import
{
    Card,
    Row,
    Divider,
    Input,
    Icon,
    Col
} from 'antd'

import { ProductTable } from '../ProductTable'
import { ProviderTable } from '../ProviderTable'

export function List(props)
{
    const productData = [
        {
            key: 0,
            id: 'SS001',
            name: 'Vàng 24k',
            provider: 'SPJ'
        }
    ];

    const providerData = [
        {
            key: 0,
            id: 'SS001',
            name: 'Vàng 24k',
            address: 'jskfjksjfksj'
        }
    ];

    return (
        <Card>
            <Row>
                <Col span={14}>
                    <Input
                        suffix={<Icon type="search" />}
                        placeholder='Nhập tên hoặc mã sản phẩm'
                    />
                    <ProductTable dataSource={productData} />
                    <Divider type="horizontal" />

                    <Input
                        suffix={<Icon type="search" />}
                        placeholder='Nhập tên hoặc mã nhà cung cấp'
                    />
                    <ProviderTable dataSource={providerData} />
                </Col>
                <Col span={2}>
                    <Divider
                        style={{
                            height: 1000,
                            marginLeft: 50,
                        }}
                        type="vertial" />
                </Col>
                <Col span={8}>
                    <h1>Provider Info</h1>
                </Col>
            </Row>
        </Card>
    )
}