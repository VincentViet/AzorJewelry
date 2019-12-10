import React from 'react'
import
{
    Descriptions,
    DatePicker,
} from 'antd'

export function ExportDeliveryInfo(props)
{
    return (
        <>
            <Descriptions
                bordered
                column={1}
                layout="horizontal"
                title="Giao nhận">
                <Descriptions.Item label="Ngày xuất kho">
                    <DatePicker format="DD-MM-YYYY" placeholder='Chọn ngày xuất kho' />
                </Descriptions.Item>
                <Descriptions.Item label="Địa chỉ xuất">
                    xxxxxxxxxxxxxxxx
                </Descriptions.Item>
            </Descriptions>
        </>
    )
}