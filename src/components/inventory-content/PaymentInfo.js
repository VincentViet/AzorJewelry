import React, {useState, useEffect} from 'react'
import
{
    InputNumber,
    Tabs,
    Descriptions,
    Button, message
} from 'antd'
import {useSelector, useDispatch} from "react-redux";
import {
    createImport,
    createImportSuccess,
    createImportFailed
} from "../../store/import/actions";

export function PaymentInfo(props)
{
    const total = useSelector(state => {
       let result = 0;
       state.import.products.forEach(value => {
           result += value.gianhap * value.soluong
       });
       return result;
    });
    const [state, setState] = useState({
        change: 0,
        payment: 0
    });

    useEffect(() => {
        setState({
            ...state,
            change: state.payment - total
        })
    }, [state, total]);

    const formatter = (value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const parser = (value) => value.replace(/VNĐ\s?|(,*)/g, '');

    const changeHandler = (value) =>{
        setState({
            ...state,
            payment: value,
            change: value - total
        })
    };

    const dispatch = useDispatch();
    const importReport = useSelector(state => state.import);
    const paymentHandler = () =>{
        if(state.change >= 0 && total > 0){
            const detail = importReport.products.valueSeq().map(value => ({
                idsp: value.idsp,
                soluong: value.soluong
            }));
            const importInfo = {
                idnv: localStorage.getItem('azor.jewelry.token'),
                danhsach_ctphieu: detail.toArray(),
                thongtin_nhapkho: {
                    idnhacc: importReport.provider.idnhacc
                }
            };

            dispatch(createImport(
                null,
                importInfo,
                () => {
                    message.success('Tạo thành công phiếu nhập hàng.');
                    dispatch(createImportSuccess(total))
                },
                (err) => {
                    message.error(err);
                    dispatch(createImportFailed(err))
                }
            ))
        }else {
            message.error('Số tiền trả chưa đủ.')
        }
    };

    return (
        <Tabs
            type="card"
            style={props.tabsStyle}>
            <Tabs.TabPane
                key="payment"
                tab="Thanh toán">
                <Descriptions
                    bordered
                    column={1}
                    layout="horizontal">
                    <Descriptions.Item label="Tổng tiền">
                        {formatter(total)} &nbsp;VNĐ
                    </Descriptions.Item>
                    <Descriptions.Item label="Tiền thối">
                        {formatter(state.change)} &nbsp;VNĐ
                    </Descriptions.Item>
                </Descriptions>
                <InputNumber
                    style=
                        {{
                            marginTop: 10,
                            width: '100%'
                        }}
                    min={0}
                    step={100000}
                    suffix="VNĐ"
                    placeholder="Tiền trả"
                    formatter={value => `VNĐ ${formatter(value)}`}
                    parser={parser}
                    onChange={changeHandler}
                />
                <Button
                    style={{
                        backgroundColor: "#42376A",
                        marginTop: 20,
                        width: "100%"
                    }}
                    type="primary"
                    onClick={paymentHandler}
                    loading={importReport.loading}
                >
                    Thanh toán
                </Button>
            </Tabs.TabPane>
            <Tabs.TabPane
                key="inDebt"
                tab="Nợ">
                <Descriptions
                    bordered
                    column={1}
                    layout="horizontal">
                    <Descriptions.Item label="VAT">
                        %
                    </Descriptions.Item>
                    <Descriptions.Item label="Chiết khấu">
                        %
                    </Descriptions.Item>
                    <Descriptions.Item label="Tổng tiền">
                        VNĐ
                    </Descriptions.Item>
                </Descriptions>
                <Button
                    style={{
                        backgroundColor: "#42376A",
                        marginTop: 20,
                        width: "100%"
                    }}
                    type="primary">
                    Ghi nợ
                </Button>
            </Tabs.TabPane>
        </Tabs>
    )
}