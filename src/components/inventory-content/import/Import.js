import React from "react";

import {Card, Col, Divider, Row} from "antd";
import {ImportDeliveryInfo} from "../ImportDeliveryInfo";
import {ImportTable} from "../ImportTable";
import {PaymentInfo} from "../PaymentInfo";
import {ProviderInfo} from "../ProviderInfo";

import './Import.css'

export function Import(props) {

    const data = [
        {
            key: 0,
            id: 'SS001',
            name: 'Vòng tay lắc',
            amount: 105
        }
    ];
    const tabsStyle = {
        marginLeft: 10,
        marginRight: 10
    };

    return (
        <Card>
            <Row>
                <Col span={14}>
                    <ImportTable dataSource={data} />
                    <Divider type="horizontal" />
                    <ImportDeliveryInfo />
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
                        <ProviderInfo tabsStyle={tabsStyle} />
                    </Row>
                    <Row>
                        <PaymentInfo tabsStyle={tabsStyle} />
                    </Row>
                </Col>
            </Row>
        </Card>
    )
}