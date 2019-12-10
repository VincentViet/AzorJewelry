import React from "react";
import './RegisterPageContent.css';
import
{
    Row,
    Card
} from 'antd'
import {RegisterForm} from './RegisterForm'

const REGISTER_URL = '';
export function RegisterPageContent(props) {
    return (
        <Row type="flex" justify="center" align="middle">
            <Card
                hoverable={true}
                style={{
                    // backgroundColor: 'white',
                    width: '500px'
                }}
            >
                <RegisterForm url={REGISTER_URL} />
            </Card>
        </Row>
    )
}