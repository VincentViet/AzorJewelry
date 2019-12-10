import React from "react";
import {Table} from "antd";

export function ImportTable(props) {
    const columns = [
        {
            title: "Mã sản phẩm",
            dataIndex: "id",
        },
        {
            title: "Tên sản phẩm",
            dataIndex: "name",
        },
        {
            title: "Số lượng",
            dataIndex: "amount"
        },
        {
            title: "Loại sản phẩm",
            dataIndex: "category",
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
        },
    ];

    return (
        <Table
            columns={columns}
            style={{ marginTop: 20 }}
            dataSource={props.dataSource}
        />
    )
}