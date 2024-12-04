import React, { useState } from "react";
import "./register.css";
import image from "../../assets/register_image.svg";

export const Register: React.FC = () => {
  // State variables with proper types
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [selectedProvince, setSelectedProvince] = useState<string>("");
  const [role, setRole] = useState<string>("");

  // Handler to simulate form submission (you can customize it)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log({
    //   firstName,
    //   lastName,
    //   city,
    //   phoneNumber,
    //   selectedProvince,
    //   role,
    // });
  };

  return (
    <>
      <div id="row">
        <div id="container">
          <h3>Create my profile</h3>
          <form onSubmit={handleSubmit}>
            {/* First Name */}
            <input
              type="text"
              placeholder="*First name"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            {/* Last Name */}
            <input
              type="text"
              placeholder="*Last name"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <br />

            {/* City */}
            <input
              type="text"
              placeholder="City"
              id="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            {/* Province */}
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

            {/* Phone Number */}
            <input
              type="number"
              placeholder="Phone"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            />

            {/* Role */}
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

            <button type="submit">Save</button>
          </form>
        </div>
        <div id="image">
          <img src={image} alt="Register Illustration" />
        </div>
      </div>
    </>
  );
};

export default Register;