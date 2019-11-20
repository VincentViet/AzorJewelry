import React from 'react'
import
{
    Card,
    Row,
    Col,
    Divider
} from 'antd'

import { SearchBar } from '../SearchBar'
import { ClientInfo } from '../ClientInfo'
import { PaymentInfo } from '../PaymentInfo'
import { ServiceTable } from '../ServiceTable'
import { DeliveryInfo } from '../DeliveryInfo'

import './Service.css'

export function Service(props)
{
    const tabsStyle = {
        marginLeft: 10,
        marginRight: 10
    }

    let data = [
        {
            key: '0',
            name: 'Nguyễn Văn A',
            amount: 1,
            price: 200000
        },
        {
            key: '1',
            name: 'Nguyễn Văn B',
            amount: 1,
            price: 200000
        },
        {
            key: '2',
            name: 'Nguyễn Văn C',
            amount: 1,
            price: 200000
        }
    ]
    
    return (
        <Card>
            <Row>
                <Col span={14}>
                    <Row>
                        <SearchBar placeHolder="Nhập tên hoặc mã mặt hàng"/>
                        <ServiceTable dataSource={data} />
                    </Row>
                    <Row>
                        <Divider type="horizontal" />    
                    </Row>
                    <Row><DeliveryInfo /></Row>
                </Col>
                <Col span={2}>
                    <Divider
                        style={{
                            height: 1000,
                            marginLeft: 50,
                            // backgroundColor: "#42376A"
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