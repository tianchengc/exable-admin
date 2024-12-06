import React, { useState } from "react";
import "./register.css";
import image from "../../assets/register_image.svg";

function Register(): JSX.Element {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [selectedProvince, setSelectedProvince] = useState<string>("");
    const [role, setRole] = useState<string>("");

    return (
        <>
            <div id="containerParent">
                <div id="formContainer">
                    <h3>Create my profile</h3>
                    <form action="">
                        <input
                            type="text"
                            placeholder="*First name"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="*Last name"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                        <br />
                        <input
                            type="text"
                            placeholder="City"
                            id="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <input
                            list="province"
                            placeholder="*Province"
                            id="province"
                            value={selectedProvince}
                            onChange={(e) => setSelectedProvince(e.target.value)}
                            required
                        />
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
                        <br />
                        <input
                            type="number"
                            placeholder="Phone"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        />
                        <input
                            list="role"
                            placeholder="*Role in organisation"
                            id="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            required
                        />
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
                    <img src={image} alt="Illustration" />
                </div>
            </div>
        </>
    );
}

export default Register;
