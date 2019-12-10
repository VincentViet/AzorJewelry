import React from 'react'
import { Tabs } from 'antd'

import { Tab } from '../tab'

import report from '../../images/report.png'
import employee from '../../images/user.png'
import bill from '../../images/bill.png'
import client from '../../images/client.png'

import './DirectorPageContent.css'

const { TabPane } = Tabs;

export function DirectorPageContent(props) {
    return (
        <Tabs>
            <TabPane tab={
                <Tab src={report} text="BÁO CÁO"/>
            } key="bill">
                {/*<Bill />*/}
            </TabPane>

            <TabPane tab={
                <Tab src={employee} text="QUẢN LÝ NHÂN VIÊN" />
            } key="service">
                {/*<Service />*/}
            </TabPane>

            <TabPane tab={
                <Tab src={bill} text="QUẢN LÝ PHIẾU" />
            } key="user">
                {/*<Client />*/}
            </TabPane>

            <TabPane tab={
                <Tab src={client} text="QUẢN LÝ KHÁCH HÀNG" />
            } key="chart">
                {/*<Bill />*/}
            </TabPane>
        </Tabs>
    )
}