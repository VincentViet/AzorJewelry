import React, { useState } from 'react'
import
{
    Table,
    Button,
    Row,
    Popconfirm,
    Icon
} from 'antd'


export function BillTable(props)
{
    const [state, setState] = useState({disable: true});
    const columns = [
        {
            title: "Mã hoá đơn",
            dataIndex: "billID",
        },
        {
            title: "Mã nhân viên",
            dataIndex: "employeeID",
        },
        {
            title: "Thời gian",
            dataIndex: "date"
        },
        {
            title: 'Loại hoá đơn',
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
    ];

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) =>
        {
            setState({ disable: selectedRows.length === 0 })
        },
        getCheckboxProps: record => ({
            name: record.name,
        }),
        onSelect: (record, selected, selectedRows, nativeEvent) => {
            console.log(selected)
        }
    };

    return (
        <>
            <Row
                type="flex"
                justify="end"
                style={{
                    marginTop: 10,
                }}>
                <Popconfirm
                    title='Bạn chắc chắn xoá những dòng này chứ ?'
                    okText='OK'
                    cancelText='Huỷ'
                    icon={<Icon type="exclamation-circle" />}
                    disabled={state.disable}
                >
                    <Button
                        id="detete-button"
                        type="danger"
                        icon="delete"
                        disabled={state.disable}
                    />
                </Popconfirm>
            </Row>
            <Table
                columns={columns}
                style={{ marginTop: 5 }}
                dataSource={props.dataSource}
                rowSelection={rowSelection}
            />
        </>
    )
}