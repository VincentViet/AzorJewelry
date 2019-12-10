import React from 'react'
import
{
    Input,
    Tabs,
    Descriptions,
    Button
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
                    <Descriptions.Item label="Tổng tiền">
                        VNĐ
                    </Descriptions.Item>
                    <Descriptions.Item label="Tiền thối">
                        VNĐ
                    </Descriptions.Item>
                </Descriptions>
                <Input
                    style=
                        {{
                            marginTop: 10,
                        }}
                    suffix="VNĐ"
                    placeholder="Tiền trả"
                />
                <Button
                    style={{
                        backgroundColor: "#42376A",
                        marginTop: 20,
                        width: "100%"
                    }}
                    type="primary">Thanh toán
                </Button>
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
                <Button
                    style={{
                        backgroundColor: "#42376A",
                        marginTop: 20,
                        width: "100%"
                    }}
                    type="primary">
                    Ghi nợ
                </Button>
            </Tabs.TabPane>
        </Tabs>
    )
}