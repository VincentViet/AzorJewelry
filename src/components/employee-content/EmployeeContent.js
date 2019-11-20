import React from 'react'
import { Tabs } from 'antd'

import { Tab } from '../tab'
import { Bill } from './bill'
import { Service } from './service'
import { User } from './client'

import bill from '../../images/bill.png'
import service from '../../images/service.png'
import user from '../../images/user.png'
import chart from '../../images/chart.png'

import './EmployeeContent.css'

const { TabPane } = Tabs

export function EmployeeContent(props) {
    return (
        <Tabs>
            <TabPane tab={
                <Tab src={bill} text="HOÁ ĐƠN"/>
            } key="bill">
                <Bill />
            </TabPane>
                
            <TabPane tab={
                <Tab src={service} text="PHIẾU DỊCH VỤ" />
            } key="service">
                <Service />
            </TabPane>

            <TabPane tab={
                <Tab src={user} text="KHÁCH HÀNG" />
            } key="user">
                <User />
            </TabPane>

            <TabPane tab={
                <Tab src={chart} text="MUA / CẦM ĐỒ" />
            } key="chart">
                <Bill />
            </TabPane>
        </Tabs>
    )
}