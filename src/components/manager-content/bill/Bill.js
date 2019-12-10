import React from 'react'
import
{
    Card,
    Row,
    Col,
    Divider, Icon, Input,
} from 'antd'

import { ClientInfo } from "../../employee-content/ClientInfo";
import { PaymentInfo } from "../PaymentInfo";
import { BillTable } from "../BillTable";

import './Bill.css'
import {BillDetails} from "../BillDetails";

const tabsStyle = {
    marginLeft: 10,
    marginRight: 10
};

export function Bill(props)
{

    const billData = [
        {
            key: '0',
            billID: 'SS001',
            employeeID: 1,
            date: '20h35 10/10/2019',
            category: 'Loại A'
        },
    ];

    const billDetails =[
        {
            key: 0,
            name: 'Vàng 24k',
            amount: 5,
            price: '20.000.000 VNĐ'
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
                    <BillTable dataSource={billData} />
                    <Divider />
                    <BillDetails billID='SS001' dataSource={billDetails}/>
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