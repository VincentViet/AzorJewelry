import React from "react";
import {Table} from "antd";

export function EmployeeTable(props) {

    const columns = [
        {
            title: "Mã nhân viên",
            dataIndex: "id",
        },
        {
            title: "Tên nhân viên",
            dataIndex: "name",
        },
        {
            title: "Loại nhân viên",
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