import React from 'react'
import
{
    Input,
    Tabs,
    Descriptions,
} from 'antd'

import { SearchBar } from './SearchBar'

export function ClientInfo(props)
{
    return (
        <Tabs
            type="card"
            style={props.tabsStyle}>
            <Tabs.TabPane
                key="client"
                tab="Khách hàng">
                <SearchBar placeHolder="Tìm khách hàng" />
                <Descriptions
                    bordered
                    column={1}
                    layout="horizontal"
                    title="Thông tin khách hàng">
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
                key="note"
                tab="Ghi chú">
                <Input.TextArea
                    rows={15}
                    placeholder="Nhập ghi chú"
                />
            </Tabs.TabPane>
        </Tabs>
    )
}