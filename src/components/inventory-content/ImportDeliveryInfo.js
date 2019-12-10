import React from 'react'
import
{
    Descriptions,
    DatePicker,
} from 'antd'

export function ImportDeliveryInfo(props)
{
    return (
        <>
            <Descriptions
                bordered
                column={1}
                layout="horizontal"
                title="Giao nhận">
                <Descriptions.Item label="Ngày yêu cầu">
                    <DatePicker format="DD-MM-YYYY" placeholder='Chọn ngày yêu cầu' />
                </Descriptions.Item>
                <Descriptions.Item label="Ngày nhận">
                    <DatePicker format="DD-MM-YYYY" placeholder='Chọn ngày nhận' />
                </Descriptions.Item>
                <Descriptions.Item label="Địa chỉ nhập">
                    xxxxxxxxxxxxxxxx
                </Descriptions.Item>
            </Descriptions>
        </>
    )
}