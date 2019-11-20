import React, { useState } from 'react'
import { Card, Button } from 'antd'

import './GoldProduct.css'
import gold from '../../images/gold-img.jpg'

export function GoldProduct(props)
{
    const str = "Vàng chất lượng cao nhập khẩu từ Hàn xẻng";
    const [state, setState] = useState({hideButton: true})
    return (
        <Card
            hoverable
            onMouseEnter={() => setState({ hideButton: false })}
            onMouseLeave={() => setState({ hideButton: true })}
            cover={
                <img
                    alt="example"
                    src={gold}
                    width="200"
                    height="200"
                />
            }
        >
            {
                !state.hideButton &&
                <Button id="addToCart" >Thêm vào giỏ hàng</Button>
            }
            {str}
        </Card>
    )
}