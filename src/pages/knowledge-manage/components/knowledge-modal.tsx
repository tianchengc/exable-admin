import { Button, Form, Input, message, Modal, Upload, UploadProps } from 'antd';
import { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { IKnowledge } from '../../../model';
import {
  genKnowlegePutUrl,
  modifyKnowledge,
  newKnowledge,
} from '../../../network/api';
import '../style.css';
import { lookup as mime } from 'mime-types';
import axios from 'axios';
import { UploadRequestOption } from 'rc-upload/lib/interface';
import { v4 as uuid } from 'uuid';
import { UploadOutlined } from '@ant-design/icons';
import { NetworkError } from '../../../network';

type FormSubmitValues = IKnowledge & {
  albumLink?:
    | string
    | {
        file: {
          response: string;
        };
      };
};
export const KnowledgeModal: FunctionComponent<{
  knowledge: IKnowledge | undefined;
  onOK: () => void;
  onCancel: () => void;
}> = props => {
  const { knowledge } = props;
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    if (knowledge) {
      form.resetFields();
      form.setFieldsValue({
        ...knowledge,
        albumLink: knowledge.album,
      });
    }
  });

  async function onOK() {
    setConfirmLoading(true);
    form.submit();
  }
  async function onSubmit(c: FormSubmitValues) {
    console.log(c);
    const resource = {
      ...c,
      album:
        typeof c.albumLink === 'string'
          ? c.albumLink
          : c.albumLink?.file.response,
    };
    const req = knowledge?.id ? modifyKnowledge : newKnowledge;
    const [, err] = await req(resource);
    if (err) {
      message.error((err as NetworkError)?.serverMessage);
    } else {
      props.onOK();
    }
    setConfirmLoading(false);
  }
  const { uploadProps } = useMemo(() => {
    const uploadProps: UploadProps = {
      name: 'playUrl',
      method: 'PUT',
      defaultFileList: [],
      maxCount: 1,
      multiple: false,
      accept: '.jpg,.png,.jpeg',
      customRequest: async (options: UploadRequestOption) => {
        const [res, err] = await genKnowlegePutUrl();
        if (err || !res || !res.putUrl) {
          message.error('upload failed');
          options.onError?.({
            url: '',
            name: '',
            message: err?.message ?? '',
          });
          return;
        }
        const { url, putUrl } = res;
        console.log(options.file);
        axios
          .put(putUrl, options.file, {
            headers: {
              'Content-Type': mime(options.filename!),
            },
          })
          .then(result => {
            // @ts-expect-error don't need parameter
            options.onSuccess(url);
          })
          .catch(err => {
            options.onError?.(err);
          });
      },
    };

    if (knowledge?.album) {
      uploadProps.defaultFileList!.push({
        uid: uuid(),
        url: knowledge.album,
        name: 'album_file',
      });
    }
    return {
      uploadProps,
    };
  }, [knowledge?.album, form]);

  return (
    <Modal
      width={'80%'}
      confirmLoading={confirmLoading}
      onCancel={props.onCancel}
      visible={props.knowledge !== undefined}
      onOk={onOK}
    >
      <Form
        form={form}
        name="video-form"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        layout="vertical"
        onFinish={onSubmit}
        onFinishFailed={() => message.error(``)}
        autoComplete="off"
      >
        <Form.Item name="id"></Form.Item>
        <Form.Item name="title" label="Name" required>
          <Input />
        </Form.Item>
        <Form.Item name="brief" label="Summary" required>
          <Input />
        </Form.Item>
        <Form.Item label="Album" name="albumLink" required>
          <Upload {...uploadProps}>
            <Button icon={<UploadOutlined />}>Click to Upload Picture</Button>
          </Upload>
        </Form.Item>
        <Form.Item name="content" label="Link">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
