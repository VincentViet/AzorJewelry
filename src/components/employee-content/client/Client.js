import React from 'react'

import
{
    Card,
    Row,
    Divider
} from 'antd'

import { SearchBar } from '../SearchBar'
import { ClientTable } from '../ClientTable'
import { TransactionHistory } from '../TransactionHistory'

export function User(props)
{
    const clientData = [
        {
            key: '0',
            name: "Nguyen Van A",
            gender: 0,
            phone: "02302390329",
            address: "jfskjfksjfkj",
        }
    ]
    const historyData = []
    return (
        <Card>
            <Row>
                <SearchBar placeHolder="Nhập tên hoặc mã khách hàng" />
                <ClientTable dataSource={clientData} />
            </Row>
            <Row><Divider type="horizontal" /></Row>
            <Row><TransactionHistory dataSource={historyData}/></Row>
        </Card>
    )
}