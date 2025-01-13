import React, { useState } from "react";
import "./register.css";
import image from "../../assets/register_image.svg";

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
    />
);

function Register(): JSX.Element {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [selectedProvince, setSelectedProvince] = useState<string>("");
    const [role, setRole] = useState<string>("");

    const inputFields = [
        { type: "text", placeholder: "*First name", id: "firstName", value: firstName, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value), required: true },
        { type: "text", placeholder: "*Last name", id: "lastName", value: lastName, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value), required: true },
        { type: "text", placeholder: "City", id: "city", value: city, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value) },
        { type: "text", placeholder: "*Province", id: "province", value: selectedProvince, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setSelectedProvince(e.target.value), required: true, list: "province" },
        { type: "number", placeholder: "Phone", id: "phoneNumber", value: phoneNumber, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value), pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}" },
        { type: "text", placeholder: "*Role in organisation", id: "role", value: role, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setRole(e.target.value), required: true, list: "role" },
    ];

    return (
        <>
            <div id="containerParent">
                <div id="formContainer">
                    <h3>Create my profile</h3>
                    <form action="">
                        {inputFields.map((field, index) => (
                            <InputField key={index} {...field} />
                        ))}
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
                        <br />
                        <button type="submit" id="saveBtn">
                            Save
                        </button>
                    </form>
                </div>
            </div>

            <div id="imgDivParent">
                <div id="imgDiv">
                    <img style={{ marginRight: '12rem' }} src={image} alt="Illustration" />
                </div>
            </div>
        </>
    );
}

export default Register;
