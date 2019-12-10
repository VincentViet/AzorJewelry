import React from "react";
import {Table} from "antd";

export function TransactionHistory(props) {

    const columns = [
        {
            title: "Mã hoá đơn",
            dataIndex: "id",
        },
        {
            title: "Giá trị",
            dataIndex: "price",
        },
        {
            title: "Thời gian",
            dataIndex: "date",
        },
    ];

    return (
        <Table
            columns={columns}
            style={{ marginTop: 20 }}
            dataSource={props.dataSource}
            title={() => "Lịch sử giao dịch"}
        />
    )
}