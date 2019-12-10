import React from 'react'
import
{
    Table,
} from 'antd'


export function BillDetails(props)
{
    const columns = [
        {
            title: "Tên sản phẩm",
            dataIndex: "name",
        },
        {
            title: "Số lượng",
            dataIndex: "amount",
        },
        {
            title: 'Thành tiền',
            dataIndex: 'price',
        }
    ];

    return (
        <Table
            columns={columns}
            style={{ marginTop: 5 }}
            dataSource={props.dataSource}
            title={() => `Chi tiết hoá đơn ${props.billID}`}
        />
    )
}