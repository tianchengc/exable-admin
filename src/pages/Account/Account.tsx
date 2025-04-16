import { Form, message, Select, Upload } from 'antd';
import InputField from '@components/InputField';
import Button from '@components/Button';
import { UploadOutlined } from '@ant-design/icons';
import styles from './Account.module.css';
import PageTitle from '@components/PageTitle';
import ExSelect from '@components/ExSelect';
import Textarea from '@components/Textarea';

export const Account: React.FC<{}> = () => {
  const [form] = Form.useForm();

  return (
    <div className={styles.pageContainer}>
      <PageTitle title="Account settings"></PageTitle>
      <div className={styles.formContainer}>
        <div className={styles.formWrapper}>
          <span className={styles.formTitle}>My Profile</span>
          <div className={styles.formRow}>
            <InputField placeholder="First Name" />
            <InputField placeholder="Last Name" />
          </div>
          <div className={styles.formRow}>
            <InputField placeholder="City" style={{width: '50%'}} />
            <ExSelect
              placeholder='Province'
              style={{ width: '50%' }}
            >
              <Select.Option value="Ontario">Ontario</Select.Option>
              <Select.Option value="Quebec">Quebec</Select.Option>
              <Select.Option value="British Columbia">British Columbia</Select.Option>
              <Select.Option value="Alberta">Alberta</Select.Option>
              <Select.Option value="Manitoba">Manitoba</Select.Option>
              <Select.Option value="Saskatchewan">Saskatchewan</Select.Option>
              <Select.Option value="Nova Scotia">Nova Scotia</Select.Option>
              <Select.Option value="New Brunswick">New Brunswick</Select.Option>
              <Select.Option value="Newfoundland and Labrador">Newfoundland and Labrador</Select.Option>
              <Select.Option value="Prince Edward Island">Prince Edward Island</Select.Option>
              <Select.Option value="Northwest Territories">Northwest Territories</Select.Option>
              <Select.Option value="Yukon">Yukon</Select.Option>
              <Select.Option value="Nunavut">Nunavut</Select.Option>
            </ExSelect>
          </div>
          <div className={styles.formRow} style={{ width: '50%'}}>
            <InputField placeholder="Phone number" />
          </div>
        </div>
        <div className={styles.formWrapper}>
          <span className={styles.formTitle}>Professional Info</span>
          <div className={styles.formRow}>
            <div className={styles.formColumn}>
              <Textarea className={styles.textarea} placeholder="My bio..." />
              <Textarea className={styles.textarea} placeholder="My interests..." />
            </div>
            <div className={styles.formColumn}>
              <InputField placeholder="Year of experience" />
              <InputField placeholder="Specitalization" />
              <InputField placeholder="Accreditation number" />
              <Upload className={styles.uploadButton}>
                <div className={styles.uploadContainer}>
                  <UploadOutlined className={styles.uploadIcon} />
                  <div className={styles.uploadText}>
                    Upload insurance papers
                  </div>
                </div>
              </Upload>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.formFooter}>
        <Button
          category="primary"
          width="regular"
          onClick={() => message.success('Changes saved!')}
        >
          Update
        </Button>
      </div>
    </div>
  );
};

export default Account;