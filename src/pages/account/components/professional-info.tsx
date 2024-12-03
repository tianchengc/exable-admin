import { Button, Form, Input, message, Upload } from 'antd';
import { FunctionComponent } from 'react';
import { UploadOutlined } from '@ant-design/icons';

export const ProfessionalInfo: FunctionComponent<{}> = props => {
  const [form] = Form.useForm();

  return (
    <div className="account-box">
      <div className="sub-title">Professional Info</div>
      <Form
        form={form}
        name="professional-form"
        layout="vertical"
        onFinishFailed={() => message.error(``)}
        autoComplete="off"
        style={{ padding: '48px 48px 0 48px' }}
      >
        <div style={{ display: 'inline-block', height: 'auto' }}>
          <Form.Item name="bio">
            <textarea className="form-large" placeholder="My bio..." />
          </Form.Item>
          <Form.Item name="interest">
            <textarea className="form-large" placeholder="My interests..." />
          </Form.Item>
        </div>
        <div style={{ display: 'inline-block', float: 'right' }}>
          <Form.Item name="experience">
            <Input className="form-small" placeholder="Year of experience" />
          </Form.Item>
          <Form.Item name="specialization">
            <Input className="form-small" placeholder="Specitalization" />
          </Form.Item>
          <Form.Item style={{ marginBottom: 140 }} name="accreditation-number">
            <Input className="form-small" placeholder="Accreditation number" />
          </Form.Item>
          <Form.Item name="upload">
            <Upload>
              <Button
                ghost
                className="upload-button"
                icon={<UploadOutlined className="upload-icon" />}
              >
                Upload insurance papers
              </Button>
            </Upload>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};
