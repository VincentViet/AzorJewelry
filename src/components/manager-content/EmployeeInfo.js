import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {
    Card,
    Row,
    Button,
    Descriptions,
    Modal,
    Result
} from 'antd'

import womenAvatar from '../../images/women-avatar.jpg'
import menAvatar from '../../images/men-avatar.jpeg'
import { toggleEditModal} from "../../store/employee";

export function EmployeeInfo(props){
    const employeeInfo = useSelector(state =>
        state.employee.chosenEmployee ? state.employee.chosenEmployee.taikhoan : null);
    const editModal = useSelector(state => state.employee.editModal);

    const dispatch = useDispatch();

    const {Item} = Descriptions;

    return(
        employeeInfo ? (
            <Card
                hoverable={true}
                cover={employeeInfo.gioitinh === 'NAM' ?
                    <img alt={'goldProduct'} width={512} height={512} src={menAvatar}/> :
                    <img width={512} height={512} alt={'goldProduct'} src={womenAvatar}/>}
            >
                {
                    employeeInfo &&
                    <Row>
                        <Row type={'flex'} justify={'end'} align={'middle'}>
                            <Button
                                type={"primary"}
                                icon={'edit'}
                                value={'Edit'}
                                onClick={() => dispatch(toggleEditModal())}>
                                Sửa thông tin
                            </Button>
                        </Row>
                        <Modal
                            visible={editModal.visible || editModal.loading}
                            onOk={() => dispatch(toggleEditModal())}
                            onCancel={()=> dispatch(toggleEditModal())}
                            centered
                            closable
                            title="Chỉnh sửa thông tin"
                            footer={null}
                        >
                            {/*<ProductForm/>*/}
                            THIS IS EDIT MODAL
                        </Modal>
                        <Descriptions
                            column={1}
                            layout={'horizontal'}
                            bordered={true}>
                            <Item style={{fontWeight: 'bold'}} label={'HỌ VÀ TÊN'}>{employeeInfo.hoten}</Item>
                            <Item label={'CMND'}>{employeeInfo.cmnd}</Item>
                            <Item label={'NGÀY SINH'}>{employeeInfo.ngaysinh}</Item>
                            <Item label={'GIỚI TÍNH'}>{employeeInfo.gioitinh}</Item>
                            <Item label={'ĐỊA CHỈ'}>{employeeInfo.diachi}</Item>
                            <Item label={'GHI CHÚ'}>{employeeInfo.ghichu}</Item>
                        </Descriptions>
                    </Row>
                }
            </Card>
        ) : (
            <Row type={"flex"} justify={'center'} align={'middle'}>
                <Result
                    status="404"
                    title="404"
                    subTitle="ID nhân viên không tồn tại."
                />
            </Row>
        )
    )
}