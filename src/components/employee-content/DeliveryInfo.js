import React from 'react'
import
{
    Descriptions,
    DatePicker,
    Button
} from 'antd'

export function DeliveryInfo(props)
{
    const buttonStyle = {
        backgroundColor: "#42376A",
        marginTop: 10,
        float: "right"
    }
    return (
        <>
            <Descriptions
                bordered
                column={1}
                layout="horizontal"
                title="Giao nhận">
                <Descriptions.Item label="Ngày nhận">
                    <DatePicker format="DD-MM-YYYY" placeholder='Chọn ngày nhận' />
                </Descriptions.Item>
                <Descriptions.Item label="Ngày giao">
                    <DatePicker format="DD-MM-YYYY" placeholder='Chọn ngày giao' />
                </Descriptions.Item>
                <Descriptions.Item label="Địa chỉ nhận">
                    xxxxxxxxxxxxxxxx
                </Descriptions.Item>
                <Descriptions.Item label="Địa chỉ giao">
                    xxxxxxxxxxxxxxxx
                </Descriptions.Item>
            </Descriptions>
            <Button type="primary" style={buttonStyle}>Khách lấy liền</Button>
        </>
    )
}