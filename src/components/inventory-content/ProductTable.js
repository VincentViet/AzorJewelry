import React, { useState } from 'react'
import { Map } from 'immutable'
import
{
    Table,
    Button,
    Icon,
    Row,
    Popconfirm,
    Tooltip,
    Modal,
    Form,
    Input,
    Select,
    Col,
    Upload,
    message
} from 'antd'

const { Option } = Select;

class ProductInfoForm extends React.Component {
    constructor(props)
    {
        super(props);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    state = {
        formLoading: false,
        imgLoading: false
    };

    handleCategoryChange(value)
    {
        // console.log(value)
    }

    handleFormSubmit(e)
    {
        e.preventDefault();
        // console.log(this.props)
        // const form = this.props.form;
        // console.log(form.getFieldValue('productName'))
        this.setState({ 
            ...this.state,
            formLoading: true
         });
        setInterval(() => {
            this.setState({
                ...this.state,
                formLoading: false
            })
        }, 5000);
    }

    render()
    {
        const { getFieldDecorator } = this.props.form;
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Ảnh minh hoạ</div>
            </div>
        );

        const { img } = this.state;
        return (
            <Form
                onSubmit={this.handleFormSubmit}
            >
                {/* <Form.Item>
                    
                </Form.Item> */}
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    // beforeUpload={beforeUpload}
                    // onChange={this.handleChange}
                >
                    {img ? <img src={img} alt="avatar" style={{ width: "100%" }} /> : uploadButton}
                </Upload>
                <Form.Item>
                    {
                        getFieldDecorator('productName', {})(
                            <Input placeholder="Tên sản phẩm" />
                        )
                    }
                </Form.Item>
                <Form.Item>
                    <Select
                        placeholder="Loại"
                        onChange={this.handleCategoryChange}
                    >
                        <Option value={0} >Loại A</Option>
                        <Option value={1} >Loại B</Option>
                        <Option value={2} >Loại C</Option>
                    </Select>
                </Form.Item>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item>
                            <Input placeholder="Giá nhập" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item>
                            <Input placeholder="Giá bán" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item>
                            <Input placeholder="Khối lượng" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item>
                            <Input placeholder="Tiêu chuẩn" />
                        </Form.Item>
                    </Col>
                </Row>
                
                <Row
                    type="flex"
                    justify="end"
                    align="middle"
                >
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={this.state.formLoading}
                        >
                            Thêm
                        </Button>
                    </Form.Item>
                </Row>
            </Form>
        )
    }
}

ProductInfoForm = Form.create({
    // mapPropsToFields(props)
    // {
    //     // return {}
    // }
})(ProductInfoForm);

export function ProductTable(props)
{
    const [state, setState] = useState({
        editable: Map(),
        singleProductModal: {
            visible: false
        },
        multipleProductModal: {
            visible: false
        },
    });

    // const productInfoForm = Form.create()(ProductInfoForm)

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
                };

                const onConfirmClick = () =>
                {
                    setState({
                        ...state,
                        editable: state.editable.set(index, false)
                    })
                };

                const onCancelClick = () =>
                {
                    setState({
                        ...state,
                        editable: state.editable.set(index, false)
                    })
                };

                const onCancelButtonClick = () =>
                {
                    setState({
                        ...state,
                        editable: state.editable.set(index, false)
                    })
                };
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
    ];

    // single product modal handlers
    const onSingleProductButtonClick = () =>
    {
        setState({
            ...state,
            singleProductModal: {
                ...state.singleProductModal,
                visible: true
            }
        })
    };

    const onSPM_OKButtonClick = () =>
    {
        setState({
            ...state,
            singleProductModal: {
                ...state.singleProductModal,
                visible: false
            }
        })
    };

    const onSPM_CancelButtonClick = () =>
    {
        setState({
            ...state,
            singleProductModal: {
                ...state.singleProductModal,
                visible: false
            }
        })
    };

    // multiple product modal handlers
    const onMultipleProductButtonClick = () =>
    {
        setState({
            ...state,
            multipleProductModal: {
                ...state.multipleProductModal,
                visible: true
            }
        })
    };

    const onMPM_OKButtonClick = () =>
    {
        setState({
            ...state,
            multipleProductModal: {
                ...state.multipleProductModal,
                visible: false
            }
        })
    };

    const onMPM_CancelButtonClick = () =>
    {
        setState({
            ...state,
            multipleProductModal: {
                ...state.multipleProductModal,
                visible: false
            }
        })
    };

    const onUploadFileChange = (info) =>
    {
        if (info.file.status !== 'uploading')
        {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done')
        {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error')
        {
            message.error(`${info.file.name} file upload failed.`);
        }
    };

    // const postProductsFile = file =>
    // {
    //     console.log(file);
    //     return 'http://www.mocky.io/v2/5dd5e431330000a9d2f38351'
    // };

    return (
        <>
            <Row
                type="flex"
                justify="start"
                align="middle"
                style={{marginTop: 20}}
            >
                <Tooltip
                    placement="top"
                    title="Thêm 1 sản phẩm"
                >
                    <Button
                        type="primary"
                        icon="plus"
                        style={{ marginRight: 10 }}
                        onClick={onSingleProductButtonClick}
                    />
                </Tooltip>
                <Tooltip
                    placement="top"
                    title="Thêm nhiều sản phẩm"
                >
                    <Button
                        type="primary"
                        icon="file-add"
                        onClick={onMultipleProductButtonClick}
                    />
                </Tooltip>

                {
                    // single product modal
                    <Modal
                        visible={state.singleProductModal.visible}
                        onOk={onSPM_OKButtonClick}
                        onCancel={onSPM_CancelButtonClick}
                        centered
                        closable
                        title="Thêm Sản Phẩm"
                        footer={null}
                    >
                        <ProductInfoForm
                            // wrappedComponentRef={
                            //     form => setState({
                            //         ...state,
                            //         form: form
                            //     })
                            // }
                        />
                    </Modal>
                }

                {
                    // multiple product modal
                    <Modal
                        visible={state.multipleProductModal.visible}
                        onOk={onMPM_OKButtonClick}
                        onCancel={onMPM_CancelButtonClick}
                        centered
                        closable
                        title="Thêm Sản Phẩm"
                        footer={null}
                    >
                        <Upload
                            name="file"
                            action='http://www.mocky.io/v2/5dd5e431330000a9d2f38351'
                            onChange={onUploadFileChange}
                            showUploadList={{
                                showDownloadIcon: false
                            }}
                        >
                            <Button icon="upload">
                                Upload .xlsx file
                            </Button>
                        </Upload>
                    </Modal>
                }
            </Row>
            <Table
                columns={columns}
                style={{ marginTop: 20 }}
                dataSource={props.dataSource}
            />
        </>
    )
}