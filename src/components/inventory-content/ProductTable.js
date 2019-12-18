import React, { useState, useEffect } from 'react'
import {List, Map} from 'immutable'
import
{
    Table,
    Button,
    Icon,
    Row,
    // Col,
    Popconfirm,
    AutoComplete,
    Input,
    InputNumber,
    Form,
    message,
    Tooltip,
    Modal,
    Upload,
    Checkbox
} from 'antd'

import {connect, useDispatch, useSelector} from 'react-redux'
import {
    getProducts,
    getProductsSuccess,
    getProductsFailed,

    updateProductInfo,
    updateProductInfoFailure,

    addProduct,
    addProductSuccess,
    addProductFailed,

    toggleSingleProductModal,
    toggleMultipleProductModal,

    getProductInfo,
    getProductInfoSuccess,
    getProductInfoFailed
} from "../../store/product";

const EditableContext = React.createContext();
function EditableCell(props){
    const getInputComponent = () =>{
        return props.inputType === 'number' ? <InputNumber/> : <Input/>
    };
    const renderCell = ({getFieldDecorator}) =>{
        const {
            editing,
            title,
            inputType,
            dataIndex,
            record,
            children,
            ...rest
        } = props;

        return(
            <td {...rest}>
                {
                    editing ?
                        (<Row>
                            <Form.Item>
                                {getFieldDecorator(dataIndex, {
                                    rules: [
                                        {
                                            required: true,
                                            message: `Vui lòng nhập ${title}`
                                        }
                                    ],
                                    initialValue: record[dataIndex]
                                })(getInputComponent())}
                            </Form.Item>
                        </Row>) :
                        (<Row>
                            {children}
                        </Row>)
                }
            </td>
        )
    };

    return (
        <EditableContext.Consumer>{renderCell}</EditableContext.Consumer>
    )
}

class ProductForm extends React.Component {
    constructor(props)
    {
        super(props);
        this.uploadChangedHandler = this.uploadChangedHandler.bind(this);
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
        this.state = {
            // formLoading: false,
            imgLoading: false,
            imageUrl: null
        };
    }

    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    uploadChangedHandler(info){
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    }

    formSubmitHandler(){
        const {form} = this.props;
        form.validateFields((errors, row) =>{
            if (errors) {
                errors = Map(errors);
                errors.forEach((value) =>{
                    const errorList = List(value.errors);
                    errorList.forEach((value)=>{
                        message.error(value.message)
                    })
                });
                return;
            }
            const productData = [
                {
                    anhdaidien: null,
                    tennhacc: form.getFieldValue('tennhacc'),
                    diachinhacc: form.getFieldValue('diachinhacc')
                }
            ];

            this.props.addProduct(
                null,
                productData,
                () =>  {
                    message.success('Thêm nhà cung cấp thanh công');
                    this.props.addProductSuccess();
                    this.props.getProducts();
                },
                (err) => {
                    message.error(`${err}`);
                    this.props.addProductFailed(err);
                }
            )
        })
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

        const { imageUrl } = this.state;
        return (
            <Form
                onSubmit={(e) => {
                    e.preventDefault();
                    this.formSubmitHandler()
                }}
            >
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    onChange={this.uploadChangedHandler}
                >
                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: "100%" }} /> : uploadButton}
                </Upload>
                <Form.Item>
                    {
                        getFieldDecorator('tennhacc', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Vui lòng nhập tên nhà cung cấp'
                                }
                            ]
                        })(
                            <Input placeholder="Tên nhà cung cấp" />
                        )
                    }
                </Form.Item>
                <Form.Item>
                    {
                        getFieldDecorator('diachinhacc', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Vui lòng nhập địa chỉ nhà cung cấp'
                                }
                            ]
                        })(
                            <Input placeholder="Địa chỉ nhà cung cấp" />
                        )
                    }
                </Form.Item>
                <Row
                    type="flex"
                    justify="end"
                    align="middle"
                >
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={this.props.singleProductModal.loading}
                        >
                            Thêm
                        </Button>
                    </Form.Item>
                </Row>
            </Form>
        )
    }
}

function mapStateToProps(state) {
    const {product} = state;
    return{
        singleProductModal: product.singleProductModal
    }
}

function mapDispatchToProps(dispatch) {
    return{
        addProduct: (url, productData, successCallback, failureCallback)=>
            dispatch(addProduct(url, productData, successCallback, failureCallback)),
        addProductSuccess: () => dispatch(addProductSuccess()),
        addProductFailed: err => dispatch(addProductFailed(err)),

        getProducts: () => dispatch(getProducts(
            null,
            (products) => dispatch(getProductsSuccess(products)),
            (err) => dispatch(getProductsFailed(err))
        ))
    }
}

ProductForm = connect(mapStateToProps, mapDispatchToProps)(ProductForm);
ProductForm = Form.create({
})(ProductForm);

function EditableTable(props)
{
    const [state, setState] = useState({
        editable: Map(),
        searchDataSource: null,
        tableDataSource: null,
        editingKey: '',
    });

    const products = useSelector(state => state.product.products);
    const singleProductModal = useSelector(state => state.product.singleProductModal);
    const multipleProductModal = useSelector(state => state.product.multipleProductModal);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts(
            null,
            (products) => dispatch(getProductsSuccess(products)),
            (err) => dispatch(getProductsFailed(err))
        ))
    }, [dispatch]);

    const isEditing = record => record.key === state.editingKey;
    const edit = (key)=>{
        setState({editingKey: key})
    };
    const save = (form, key)=>{
        cancel();
        form.validateFields((errors, row) =>{
            if (errors) {
                errors = Map(errors);
                errors.forEach((value) =>{
                    const errorList = List(value.errors);
                    errorList.forEach((value)=>{
                        message.error(value.message)
                    })
                });
                return;
            }
            // console.log(state.tableDataSource ? state.tableDataSource.get(key) : props.dataSource.get(key))
            const idsp =
                state.tableDataSource ?
                    state.tableDataSource.get(key).idsp :
                    // props.dataSource.get(key).idsp;
                    products.get(key).idsp;

            const hideLoading = message.loading('Updating...', 0);
            dispatch(updateProductInfo(
                null,
                {...row, idsp},
                (newProducts) => {
                    hideLoading();
                    message.success('Update thành công.');
                    // dispatch(updateProductInfoSuccess(newProducts))
                    dispatch(getProducts(
                        null,
                        (products) => dispatch(getProductsSuccess(products)),
                        (err) => dispatch(getProductsFailed(err))
                    ))
                },
                (err) => {
                    hideLoading();
                    message.error(`${err}`);
                    dispatch(updateProductInfoFailure(err))
                }
            ))
        })
    };
    const cancel = ()=>{
        setState({editingKey: ''});
    };

    const dataColumns = [
        {
            dataIndex: 'chosen',
            fixed: 'left',
            render: (value, key) => {
                return (
                    <Row type={'flex'} justify={'center'} align={'middle'}>
                        <Checkbox checked={value}/>
                    </Row>
                )
            }
        },
        {
            title: "Mã sản phẩm",
            inputType: 'text',
            dataIndex: "idsp",
            // editable: true,
            sorter: (a, b) => {
                const pattern = /\d+/;
                const id_a = a.idsp.match(pattern);
                const id_b = b.idsp.match(pattern);
                return parseInt(id_a[0], 10) > parseInt(id_b[0], 10);
            },
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: "Tên sản phẩm",
            inputType: 'text',
            dataIndex: "tensp",
            editable: true,
            sorter: (a, b) => a.tensp > b.tensp,
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: "Nhà cung cấp",
            inputType: 'text',
            dataIndex: "tennhacc",
        },
        {
            dataIndex: "editing",
            fixed: 'right',
            render: (value, record) =>
            {
                const {editingKey} = state;
                const editable = isEditing(record);
                return (
                    editable ?
                        (
                            <Row type="flex" justify="center">
                                <EditableContext.Consumer>
                                    {form => (
                                        <Popconfirm
                                            title='Bạn chắc chắc sửa chứ ?'
                                            okText='OK'
                                            cancelText='Huỷ'
                                            onConfirm={() => save(form, record.key)}
                                            onCancel={() => cancel()}
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
                                    )}
                                </EditableContext.Consumer>
                                <Button
                                    type="danger"
                                    size="small"
                                    onClick={() => cancel()}>
                                    <Icon type="close-circle" />
                                </Button>
                            </Row>
                        ) : (
                            <Row type="flex" justify="center">
                                <Button
                                    disabled={editingKey !== ''}
                                    type="primary"
                                    size="small"
                                    onClick={() => edit(record.key)}>
                                    <Icon type="edit" />
                                </Button>
                            </Row>
                        )
                )
            }
        },
        // {
        //     dataIndex: "deleting",
        //     fixed: 'right',
        //     render: (value, record) =>
        //     {
        //         return (
        //             <Popconfirm
        //                 title='Bạn chắc chắc xoá nhà cung cấp này chứ ?'
        //                 okText='OK'
        //                 cancelText='Huỷ'
        //                 onConfirm={() => save(form, record.key)}
        //             >
        //                 <Button
        //                     type="danger"
        //                     size="small"
        //                     style={{ marginRight: 5 }}
        //                 >
        //                     <Icon type="delete" />
        //                 </Button>
        //             </Popconfirm>
        //         )
        //     }
        // }
    ];

    const renderColumns = dataColumns.map(col => {
        if (!col.editable)
            return col;
        return {
            ...col,
            onCell: record => ({
                record,
                inputType: col.inputType,
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record)
            })
        }
    });

    const searchHandler = (value) =>{
        // console.log(products.toArray());
        if (value || value !== ''){
            const pattern = new RegExp(value);
            const list = products
                .filter(data => data.idsp.match(pattern) || data.tensp.match(pattern))
                .map(data => {
                    if (data.idsp.match(pattern)) {
                        return data.idsp;
                    } else {
                        return `${data.tensp}   [${data.tennhacc}]`;
                    }
                });

            setState({
                ...state,
                searchDataSource: list
            });
        }else
            setState({
                ...state,
                tableDataSource: null
            });
    };

    const selectHandler = (value) =>{
        const pattern = new RegExp(value);
        const list = products
            .filter(data => data.idsp.match(pattern) || data.tensp.match(pattern));
        setState({
            ...state,
            tableDataSource: list
        });
    };

    const components = {
        body:{
            cell: EditableCell
        }
    };


    //==================================================================================================================
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
    //==================================================================================================================

    const rowClickHandler = (record, rowIndex) =>{
        if (state.tableDataSource){
            // const key = parseInt(record.key, 10);
            setState({
                ...state,
                tableDataSource: state.tableDataSource.set(rowIndex, {...record, chosen: !record.chosen})
            });

            dispatch(getProductInfo(
                null,
                {...record, key: null},
                (info) => dispatch(getProductInfoSuccess(info)),
                (err) => dispatch(getProductInfoFailed(err))
            ))
        }
        else
        {
            dispatch(getProductInfo(
                null,
                record,
                (info) => dispatch(getProductInfoSuccess(info)),
                (err) => dispatch(getProductInfoFailed(err))
            ))
        }
    };

    return (
        <>
            <AutoComplete
                allowClear={true}
                suffix={<Icon type="search" />}
                placeholder='Nhập tên hoặc mã nhà cung cấp'
                style={{width: '100%'}}
                dataSource={state.searchDataSource ? state.searchDataSource.toArray() : []}
                onSearch={searchHandler}
                onSelect={selectHandler}
            />
            <Row
                type="flex"
                justify="start"
                align="middle"
                style={{marginTop: 20}}
            >
                <Tooltip
                    placement="top"
                    title="Thêm 1 nhà cung cấp"
                >
                    <Button
                        type="primary"
                        icon="plus"
                        style={{ marginRight: 10 }}
                        onClick={() => dispatch(toggleSingleProductModal())}
                    />
                </Tooltip>
                <Tooltip
                    placement="top"
                    title="Thêm nhiều nhà cung cấp"
                >
                    <Button
                        type="primary"
                        icon="file-add"
                        onClick={() => dispatch(toggleMultipleProductModal())}
                    />
                </Tooltip>

                {
                    // single product modal
                    <Modal
                        visible={singleProductModal.visible || singleProductModal.loading}
                        onOk={() => dispatch(toggleSingleProductModal())}
                        onCancel={()=> dispatch(toggleSingleProductModal())}
                        centered
                        closable
                        title="Thêm Sản Phẩm"
                        footer={null}
                    >
                        <ProductForm/>
                    </Modal>
                }

                {
                    // multiple product modal
                    <Modal
                        visible={multipleProductModal.visible || multipleProductModal.loading}
                        onOk={() => dispatch(toggleMultipleProductModal())}
                        onCancel={()=> dispatch(toggleMultipleProductModal())}
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
            <EditableContext.Provider value={props.form}>
                <Table
                    columns={renderColumns}
                    components={components}
                    onRow={(record, rowIndex) =>({
                        onClick: event =>{
                            event.preventDefault();
                            rowClickHandler(record, rowIndex);
                        }
                    })}
                    pagination={{
                        onChange: cancel
                    }}
                    style={{ marginTop: 20}}
                    dataSource={state.tableDataSource ? state.tableDataSource.toArray() : products.toArray()}
                />
            </EditableContext.Provider>
        </>
    )
}

export const ProductTable = Form.create()(EditableTable);