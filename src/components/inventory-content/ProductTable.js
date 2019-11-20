import React, { useState } from 'react'
import { Map } from 'immutable'
import
{
    Table,
    Button,
    Icon,
    Row,
    Popconfirm
} from 'antd'

export function ProductTable(props)
{
    const [state, setState] = useState({
        editable: Map()
    })
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
            title: "Nhà cung cấp",
            dataIndex: "provider"
        }
        ,
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