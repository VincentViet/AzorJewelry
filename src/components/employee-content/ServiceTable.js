import React, { useState } from 'react'
import
{
    Table,
    InputNumber,
    Button,
    Row,
    Popconfirm,
    Icon
} from 'antd'


export function ServiceTable(props)
{
    const [state, setState] = useState({disable: true});
    const columns = [
        {
            title: "Tên dịch vụ",
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
            title: 'Loại dịch vụ',
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