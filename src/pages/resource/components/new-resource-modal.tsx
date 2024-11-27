import { Button, Descriptions, Form, Input, message, Modal, Select, Upload, UploadProps } from 'antd'
import { FunctionComponent, useEffect, useMemo, useState } from 'react'
import { IResource, IUser } from '../../../model'
import { genResourcePutUrl, modifyResource, newResource } from '../../../network/api'
import '../style.scss'
import { lookup as mime } from 'mime-types'
import axios from 'axios'
import { UploadRequestOption } from 'rc-upload/lib/interface'
import { v4 as uuid } from 'uuid'
import { UploadOutlined } from '@ant-design/icons'
import { tryCatch } from '../../../utils/try-catch'
import { NetworkError } from '../../../network'

type FormSubmitValues = IResource & {
    albumLink?: string | {
        file: {
            response: string
        }
    }
}
export const NewResourceModal: FunctionComponent<{
    resource: IResource|undefined,
    onOK: () => void,
    onCancel: () => void,
}> = (props) => {
    const { resource } = props
    const [confirmLoading, setConfirmLoading] = useState(false)
    const [form] = Form.useForm()
    async function onOK() {
        setConfirmLoading(true)
        form.submit()
    }

    useEffect(() => {
        if (resource) {
            form.resetFields()
            form.setFieldsValue({
                ...resource,
                albumLink: resource.album
            })
        }
    })

    async function onSubmit(c: FormSubmitValues) {
        const reqBody = {
            ...c,
            album: typeof c.albumLink === 'string' ? c.albumLink : c.albumLink?.file.response,
        }
        const req = resource?.id ? modifyResource : newResource

        const [ , err ] = await req(reqBody)
        if (err) {
            message.error((err as NetworkError)?.serverMessage)
        } else {
            props.onOK()
        }
        setConfirmLoading(false)

    }
    const { uploadProps } = useMemo(() => {
        const uploadProps: UploadProps = {
            name: 'playUrl',
            method: 'PUT',
            defaultFileList: [],
            maxCount: 1,
            multiple: false,
            accept: '.jpg,.png,.jpeg',
            customRequest:  async (options: UploadRequestOption) => {
                const [res, err] = await genResourcePutUrl()
                if (err || !res || !res.putUrl) {
                    message.error('upload failed')
                    options.onError?.({
                        url: '',
                        name: '',
                        message: err?.message ?? ''
                    })
                    return
                }
                const { url, putUrl } = res
                console.log(options.file)
                axios.put(putUrl, options.file, {
                    headers: {
                        'Content-Type': mime(options.filename!)
                    }
                }).then(result => {
                    // @ts-expect-error don't need parameter
                    options.onSuccess(url)
                }).catch(err => {
                    options.onError?.(err)
                })
            }
        }

        if (resource?.album) {
            uploadProps.defaultFileList!.push({
                uid: uuid(),
                url: resource.album,
                name: 'album_file'
            })
        }
        return {
            uploadProps,
        }
    }, [resource?.album , form])

    
    return <Modal width={'80%'} confirmLoading={confirmLoading} onCancel={props.onCancel} visible={props.resource !== undefined} onOk={onOK}>
        <Form form={form}
            name="video-form"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            layout="vertical"
            onFinish={onSubmit}
            onFinishFailed={() => message.error(``)}
            autoComplete="off"
        >
            <Form.Item name='id'></Form.Item>
            <Form.Item name='title' label='Name' required>
                <Input />
            </Form.Item>
            <Form.Item name='brief' label='Summary' required>
                <Input />
            </Form.Item>
            <Form.Item label="Album" name='albumLink' required>
                <Upload {...uploadProps}>
                    <Button icon={<UploadOutlined />}>Click to Upload Picture</Button>
                </Upload>
            </Form.Item>
            <Form.Item name='content' label='Link'>
                <Input />
            </Form.Item>
            <Form.Item name='buttonText' label='Button Text'>
                <Input />
            </Form.Item>
            <Form.Item name='bindCourse' label='For Course'>
                <Select defaultValue={0} options={courseValue}/>
            </Form.Item>
        </Form>
    </Modal>
}

const courseValue = Array.from(new Array(13).keys()).map((courseId) => {
    return { value: courseId, label: courseName(courseId) }
})

export function courseName(courseId: number) {
    return courseId === 0 ? 'Pre-treatment' : `Session-${courseId}`
}