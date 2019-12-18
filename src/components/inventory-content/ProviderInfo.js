import React, {useState} from 'react'
import
{
    Input,
    Tabs,
    Descriptions, Icon, AutoComplete,
} from 'antd'
import {useSelector, useDispatch} from "react-redux";
import {chooseProvider} from "../../store/import";

export function ProviderInfo(props)
{
    const [state, setState] = useState({
        searchDataSource: null,
        chosenProvider: null
    });

    const dispatch = useDispatch();
    const providers = useSelector(state => state.provider.providers);
    const searchHandler = (value)=>{
        const pattern = new RegExp(value);
        const list = providers
            .filter(data => data.idnhacc.match(pattern))
            .map(data => {
                return {
                    text: `${data.idnhacc} ${data.tennhacc}`,
                    value: data.idnhacc,
                };
            });

        setState({
            ...state,
            searchDataSource: list
        });
    };
    const selectHandler = (value)=>{
        const list = providers
            .filter(data => data.idnhacc === value);
        setState({
            ...state,
            chosenProvider: list.get(0)
        });

        dispatch(chooseProvider(list.get(0)))
    };

    const formatter = (value) =>`${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return (
        <Tabs
            type="card"
            style={props.tabsStyle}>
            <Tabs.TabPane
                key="provider"
                tab="Nhà cung cấp">
                <AutoComplete
                    allowClear={true}
                    suffix={<Icon type="search" />}
                    placeholder='Nhập mã nhà cung cấp'
                    style={{width: '100%'}}
                    dataSource={
                        state.searchDataSource ? state.searchDataSource.toArray() : []
                    }
                    onSearch={searchHandler}
                    onSelect={selectHandler}
                />
                {
                    state.chosenProvider &&
                    <Descriptions
                        bordered
                        column={1}
                        layout="horizontal"
                        title="Thông tin nhà cung cấp">
                        <Descriptions.Item label="Tên nhà cung cấp">
                            {state.chosenProvider.tennhacc}
                        </Descriptions.Item>
                        <Descriptions.Item label="Địa chỉ">
                            {state.chosenProvider.diachinhacc}
                        </Descriptions.Item>
                        <Descriptions.Item label="Tổng giá trị nhập">
                            {`${formatter(state.chosenProvider.tonggiatrinhap)} VNĐ`}
                        </Descriptions.Item>
                    </Descriptions>
                }
            </Tabs.TabPane>
            <Tabs.TabPane
                key="manage"
                tab="Quản lý">
                <Input.TextArea
                    rows={15}
                    placeholder="Nhập ghi chú"
                />
            </Tabs.TabPane>
        </Tabs>
    )
}