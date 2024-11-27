import { Descriptions, Modal } from 'antd'
import { FunctionComponent, useState } from 'react'
import { IUser } from '../../../model'
import { markKinApproved } from '../../../network/api'
import '../style.scss'
export const KinApprovingModal: FunctionComponent<{
    kin?: IUser,
    onOK: () => void,
    onCancel: () => void,
}> = (props) => {
    const { kin } = props
    const [confirmLoading, setConfirmLoading] = useState(false)

    async function onOK() {
        if (kin?.id) {
            setConfirmLoading(true)
            await markKinApproved(kin?.id)
            setConfirmLoading(false)
            props.onOK()
        }
        
    }
    return <Modal width={'80%'} confirmLoading={confirmLoading} onCancel={props.onCancel} visible={props.kin !== undefined} onOk={onOK} okText='Approve' cancelText='Dismiss'>
        <Descriptions title='Basic Info' bordered size='small'>
            <Descriptions.Item label="UID">{kin?.id}</Descriptions.Item>
            <Descriptions.Item label="Name">{`${kin?.firstName} ${kin?.lastName}`}</Descriptions.Item>
            <Descriptions.Item label="Location">{`${kin?.city} ${kin?.province}`}</Descriptions.Item>
            <Descriptions.Item label="Birth Date">{kin?.birthDate}</Descriptions.Item>
            <Descriptions.Item label="Language">{kin?.language}</Descriptions.Item>
            <Descriptions.Item label="Interests">{kin?.interests}</Descriptions.Item>
        </Descriptions>
        <Descriptions title='Kinesiologist Info' bordered size='small' style={{ marginTop: '20px' }}>
            <Descriptions.Item label="Experiences">{kin?.kinesiologistInfo.experiences} Years</Descriptions.Item>
            <Descriptions.Item label="Specialization">{kin?.kinesiologistInfo.specialization}</Descriptions.Item>
            <Descriptions.Item label="Accreditation">{kin?.kinesiologistInfo.accreditationBody}-{kin?.kinesiologistInfo.accreditationNumber}</Descriptions.Item>
            <Descriptions.Item label="Degree">{kin?.kinesiologistInfo.degree}</Descriptions.Item>
            <Descriptions.Item label="Offer Free Consultation">{kin?.kinesiologistInfo.offerFreeConsultation}</Descriptions.Item>
            <Descriptions.Item label="Bio">{kin?.kinesiologistInfo.bio}</Descriptions.Item>

        </Descriptions>
    </Modal>
}