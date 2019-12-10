import React from "react";

import './Export.css'
import {Card, Col, Divider, Icon, Input, Row} from "antd";
import {ExportDeliveryInfo} from "../ExportDeliveryInfo";
import {ImportTable} from "../ImportTable";
import {ExportInfo} from "../ExportInfo";
import {DeliveryInfo} from "../DeliveryInfo";

export function Export(props) {

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
                    <Row>
                        <Input
                            suffix={<Icon type="search" />}
                            placeholder='Nhập tên hoặc mã sản phẩm'
                        />
                        <ImportTable dataSource={data} />
                    </Row>
                    <Row>
                        <Divider type="horizontal" />
                    </Row>
                    <Row><ExportDeliveryInfo /></Row>
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
                        <ExportInfo tabsStyle={tabsStyle} />
                    </Row>
                    <Row>
                        <DeliveryInfo tabsStyle={tabsStyle} />
                    </Row>
                </Col>
            </Row>
        </Card>
    )
}