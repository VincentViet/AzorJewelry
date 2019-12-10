import React from 'react'
import { Menu, Icon, Carousel, Button, Tabs } from 'antd';

import './Content.css'
import img1 from '../../images/img1.png'
import goldBars from '../../images/gold-bars.png'
import silverBars from '../../images/silver-bars.png'
import diamondRing from '../../images/diamond-ring.png'
import diamond from '../../images/diamond.png'

import { Section } from './section';
import { Tab } from '../tab'


const { Item } = Menu;
const { TabPane } = Tabs;

export function HomePageContent()
{
    const myRef = React.createRef()
    const onClick = () =>
    {
        myRef.current.next()
    }

    return (
        <>
            <Menu mode="horizontal">
                <Item key="home">
                    <Icon type="home" theme="filled" />
                    TRANG CHỦ
                </Item>
                <Item key="gold">
                    <Icon type="golden" theme="filled" />
                    VÀNG BẠC
                </Item>
                <Item key="jewelry">
                    <Icon type="sketch-square" theme="filled" />
                    TRANG SỨC
                </Item>
                <Item key="contact">
                    <Icon type="phone" theme="filled" />
                    LIÊN HỆ
                </Item>
            </Menu>
            <Carousel autoplay ref={myRef}>
                <div>
                    <img className="content-img1" src={img1} alt="img1" />
                    <Button className="content-img1-button" type="primary" onClick={onClick}>Tìm hiểu thêm</Button>
                </div>
                <div>
                    <img className="content-img1" src={img1} alt="img1" />
                    <Button className="content-img1-button" type="primary" onClick={onClick}>Tìm hiểu thêm</Button>
                </div>
                <div>
                    <img className="content-img1" src={img1} alt="img1" />
                    <Button className="content-img1-button" type="primary" onClick={onClick}>Tìm hiểu thêm</Button>
                </div>
                <div>
                    <img className="content-img1" src={img1} alt="img1" />
                    <Button className="content-img1-button" type="primary" onClick={onClick}>Tìm hiểu thêm</Button>
                </div>
            </Carousel>
            <Tabs>
                <TabPane tab={
                    <Tab src={goldBars} text="Vàng"/>
                } key="gold" forceRender>
                    <Section title="Đang bán chạy"/>
                    <Section title="Sản phẩm nổi bật"/>
                </TabPane>
                <TabPane tab={
                    <Tab src={diamondRing} text="Trang sức" />
                } key="jewelry">
                    <Section title="Đang bán chạy" />
                    <Section title="Sản phẩm nổi bật" />
                </TabPane>
                <TabPane tab={
                    <Tab src={silverBars} text="Bạc" />
                } key="silver">
                    <Section title="Đang bán chạy" />
                    <Section title="Sản phẩm nổi bật" />
                </TabPane>
                <TabPane tab={
                    <Tab src={diamond} text="Đá quý" />
                } key="gemstone">
                    <Section title="Đang bán chạy" />
                    <Section title="Sản phẩm nổi bật" />
                </TabPane>
            </Tabs>
        </>
    )
}