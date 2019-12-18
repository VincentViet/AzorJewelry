import React from 'react'

import
{
    Card,
    Row,
    Divider, Icon, Input
} from 'antd'

import { InventoryTable } from '../InventoryTable'
import { WarningTable } from '../WarningTable'

export function WareHouse(props)
{
    const productData = [
        {
            key: '0',
            id: "SS001",
            name: 'Vòng lắc tay',
            amount: 105,
            days: 34,
        }
    ];
    const warningData = [
        {
            key: '0',
            id: 'SS001',
            name: 'Vòng lắc tay',
            amount: 105,
            price: null,
        }
    ];
    return (
        <Card>
            <Row>
                <Input
                    suffix={<Icon type="search" />}
                    placeholder='Nhập tên hoặc mã sản phẩm'
                />
                <InventoryTable dataSource={productData} />
            </Row>
            <Row><Divider type="horizontal" /></Row>
            <Row>
                <Input
                    suffix={<Icon type="search" />}
                    placeholder='Nhập tên hoặc mã sản phẩm'
                />
                <WarningTable dataSource={warningData}/>
            </Row>
        </Card>
    )
}