import React from "react";

import './Employee.css'
import {Card, Col, Divider, Row} from "antd";
import {EmployeeTable} from "../EmployeeTable";
import {EmployeeInfo} from "../EmployeeInfo";
// import {TransactionHistory} from '../TransactionHistory'

export function Employee(props) {
    const employeeData = [
        {
            key: 0,
            id: 'SS001',
            name: 'Vàng 24k'
        }
    ];
    // const historyData = [
    //     {
    //         key: 0,
    //         id: 'SS001',
    //         price: '1.000.000 VNĐ',
    //         date: '20h35 10/10/2019'
    //     }
    // ];

    return (
        <Card>
            <Row>
                <Col span={8}>
                    <EmployeeTable dataSource={employeeData} />
                    {/*<Divider type="horizontal" />*/}
                    {/*<TransactionHistory dataSource={historyData} />*/}
                </Col>
                <Col span={2}>
                    <Divider
                        style={{
                            height: 1000,
                            marginLeft: 50,
                        }}
                        type="vertial" />
                </Col>
                <Col span={14}>
                    <EmployeeInfo/>
                </Col>
            </Row>
        </Card>
    )
}