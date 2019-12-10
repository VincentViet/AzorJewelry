import React from 'react';

import
{
    Row,
    Col,
    Icon,
    Typography,
} from 'antd'

import QRImg from '../../images/QRCode.png'
import AppStoreImg from '../../images/AppStore.png'
import GooglePlayImg from '../../images/GooglePlay.png'

import { Link } from '../link';

import './Footer.css'

const {Text} = Typography

export function Footer(props)
{
    const size = 12
    return (
        <Row
            type="flex"
            justify="center"
            align="top"
            // gutter={8}
        >
            {/* <Col span={1}/> */}
            <Col span={6}>
                <Row type="flex" justify="start">
                    <Text
                        type="secondary"
                        strong
                    >
                        CHĂM SÓC KHÁCH HÀNG
                    </Text>
                </Row>
                <Row
                    type="flex"
                    style={{ marginTop: 10 }}>
                    <Link
                        text="Trung Tâm Trợ Giúp"
                        size={size}
                    />
                    <Link
                        text="Hướng Dẫn Mua Hàng"
                        size={size}
                    />
                    <Link
                        text="Hướng Dẫn Bán Hàng"
                        size={size}
                    />
                    <Link
                        text="Vận Chuyển"
                        size={size}
                    />
                    <Link
                        text="Trả Hàng & Hoàn Tiền"
                        size={size}
                    />
                    <Link
                        text="Chăm Sóc Khách Hàng"
                        size={size}
                    />
                    <Link
                        text="Chính Sách Bảo Hành"
                        size={size}
                    />
                </Row>
            </Col>
            <Col span={6}>
                <Row type="flex" justify="start">
                    <Text
                        type="secondary"
                        strong
                    >
                        VỀ VÀNG STORE
                    </Text>
                </Row>
                <Row
                    type="flex"
                    style={{ marginTop: 10 }}>
                    <Link
                        text="Giới Thiệu Về Vàng Store"
                        size={size}
                    />
                    <Link
                        text="Tuyển Dụng"
                        size={size}
                    />
                    <Link
                        text="Điều Khoản Vàng Store"
                        size={size}
                    />
                    <Link
                        text="Chính Sách Bảo Mật"
                        size={size}
                    />
                    <Link
                        text="Chính Hãng"
                        size={size}
                    />
                </Row>
            </Col>
            <Col span={6}>
                <Row type="flex" justify="start">
                    <Text
                        type="secondary"
                        strong
                    >
                        THEO DÕI CHÚNG TÔI TRÊN
                    </Text>
                </Row>
                <Row
                    type="flex"
                    style={{ marginTop: 10 }}>
                    <Link
                        text="Facebook"
                        size={size}
                        icon={
                            <Icon
                                type="facebook" theme="filled"
                                style={{fontSize: 18}}
                            />}
                    />
                    <Link
                        text="Instagram"
                        size={size}
                        icon={
                            <Icon
                                type="instagram" theme="filled"
                                style={{ fontSize: 18 }}
                            />}
                    />
                    <Link
                        text="LinkedIn"
                        size={size}
                        icon={
                            <Icon
                                type="linkedin" theme="filled"
                                style={{ fontSize: 18 }}
                            />}
                    />
                </Row>
            </Col>
            <Col span={6}>
                <Row type="flex" justify="start">
                    <Text
                        type="secondary"
                        strong
                    >
                        TẢI NGAY ỨNG DỤNG VÀNG STORE
                </Text>
                </Row>
                <Row
                    type="flex"
                    style={{ marginTop: 10 }}>
                    <Col>
                        <img
                            src={QRImg}
                            alt="QRCode"
                            style={{
                                width: "5.25rem",
                                height: "5.25rem"
                            }}
                        />
                    </Col>
                    <Col>
                        <Row>
                            <img
                                src={AppStoreImg}
                                alt="AppStore"
                                style={{
                                    marginLeft: ".8125rem",
                                    height: "1.25rem"
                                }}
                            />
                        </Row>
                        <Row
                            type="flex"
                            align="bottom"
                            style={{height: "70%"}}
                        >
                            <img
                                src={GooglePlayImg}
                                alt="GooglePlay"
                                style={{
                                    marginBottom: ".5rem",
                                    marginLeft: ".8125rem",
                                    height: "1.25rem"
                                }}
                            />
                        </Row>
                    </Col>
                </Row>
            </Col>
            {/* <Col span={1} /> */}
       </Row>
    )
}