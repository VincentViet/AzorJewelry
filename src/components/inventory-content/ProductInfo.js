import React from "react";
import {useSelector} from "react-redux";

import {
    Card,
    Badge,
    Descriptions, Result, Row
} from 'antd'

import goldProduct from '../../images/goldProduct.jpg'

export function ProductInfo(props){
    const productInfo = useSelector(state => state.product.productInfo);
    const {Item} = Descriptions;

    console.log(productInfo);
    return(
        productInfo.data ? (
            <Card
                hoverable={true}
                cover={<img alt={'goldProduct'} src={goldProduct}/>}
                loading={productInfo.loading}
            >
                {
                    productInfo.data &&
                    <Descriptions
                        // style={{maxHeight: '100xp'}}
                        column={1}
                        layout={'horizontal'}
                        bordered={true}>
                        <Item style={{fontWeight: 'bold'}} label={'ID SẢN PHẨM'}>{productInfo.data.idsp}</Item>
                        <Item label={'TÊN SẢN PHẨM'}>{productInfo.data.tensp}</Item>
                        <Item label={'LOẠI SẢN PHẨM'}>{productInfo.data.loaisp}</Item>
                        <Item label={'SỐ LƯỢNG'}>{productInfo.data.soluong}</Item>
                        <Item label={'GIÁ NHẬP'}>{productInfo.data.gianhap}</Item>
                        <Item label={'GIÁ BÁN'}>{productInfo.data.giaban}</Item>
                        <Item label={'TÌNH TRẠNG'}>{
                            productInfo.data.tinhtrang > 0 ?
                                <Badge status="processing" text="Còn hàng" /> :
                                <Badge status="error" text="Hết hàng" />
                        }</Item>
                        <Item label={'TIỂU CHUẨN'}>{productInfo.data.tieuchuan}</Item>
                        <Item label={'KHỐI LƯỢNG'}>{productInfo.data.khoiluong}</Item>
                        <Item label={'GHI CHÚ'}>{productInfo.data.ghichu}</Item>
                    </Descriptions>
                }
            </Card>
        ) : (
            <Row type={"flex"} justify={'center'} align={'middle'}>
                <Result
                    status="404"
                    title="404"
                    subTitle="ID sản phẩm không tồn tại."
                />
            </Row>
        )
    )
}