import React,
{
    // useRef
} from "react";

import {
    Icon,
    Row,
    Card,
    Table,
    Divider,
    DatePicker,
    AutoComplete
} from 'antd'

import './Attendance.css'
import {useDispatch, useSelector} from "react-redux";
import {toggleCheck} from "../../../store/employee";

export function Attendance(props) {
    // const date = useRef(null);
    const dateChangeHandler = (date)=>{

    };

    const columns = [
        {
            title: 'Mã nhân viên',
            dataIndex: 'manv',
        },
        {
            title: 'Tên nhân viên',
            dataIndex: 'tennv',
        },
        {
            dataIndex: 'check',
            render: (value) =>{
                return value ?
                    (<Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />) :
                    null;
            }
        }
    ];

    const employees = useSelector(state => state.employee.employees.map((value, key) => {
            return {
                manv: `NV00${key}`,
                tennv: value.taikhoan.hoten,
                check: value.check,
                key: key
            }
    }));

    const dispatch = useDispatch();

    return (
        <Card>
            <Row>
                <AutoComplete
                    style={{display: 'inline-block', width: 'calc(50% - 12px)'}}
                />
                <DatePicker
                    onChange={dateChangeHandler}
                    defaultValue={null}
                    // ref={date}
                    style={{marginLeft: '50px'}}
                />
                <Divider type={'horizontal'}/>
            </Row>
            <Table
                columns={columns}
                dataSource={employees.toArray()}
                onRow={(record) =>{
                    return{
                        onClick: ()=> dispatch(toggleCheck(record.key))
                    }
                }}
            />
        </Card>
    )
}