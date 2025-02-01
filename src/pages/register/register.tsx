import React, { useState } from 'react';
import image from '../../assets/register_image.svg';
import logo from '../../assets/logo.svg';
import Footer from '../../components/footer';
import styles from './register.module.css';

interface InputFieldProps {
  type: string;
  placeholder: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  list?: string;
  pattern?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  id,
  value,
  onChange,
  required = false,
  list,
  pattern,
}) => (
  <input
    type={type}
    placeholder={placeholder}
    id={id}
    value={value}
    onChange={onChange}
    required={required}
    list={list}
    pattern={pattern}
    className={styles.formField}
  />
);

function Register(): JSX.Element {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [selectedProvince, setSelectedProvince] = useState<string>('');
  const [role, setRole] = useState<string>('');

  const inputFields = [
    {
      type: 'text',
      placeholder: '*First name',
      id: 'firstName',
      value: firstName,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setFirstName(e.target.value),
      required: true,
    },
    {
      type: 'text',
      placeholder: '*Last name',
      id: 'lastName',
      value: lastName,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setLastName(e.target.value),
      required: true,
    },
    {
      type: 'text',
      placeholder: 'City',
      id: 'city',
      value: city,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setCity(e.target.value),
    },
    {
      type: 'text',
      placeholder: '*Province',
      id: 'province',
      value: selectedProvince,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setSelectedProvince(e.target.value),
      required: true,
      list: 'province',
    },
    {
      type: 'number',
      placeholder: 'Phone',
      id: 'phoneNumber',
      value: phoneNumber,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setPhoneNumber(e.target.value),
      pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}',
    },
    {
      type: 'text',
      placeholder: '*Role in organisation',
      id: 'role',
      value: role,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setRole(e.target.value),
      required: true,
      list: 'role',
    },
  ];

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <img src={logo} alt="Lung Health Foundation Logo" className={styles.logo} />
      </header>

      <main className={styles.mainContent}>
        <div className={styles.formWrapper}>
          <form className={styles.form}>
            <h3 className={styles.title}>Create my profile</h3>

            <div className={styles.formRow}>
              <InputField key="firstName" {...inputFields[0]} />
              <InputField key="lastName" {...inputFields[1]} />
            </div>
            <div className={styles.formRow}>
              <InputField key="city" {...inputFields[2]} />
              <InputField key="province" {...inputFields[3]} />
            </div>
            <div className={styles.formRow}>
              <InputField key="phoneNumber" {...inputFields[4]} />
              <InputField key="role" {...inputFields[5]} />
            </div>

            <datalist id="province">
              <option value="Ontario" />
              <option value="Quebec" />
              <option value="Alberta" />
              <option value="British Columbia" />
              <option value="Saskatchewan" />
              <option value="Manitoba" />
              <option value="New Brunswick" />
              <option value="Nova Scotia" />
              <option value="Prince Edward Island" />
              <option value="Newfoundland and Labrador" />
              <option value="Northwest Territories" />
              <option value="Yukon" />
              <option value="Nunavut" />
            </datalist>
            <datalist id="role">
              <option value="Abilities Centre" />
              <option value="Brock Functional Inclusive Training Centre (BFIT)" />
            </datalist>
          </form>
          <button type="submit" className={styles.saveButton}>
            Save
          </button>
        </div>

        <div className={styles.imageWrapper}>
          <img
            src={image}
            alt="Illustration"
            className={styles.image}
          />
        </div>
      </main>
      
      <Footer className={styles.footer} />
    </div>
  );
}

export default Register;
