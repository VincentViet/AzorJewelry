import React, { useState } from 'react'
import { Map, List } from 'immutable'
import
{
    Table,
    Select,
    Button,
    Icon,
    Row,
    Popconfirm
} from 'antd'

export function ClientTable(props)
{
    const [state, setState] = useState({
        editable: Map(),
        data: List(props.dataSource)
    })

    const columns = [
        {
            title: "Tên khách hàng",
            dataIndex: "name",
        },
        {
            title: "Giới tính",
            dataIndex: "gender",
            render: (value, record, index) =>
            {
                const onChange = (value) =>
                {
                    setState({
                        ...state,
                        data: state.data.set(
                            index,
                            {
                                ...state.data.get(index),
                                gender: value
                            }
                        )
                    })
                    // console.log(props.dataSource)
                }
                return (
                    <Select
                        defaultValue={0}
                        value={state.data.get(index).gender}
                        disabled={!state.editable.get(index)}
                        onChange={onChange}
                        style={{
                            minWidth: 100
                        }}
                    >
                        <Select.Option value={0}>Nam</Select.Option>
                        <Select.Option value={1}>Nữ</Select.Option>
                        <Select.Option value={2}>Không</Select.Option>
                    </Select>
                )
            }
        },
        {
            title: "SĐT",
            dataIndex: "phone"
        }
        ,
        {
            title: "Địa chỉ",
            dataIndex: "address"
        },
        {
            dataIndex: "editing",
            render: (value, record, index) =>
            {
                const onEditButtonClick = () =>
                {
                    setState({
                        ...state,
                        editable: state.editable.set(index, true)
                    })
                }

                const onConfirmClick = () =>
                {
                    setState({
                        ...state,
                        editable: state.editable.set(index, false)
                    })
                }

                const onCancelClick = () =>
                {
                    setState({
                        ...state,
                        editable: state.editable.set(index, false)
                    })
                }

                const onCancelButtonClick = () =>
                {
                    setState({
                        ...state,
                        editable: state.editable.set(index, false)
                    })
                }
                return (
                    <Row type="flex" justify="end">
                        {
                            !state.editable.get(index) &&
                            <Button
                                type="primary"
                                size="small"
                                onClick={onEditButtonClick}>
                                <Icon type="edit" />
                            </Button>
                        }
                        {
                            state.editable.get(index) &&
                            <Popconfirm
                                title='Bạn chắc chắc sửa chứ ?'
                                okText='OK'
                                cancelText='Huỷ'
                                onConfirm={onConfirmClick}
                                onCancel={onCancelClick}
                            >
                                <Button
                                    type="primary"
                                    size="small"
                                    // onClick={onSaveButtonClick}
                                    style={{ marginRight: 5 }}
                                >
                                    <Icon type="save" />
                                </Button>
                            </Popconfirm>
                        }
                        {
                            state.editable.get(index) &&
                            <Button
                                type="danger"
                                size="small"
                                onClick={onCancelButtonClick}>
                                <Icon type="close-circle" />
                            </Button>
                        }
                    </Row>
                )
            }
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