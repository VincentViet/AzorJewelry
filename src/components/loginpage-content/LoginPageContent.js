import React from 'react'
import './LoginPageContent.css'

import
{
    Card,
    Row,
    Tabs,
    // Icon
} from 'antd'
import { LoginForm } from './LoginForm';

const CLIENT_LOGGING_URL = 'http://localhost:3000/login/khachhang';
const EMPLOYEE_LOGGING_URL = 'http://localhost:3000/login/nhanvien';

export function LoginPageContent(props) {
    // console.log(props.type);
    return (
        <Tabs
            defaultActiveKey={'1'}
            // defaultActiveKey={props.type}
        >
            <Tabs.TabPane
                tab={
                    <span>
                        Khách Hàng
                    </span>
                }
                key={'0'}
            >
                <Row type="flex" justify="center" align="middle">
                    <Card
                        hoverable={true}
                        style={{
                            backgroundColor: 'white',
                            width: '500px'
                        }}
                    >
                        <LoginForm
                            showRegisterLink={true}
                            url={CLIENT_LOGGING_URL} />
                    </Card>
                </Row>
            </Tabs.TabPane>
            <Tabs.TabPane
                tab={
                    <span>
                        Nhân Viên
                    </span>
                }
                key={'1'}
            >
                <Row type="flex" justify="center" align="middle">
                    <Card
                        hoverable={true}
                        style={{
                            backgroundColor: 'white',
                            width: '500px'
                        }}
                    >
                        <LoginForm
                            // showRegisterLink={true}
                            url={EMPLOYEE_LOGGING_URL} />
                    </Card>
                </Row>
            </Tabs.TabPane>
        </Tabs>
    )
}