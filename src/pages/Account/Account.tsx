import { Select, Upload } from 'antd';
import InputField from '@components/InputField';
import Button from '@components/Button';
import { UploadOutlined } from '@ant-design/icons';
import styles from './Account.module.css';
import PageTitle from '@components/PageTitle';
import ExSelect from '@components/ExSelect';
import Textarea from '@components/Textarea';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { getCurrentUser, selectCurrentUser, updateUser } from '@store/slices/userSlice';
import { useEffect, useState } from 'react';

export const Account: React.FC<{}> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  const currentUser = useAppSelector(selectCurrentUser)
  const [ firstName, setFirstName ] = useState(currentUser?.firstName);
  const [ lastName, setLastName ] = useState(currentUser?.lastName);
  const [ city, setCity ] = useState(currentUser?.city);
  const [ province, setProvince ] = useState(currentUser?.province);
  const [ phoneNumber, setPhoneNumber ] = useState(currentUser?.phoneNumber);
  const [ bio, setBio ] = useState(currentUser?.kinesiologistInfo?.bio);
  const [ interests, setInterests ] = useState(currentUser?.interests);
  const [ yearOfExperience, setYearOfExperience ] = useState(currentUser?.kinesiologistInfo?.experiences);
  const [ specialization, setSpecialization ] = useState(currentUser?.kinesiologistInfo?.specialization);
  const [ accreditationNumber, setAccreditationNumber ] = useState(currentUser?.kinesiologistInfo?.accreditationNumber);

  useEffect(() => {
    if (currentUser) {
      setFirstName(currentUser.firstName);
      setLastName(currentUser.lastName);
      setCity(currentUser.city);
      setProvince(currentUser.province);
      setPhoneNumber(currentUser.phoneNumber);
      setBio(currentUser.kinesiologistInfo?.bio);
      setInterests(currentUser.interests);
      setYearOfExperience(currentUser.kinesiologistInfo?.experiences);
      setSpecialization(currentUser.kinesiologistInfo?.specialization);
      setAccreditationNumber(currentUser.kinesiologistInfo?.accreditationNumber);
    }
  }, [currentUser]);

  const onYearOfExperienceChanged = (value: string) => {
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue)) {
      setYearOfExperience(parsedValue);
    } else {
      setYearOfExperience(0);
    }
  }

  const onUpdateClicked = () => {
    const updatedUser = {
      ...currentUser,
      firstName,
      lastName,
      city,
      province,
      phoneNumber,
      kinesiologistInfo: {
        bio,
        experiences: yearOfExperience,
        specialization,
        accreditationNumber,
      },
    };

    dispatch(updateUser(updatedUser));
  }

  return (
    <div className={styles.pageContainer}>
      <PageTitle title="Account settings"></PageTitle>
      <div className={styles.formContainer}>
        <div className={styles.formWrapper}>
          <span className={styles.formTitle}>My Profile</span>
          <div className={styles.formRow}>
            <InputField placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            <InputField placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
          </div>
          <div className={styles.formRow}>
            <InputField placeholder="City" style={{width: '50%'}} value={city} onChange={(e) => setCity(e.target.value)}/>
            <ExSelect
              placeholder='Province'
              style={{ width: '50%' }}
              value={province}
              onChange={(value) => {
                setProvince(value);
              }}
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
            <InputField 
              placeholder="Phone number" 
              value={phoneNumber} 
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.formWrapper}>
          <span className={styles.formTitle}>Professional Info</span>
          <div className={styles.formRow}>
            <div className={styles.formColumn}>
              <Textarea 
                className={styles.textarea} 
                placeholder="My bio..." 
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
              <Textarea 
                className={styles.textarea} 
                placeholder="My interests..." 
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
              />
            </div>
            <div className={styles.formColumn}>
              <InputField 
                placeholder="Year of experience" 
                value={yearOfExperience}
                onChange={(e) => onYearOfExperienceChanged(e.target.value)}
              />
              <InputField 
                placeholder="Specitalization" 
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
              />
              <InputField 
                placeholder="Accreditation number" 
                value={accreditationNumber}
                onChange={(e) => setAccreditationNumber(e.target.value)}
              />
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
          onClick={() => onUpdateClicked()}
        >
          Update
        </Button>
      </div>
    </div>
  );
};

export default Account;