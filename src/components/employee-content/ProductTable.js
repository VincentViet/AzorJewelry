import React from 'react'
import
{
    Table,
    InputNumber,
} from 'antd'

export function ProductTable(props)
{
    const columns = [
        {
            title: "Tên sản phẩm",
            dataIndex: "name",
        },
        {
            title: "Số lượng",
            dataIndex: "amount",
            render: (text, record, index) =>
            {
                return (
                    <InputNumber
                        min={1}
                        defaultValue={text}
                        // onChange={(value) =>
                        // {
                        //     onChange(value, text, record, index)
                        // }}
                        // formatter={(value) =>
                        // {
                        //     return parseInt(value, 10)
                        // }}
                        // parser={(value) =>
                        // {
                        //     return parseInt(value, 10)
                        // }}
                    />
                )
            }
        },
        {
            title: "Đơn giá",
            dataIndex: "price"
        },
        {
            title: 'Loại sản phẩm',
            dataIndex: 'category',
            filters: [
                {
                    text: 'Loại A',
                    value: 'Loại A'
                },
                {
                    text: 'Loại B',
                    value: 'Loại B'
                },
                {
                    text: 'Loại C',
                    value: 'Loại C'
                },
            ],
            filterMultiple: true,
            onFilter: (value, record) => record.category === value
        }
    ]
    return (
        <Table
            columns={columns}
            style={{ marginTop: 20 }}
            dataSource={props.dataSource}
        />
    )
}