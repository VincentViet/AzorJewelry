import React from 'react'
import { Tabs } from 'antd'

import { Tab } from '../tab'

import {Employee} from "./employee";
import {Bill} from "./bill";
import {Attendance} from "./attendance";
import {Client} from "./client";

import listImg from '../../images/list.png'
import billImg from '../../images/bill.png'
import attendanceImg from '../../images/attendance.png'
import clientImg from '../../images/client.png'

import './ManagerContent.css'

const { TabPane } = Tabs;

export function ManagerContent(props)
{
    return (
        <Tabs>
            <TabPane tab={
                <Tab src={listImg} text="DANH SÁCH NHÂN VIÊN" />
            } key="list">
                <Employee />
            </TabPane>

            <TabPane tab={
                <Tab src={billImg} text="DANH SÁCH HOÁ ĐƠN" />
            } key="import">
                <Bill/>
            </TabPane>

            <TabPane tab={
                <Tab src={attendanceImg} text="ĐIỂM DANH NHÂN VIÊN" />
            } key="export">
                <Attendance/>
            </TabPane>

            <TabPane tab={
                <Tab src={clientImg} text="CHĂM SÓC KHÁCH HÀNG" />
            } key="warehouse">
                <Client/>
            </TabPane>
        </Tabs>
    )
}