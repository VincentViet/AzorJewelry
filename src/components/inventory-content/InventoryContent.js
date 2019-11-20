import React from 'react'
import { Tabs } from 'antd'

import { Tab } from '../tab'
import { List } from './list'

import listImg from '../../images/list.png'
import importImg from '../../images/import.png'
import exportImg from '../../images/export.png'
import wareHouseImg from '../../images/warehouse.png'

import './InventoryContent.css'

const { TabPane } = Tabs

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
                
            </TabPane>

            <TabPane tab={
                <Tab src={exportImg} text="XUẤT KHO" />
            } key="export">
                
            </TabPane>

            <TabPane tab={
                <Tab src={wareHouseImg} text="TỒN KHO" />
            } key="warehouse">
                
            </TabPane>
        </Tabs>
    )
}