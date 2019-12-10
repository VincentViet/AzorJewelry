import React from 'react'
import
{
    Input,
    Tabs,
    Descriptions, Icon,
} from 'antd'

export function ExportInfo(props)
{
    return (
        <Tabs
            type="card"
            style={props.tabsStyle}>
            <Tabs.TabPane
                key="info"
                tab="Thông tin">
                <Input
                    suffix={<Icon type="search" />}
                    placeholder='Tìm nhà cung cấp'
                />
                <Descriptions
                    bordered
                    column={1}
                    layout="horizontal"
                    title="Thông tin nhà CC">
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