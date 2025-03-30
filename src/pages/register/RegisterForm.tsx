import { Checkbox, Form, Modal } from 'antd';
import Button from '@components/Button';
import React from 'react';
import TermsAndConditionsModal from '@components/TermsAndConditionsModal/index';
import styles from './Register.module.css';
import InputField from '@/components/InputField';

interface RegisterFormProps {
  submit: (param: unknown) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ submit }) => {
  const [form] = Form.useForm();
  const [isModalOpened, setIsModalOpened] = React.useState(false);

  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      submit(values);
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };

  const onCheckboxChange = (_e: { target: { checked: boolean } }) => {
    console.log(_e);
  };

  return (
    <>
      <Modal
        title="Terms and Conditions"
        open={isModalOpened}
        onCancel={() => setIsModalOpened(false)}
        bodyStyle={{ maxHeight: 800, overflow: 'scroll ' }}
        footer={[
          <Button
            key="ok"
            type="primary"
            width="small"
            onClick={() => setIsModalOpened(false)}
          >
            Ok
          </Button>,
        ]}
      >
        <TermsAndConditionsModal />
      </Modal>

      <div>
        <div className={styles.title}>Create my profile</div>
        <Form className="register-form" form={form} name="register">
          <Form.Item
            name="firstName"
            rules={[
              { required: true, message: 'Please input your first name' },
            ]}
          >
            <InputField placeholder="*First name" />
          </Form.Item>
          <Form.Item
            name="lastName"
            rules={[{ required: true, message: 'Please input your last name' }]}
          >
            <InputField placeholder="*Last name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please input your email' },
              { type: 'email', message: 'Please input correct email' },
            ]}
          >
            <InputField placeholder="*Email" />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[
              { required: true, message: 'Please input your phone number' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (
                    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g.test(
                      value
                    )
                  ) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error('Please input current phone number!')
                  );
                },
              }),
            ]}
          >
            <InputField placeholder="*Phone number" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Please input your password' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value) {
                    return Promise.resolve();
                  }
                  const email = getFieldValue('email');
                  return Promise.resolve();
                },
              }),
            ]}
          >
            <InputField type='password' className="reset" placeholder="*Password" />
          </Form.Item>
          <Form.Item
            name="cpassword"
            rules={[
              { required: true, message: 'Please confirm your password' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      'The two passwords that you entered do not match!'
                    )
                  );
                },
              }),
            ]}
          >
            <InputField type="password" className="reset" placeholder="*Confirm password" />
          </Form.Item>
          <Form.Item
            className={styles.checkboxRow}
            name="protocol"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                      new Error(
                        'You need to accept the agreement to continue.'
                      )
                    ),
              },
            ]}
          >
            <Checkbox onChange={onCheckboxChange}>
              <span>* I accept the </span>
              <span
                className="term-link"
                onClick={() => setIsModalOpened(true)}
                onKeyUp={() => setIsModalOpened(true)}
              >
                terms and conditions
              </span>
            </Checkbox>
          </Form.Item>
          <Form.Item
            valuePropName="checked"
            className={styles.checkboxRow}
            name="remeber"
          >
            <Checkbox name="remember" onChange={onCheckboxChange}>Remember me</Checkbox>
          </Form.Item>
          <Form.Item 
            valuePropName="checked" 
            className={styles.checkboxRow} 
            name="news"
          >
            <Checkbox onChange={onCheckboxChange}>
              I want to stay up to date with the latest news
            </Checkbox>
          </Form.Item>
          <Form.Item 
            className={styles.checkboxRow}
          >
            <Button className="kin-btn" type="primary" onClick={onCheck}>
              Save
            </Button>
          </Form.Item>
        </Form>
        `
      </div>
    </>
  );
};

export default RegisterForm;
