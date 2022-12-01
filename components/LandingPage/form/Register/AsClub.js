import Input from "../../../Input";
import PhoneInput from "../PhoneInput";
import React from "react";

function AsClub({ setData, Data }) {
  return (
    <>
      <Input  OnChange={(name) =>
          setData((prev) => ({ ...prev, clubName: name.target.value }))
      } placeholder="Club Name" />
      <Input  OnChange={(name) =>
          setData((prev) => ({ ...prev, name: name.target.value }))
      } placeholder="Name" />
      <Input     OnChange={(surname) =>
          setData((prev) => ({
              ...prev,
              surname: surname.target.value,
          }))
      } placeholder="Surname" />
      <PhoneInput
        placeholder="Phone Number"
        onChange={(mobile) =>
          setData((prev) => ({
            ...prev,
            mobile: mobile,
          }))
        }
      />
      <Input   OnChange={(email) =>
          setData((prev) => ({
              ...prev,
              email: email.target.value,
          }))
      } placeholder="Email Address" type="email" />
      <Input    OnChange={(password) =>
          setData((prev) => ({
              ...prev,
              password: password.target.value,
          }))
      } minLength="4" placeholder="Password" type="password" />
      <Input     OnChange={(confirmPassword) =>
          setData((prev) => ({
              ...prev,
              confirmPassword: confirmPassword.target.value,
          }))
      } minLength="4" placeholder="Confirm Password" type="password" />
    </>
  );
}

export default AsClub;
