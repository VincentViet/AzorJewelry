import React, {useState} from "react";
import {
    Table,
    Form,
    AutoComplete,
    Icon,
    InputNumber,
    Popconfirm,
    Button,
    message
} from "antd";


import {useSelector, useDispatch} from "react-redux";
import {
    addProduct,
    editProduct,
    deleteProduct
} from "../../store/import";

const EditableContext = React.createContext();
const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
    state = {
        editing: false,
    };

    toggleEdit = () => {
        const editing = !this.state.editing;
        this.setState({ editing }, () => {
            if (editing) {
                this.input.focus();
            }
        });
    };

    save = e => {
        const { record, handleSave } = this.props;
        this.form.validateFields((error, values) => {
            if (error && error[e.currentTarget.id]) {
                return;
            }
            this.toggleEdit();
            handleSave({ ...record, ...values });
        });
    };

    renderCell = form => {
        this.form = form;
        const { children, dataIndex, record, title } = this.props;
        const { editing } = this.state;
        return editing ? (
            <Form.Item style={{ margin: 0 }}>
                {form.getFieldDecorator(dataIndex, {
                    rules: [
                        {
                            required: true,
                            message: `${title} is required.`,
                        },
                    ],
                    initialValue: record[dataIndex],
                })(<InputNumber
                        ref={node => (this.input = node)}
                        onPressEnter={this.save}
                        onBlur={this.save} />)}
            </Form.Item>
        ) : (
            <div
                className="editable-cell-value-wrap"
                style={{ paddingRight: 24 }}
                onClick={this.toggleEdit}
            >
                {children}
            </div>
        );
    };

    render() {
        const {
            editable,
            dataIndex,
            title,
            record,
            index,
            handleSave,
            children,
            ...restProps
        } = this.props;
        return (
            <td {...restProps}>
                {editable ? (
                    <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
                ) : (
                    children
                )}
            </td>
        );
    }
}

export function ImportTable(props) {
    const dataColumns = [
        {
            title: "Mã sản phẩm",
            dataIndex: "idsp",
        },
        {
            title: "Tên sản phẩm",
            dataIndex: "tensp",
        },
        {
            title: "Số lượng",
            dataIndex: "soluong",
            editable: true
        },
        {
            dataIndex: 'operation',
            render: (text, record) =>
                <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record)}>
                    <Button type={'danger'} icon={'delete'} />
                </Popconfirm>
        },
        // {
        //     title: "Loại sản phẩm",
        //     dataIndex: "category",
        //     filters: [
        //         {
        //             text: 'Loại A',
        //             value: 'Loại A'
        //         },
        //         {
        //             text: 'Loại B',
        //             value: 'Loại B'
        //         },
        //         {
        //             text: 'Loại C',
        //             value: 'Loại C'
        //         },
        //     ],
        //     filterMultiple: true,
        //     onFilter: (value, record) => record.category === value
        // },
    ];

    const dispatch = useDispatch();
    const importProducts = useSelector(state => {
        const list = state.import.products.valueSeq();
        return list.map((value, key) => ({
            ...value,
            key: key
        }))
    });
    const provider = useSelector(state => state.import.provider);

    const components = {
        body: {
            row: EditableFormRow,
            cell: EditableCell,
        },
    };

    const renderColumns = dataColumns.map(col => {
        if (!col.editable)
            return col;

        return {
            ...col,
            onCell: record => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave: handleSave,
            }),
        }
    });

    const handleDelete = (record) =>{
        console.log(record);
        dispatch(deleteProduct(record))
    };

    const handleSave = row => {
        dispatch(editProduct(row))
    };

    const products = useSelector(state => state.product.products);
    const [state, setState] = useState({
        searchDataSource: null,
    });

    const searchHandler = (value)=>{
        const pattern = new RegExp(value);
        const list = products
            .filter(data => !provider ? data.idsp.match(pattern) :
                data.idsp.match(pattern) &&
                data.nhacungcap.idnhacc === provider.idnhacc
            )
            .map(data => {
                return {
                    text: `${data.idsp} ${data.tensp} [${data.nhacungcap.tennhacc}]`,
                    value: data.idsp,
                };
            });

        setState({
            ...state,
            searchDataSource: list
        });
    };

    const selectHandler = (value) =>{
        const list = products
            .filter(data => data.idsp === value)
            .map(data => ({
                idsp: data.idsp,
                tensp: data.tensp,
                soluong: 0,
                gianhap: data.gianhap
            }));

        dispatch(addProduct(
            list.get(0),
            () => message.error('Bạn chưa chọn nhà cung cấp.')
        ))
    };

    return (
        <>
            <AutoComplete
                allowClear={true}
                suffix={<Icon type="search" />}
                placeholder='Nhập tên hoặc mã sản phẩm'
                style={{width: '100%'}}
                dataSource={
                    state.searchDataSource ? state.searchDataSource.toArray() : []
                }
                onSearch={searchHandler}
                onSelect={selectHandler}
            />
            <Table
                components={components}
                columns={renderColumns}
                style={{ marginTop: 20 }}
                dataSource={importProducts.toArray()}
                rowClassName={() => 'editable-row'}
            />
        </>
    )
}