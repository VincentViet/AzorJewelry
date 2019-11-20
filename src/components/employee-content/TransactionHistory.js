import React from 'react'

import
{
    Table
} from 'antd'

export function TransactionHistory(props)
{
    const columns = [
        {
            title: "Mã hoá đơn",
            dataIndex: "id",
        },
        {
            title: "Thời gian",
            dataIndex: "date",
        },
        {
            title: "Tổng tiền",
            dataIndex: "total"
        }
    ]

    return (
        <Table
            columns={columns}
            style={{ marginTop: 20 }}
            dataSource={props.dataSource}
            title={() => "Lịch sử giao dịch"}
        />
    )
}