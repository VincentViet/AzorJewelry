import React from 'react'
import { Card } from 'antd'

import './GoldProduct.css'
import gold from '../../../images/gold-img.jpg'

export function GoldProduct(props)
{
    const str = "Vàng chất lượng cao nhập khẩu từ Hàn xẻng";
    return (
        <Card
            cover={
                <img
                    alt="example"
                    src={gold}
                    width="200"
                    height="200"
                />
            }
            hoverable
        >
            {str}
        </Card>
    )
}