import React from 'react'

import
{
    Row,
    Col,
    Card,
    Divider,
} from 'antd'
import { ProductTable } from '../ProductTable'
import { ProviderTable } from '../ProviderTable'
import {ProductInfo} from "../ProductInfo";

import './List.css'

export function List(props)
{
    return (
        <Card>
            <Row>
                <Col span={16}>
                    <ProductTable />
                    <Divider type="horizontal" />
                    <ProviderTable />
                </Col>
                <Col span={8}>
                    <Row>
                        <ProductInfo/>
                    </Row>
                </Col>
            </Row>
            {/*<Divider type="horizontal" />*/}
        </Card>
    )
}