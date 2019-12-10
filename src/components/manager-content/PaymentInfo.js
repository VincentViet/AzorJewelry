import React from 'react'
import
{
    Tabs,
    Descriptions,
} from 'antd'

export function PaymentInfo(props)
{
    return (
        <Tabs
            type="card"
            style={props.tabsStyle}>
            <Tabs.TabPane
                key="payment"
                tab="Thanh toán">
                <Descriptions
                    bordered
                    column={1}
                    layout="horizontal">
                    <Descriptions.Item label="VAT">
                        %
                    </Descriptions.Item>
                    <Descriptions.Item label="Chiết khấu">
                        %
                    </Descriptions.Item>
                    <Descriptions.Item label="Tổng tiền">
                        VNĐ
                    </Descriptions.Item>
                    <Descriptions.Item label="Tiền thối">
                        VNĐ
                    </Descriptions.Item>
                    <Descriptions.Item label="Khách đưa">
                        VNĐ
                    </Descriptions.Item>
                </Descriptions>
            </Tabs.TabPane>
            <Tabs.TabPane
                key="inDebt"
                tab="Nợ">
                <Descriptions
                    bordered
                    column={1}
                    layout="horizontal">
                    <Descriptions.Item label="VAT">
                        %
                    </Descriptions.Item>
                    <Descriptions.Item label="Chiết khấu">
                        %
                    </Descriptions.Item>
                    <Descriptions.Item label="Tổng tiền">
                        VNĐ
                    </Descriptions.Item>
                </Descriptions>
            </Tabs.TabPane>
        </Tabs>
    )
}