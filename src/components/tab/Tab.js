import React from 'react'
import { Row } from 'antd'

export function Tab(props)
{
    return (
        <>
            <Row>
                <img src={props.src} alt="img" width="60" height="60" />
            </Row>
            <Row>
                {props.text}
            </Row>
        </>
    )
}