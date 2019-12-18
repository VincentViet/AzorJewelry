import React from 'react'
import { Tabs } from 'antd'

import { Tab } from '../tab'
import {List} from './list'
import {Import} from "./import";
import {Export} from './export'
import {WareHouse} from "./warehouse";

import listImg from '../../images/list.png'
import importImg from '../../images/import.png'
import exportImg from '../../images/export.png'
import wareHouseImg from '../../images/warehouse.png'

import './InventoryContent.css'

const { TabPane } = Tabs;

export function InventoryContent(props)
{
    return (
        <Tabs>
            <TabPane tab={
                <Tab src={listImg} text="DANH SÁCH" />
            } key="list">
                <List />
            </TabPane>

            <TabPane tab={
                <Tab src={importImg} text="NHẬP KHO" />
            } key="import">
                <Import />
            </TabPane>

            <TabPane tab={
                <Tab src={exportImg} text="XUẤT KHO" />
            } key="export">
                <Export />
            </TabPane>

            <TabPane tab={
                <Tab src={wareHouseImg} text="TỒN KHO" />
            } key="warehouse">
                <WareHouse />
            </TabPane>
        </Tabs>
    )
}