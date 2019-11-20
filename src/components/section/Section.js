import React from 'react'
import { Row, Col, Card } from 'antd'

import './Section.css'
import { GoldProduct } from '../gold-product'

export function Section(props)
{
    return (
        <>
            <Card title={props.title}>
                <Row>
                    <Col span={8}>
                        <GoldProduct />
                    </Col>
                    <Col span={8}>
                        <GoldProduct />
                    </Col>
                    <Col span={8}>
                        <GoldProduct />
                    </Col>
                </Row>
            </Card>
        </>
    )
}