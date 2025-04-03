import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { RegistrationPayload } from '@store/types';
import image from '@assets/register_image.svg';
import logo from '@assets/logo.svg';
import Footer from '@components/footer';
import styles from './register.module.css';
import { Checkbox, Form, Modal } from 'antd';
import Button from '@components/Button';
import TermsAndConditionsModal from '@components/TermsAndConditionsModal/index';
import InputField from '@components/InputField';
import React, { useEffect } from 'react';
import { registerUser, selectIsLoggedIn } from '@store/slices/userSlice';

export const Register: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [isModalOpened, setIsModalOpened] = React.useState(false);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = async (formData: RegistrationPayload) => {
    const { firstName, lastName, email, phoneNumber, password } = formData;
    dispatch(registerUser({
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      type: 'ADMIN'
    }));
  };

  const onSubmit = async () => {
    try {
      const values = await form.validateFields();
      console.log('Received values:', values);
      handleSubmit(values);
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };

  const onCheckboxChange = (_e: { target: { checked: boolean } }) => {
    console.log(_e);
  };

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <img src={logo} alt="Lung Health Foundation Logo" className={styles.logo} />
      </header>

      <main className={styles.mainContent}>
        <div className={styles.formWrapper}>
          <Modal
            title="Terms and Conditions"
            open={isModalOpened}
            onCancel={() => setIsModalOpened(false)}
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
                rules={[
                  { required: true, message: 'Please input your last name' },
                ]}
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
                <InputField type="password" className="reset" placeholder="*Password" />
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
                        new Error('The two passwords that you entered do not match!')
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
                            new Error('You need to accept the agreement to continue.')
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
                <Checkbox name="remember" onChange={onCheckboxChange}>
                  Remember me
                </Checkbox>
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
              <Form.Item className={styles.buttonContainer}>
                <Button category="primary" onClick={onSubmit}>
                  Create Account
                </Button>
                
              </Form.Item>
              <Form.Item className={styles.buttonContainer}>
                <Button category="secondary" onClick={() => navigate('/login')}>
                  Already Have Account
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <img src={image} alt="Illustration" className={styles.image} />
        </div>
      </main>

      <Footer className={styles.footer} />
    </div>
  );
};

export default Register;
