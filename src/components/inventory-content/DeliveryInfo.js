import React from 'react'
import
{
    Input,
    Tabs,
    Descriptions, Icon,
} from 'antd'

export function DeliveryInfo(props)
{
    return (
        <Tabs
            type="card"
            style={props.tabsStyle}>
            <Tabs.TabPane
                key="deliver"
                tab="Người giao">
                <Input
                    suffix={<Icon type="search" />}
                    placeholder='Nhập mã hoặc tên nhân viên'
                />
                <Descriptions
                    bordered
                    column={1}
                    layout="horizontal"
                    title="Thông tin nhân viên">
                    <Descriptions.Item label="Họ và tên">
                        Nguyễn Văn A
                    </Descriptions.Item>
                    <Descriptions.Item label="SĐT">
                        0987654321
                    </Descriptions.Item>
                    <Descriptions.Item label="Địa chỉ">
                        xxxxxxxxxxxxxxxx
                    </Descriptions.Item>
                </Descriptions>
            </Tabs.TabPane>
            <Tabs.TabPane
                key="receiver"
                tab="Người nhận">
                <Input
                    suffix={<Icon type="search" />}
                    placeholder='Nhập mã hoặc tên nhân viên'
                />
                <Descriptions
                    bordered
                    column={1}
                    layout="horizontal"
                    title="Thông tin nhân viên">
                    <Descriptions.Item label="Họ và tên">
                        Nguyễn Văn A
                    </Descriptions.Item>
                    <Descriptions.Item label="SĐT">
                        0987654321
                    </Descriptions.Item>
                    <Descriptions.Item label="Địa chỉ">
                        xxxxxxxxxxxxxxxx
                    </Descriptions.Item>
                </Descriptions>
            </Tabs.TabPane>
        </Tabs>
    )
}