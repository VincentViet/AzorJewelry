import React from 'react'
import
{
    Card,
    Row,
    Col,
    Divider,
} from 'antd'

import { SearchBar } from '../SearchBar'
import { ClientInfo } from '../ClientInfo'
import { PaymentInfo } from '../PaymentInfo'
import { ProductTable } from '../ProductTable'

import './Bill.css'

const tabsStyle = {
    marginLeft: 10,
    marginRight: 10
}

export function Bill(props)
{

    let data = [
        {
            key: '0',
            name: 'Nguyễn Văn A',
            amount: 1,
            price: 200000,
            category: 'Danh mục A'
        },
        {
            key: '1',
            name: 'Nguyễn Văn B',
            amount: 1,
            price: 200000,
            category: 'Danh mục B'
        },
        {
            key: '2',
            name: 'Nguyễn Văn C',
            amount: 1,
            price: 200000,
            category: 'Danh mục C'
        }
    ]
    return (
        <Card>
            <Row>
                <Col span={14}>
                    <SearchBar placeHolder="Nhập tên hoặc mã mặt hàng"/>
                    <ProductTable dataSource={data} />
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
                    <Row>
                        <ClientInfo tabsStyle={tabsStyle} />
                    </Row>
                    <Row>
                        <PaymentInfo tabsStyle={tabsStyle} />
                    </Row>
                </Col>
            </Row>
        </Card>
    )
}