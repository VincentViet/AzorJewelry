import React, {useEffect} from 'react'

import {useSelector, useDispatch} from "react-redux";

import
{
    Card,
    Row,
    Divider,
    Input,
    Icon,
    Col
} from 'antd'
import axios from 'axios'
import { ProductTable } from '../ProductTable'
import { ProviderTable } from '../ProviderTable'
import {getProducerInfos} from "../../../store/provider";

const PROVIDER_INFOS_URL = 'http://26.154.82.91:3000/kho/nhacungcap';

export class List extends React.Component
{

    constructor(props) {
        super(props);

        this.productData = [
            {
                key: 0,
                id: 'SS001',
                name: 'Vàng 24k',
                provider: 'SPJ'
            }
        ];

        // this.dispatch = useDispatch();
        // this.providerData = useSelector(state => state.provider.infos);

        // axios.get(PROVIDER_INFOS_URL)
        //     .then(res =>{
        //         this.dispatch(getProducerInfos(res.data))
        //     }).catch(err => console.log(err.message));
    }

    // useEffect(() =>{
    //
    // });

    componentDidMount() {
        console.log('this is List.');
    }

    render() {
        return (
            // <Card>
            //     <Row>
            //         <Col span={14}>
            //             <Input
            //                 suffix={<Icon type="search" />}
            //                 placeholder='Nhập tên hoặc mã sản phẩm'
            //             />
            //             <ProductTable dataSource={this.productData} />
            //             <Divider type="horizontal" />
            //
            //             <Input
            //                 suffix={<Icon type="search" />}
            //                 placeholder='Nhập tên hoặc mã nhà cung cấp'
            //             />
            //             <ProviderTable dataSource={this.providerData.toArray()} />
            //         </Col>
            //         <Col span={2}>
            //             <Divider
            //                 style={{
            //                     height: 1000,
            //                     marginLeft: 50,
            //                 }}
            //                 type="vertial" />
            //         </Col>
            //         <Col span={8}>
            //             <h1>Provider Info</h1>
            //         </Col>
            //     </Row>
            // </Card>
            <>
            </>
        )
    }
}