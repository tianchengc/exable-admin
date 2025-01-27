import React, { useState } from 'react';
import './register.css';
import image from '../../assets/register_image.svg';

interface InputFieldProps {
  type: string;
  placeholder: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  list?: string;
  pattern?: string;
  className?: string;
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
  className,
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
    className={className}
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
    <>
      <div
        id="containerParent"
        className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto"
      >
        <div id="formContainer" className="w-full md:w-1/2">
          <form action="" className="register-form">
            <h3 className="text-2xl mb-6">Create my profile</h3>

            <div className="form-row">
              <InputField
                key="firstName"
                {...inputFields[0]}
                className="form-field"
              />
              <InputField
                key="lastName"
                {...inputFields[1]}
                className="form-field"
              />
            </div>
            <div className="form-row">
              <InputField
                key="city"
                {...inputFields[2]}
                className="form-field"
              />
              <InputField
                key="province"
                {...inputFields[3]}
                className="form-field"
              />
            </div>
            <div className="form-row">
              <InputField
                key="phoneNumber"
                {...inputFields[4]}
                className="form-field"
              />
              <InputField
                key="role"
                {...inputFields[5]}
                className="form-field"
              />
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
          <button type="submit" id="saveBtn" className="save-button">
            Save
          </button>
        </div>

        <div id="imgDivParent">
          <div id="imgDiv">
            <img
              style={{ marginRight: '12rem' }}
              src={image}
              alt="Illustration"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
