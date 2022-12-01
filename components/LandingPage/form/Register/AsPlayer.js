import Input from "../../../Input";
import PhoneInput from "../PhoneInput";
import React from "react";

function AsPlayer({ setData, Data }) {
  return (
    <>
      <Input
        OnChange={(name) =>
          setData((prev) => ({ ...prev, name: name.target.value }))
        }
        placeholder="Name"
      />
      <Input
        OnChange={(surname) =>
          setData((prev) => ({
            ...prev,
            surname: surname.target.value,
          }))
        }
        placeholder="Surname"
      />
      <PhoneInput
        placeholder="Phone Number"
        value={Data.mobile}
        onChange={(mobile) =>
          setData((prev) => ({
            ...prev,
            mobile: mobile,
          }))
        }
      />
      <Input
        OnChange={(email) =>
          setData((prev) => ({
            ...prev,
            email: email.target.value,
          }))
        }
        placeholder="Email Address"
        type="email"
      />
      <Input
        minLength="4"
        OnChange={(password) =>
          setData((prev) => ({
            ...prev,
            password: password.target.value,
          }))
        }
        placeholder="Password"
        type="password"
      />
      <Input
        minLength="4"
        OnChange={(confirmPassword) =>
          setData((prev) => ({
            ...prev,
            confirmPassword: confirmPassword.target.value,
          }))
        }
        placeholder="Confirm Password"
        type="password"
      />
      <Input
        OnChange={(birthday) =>
          setData((prev) => ({
            ...prev,
            birthday: birthday.target.value,
          }))
        }
        placeholder="Birthdate"
        type="date">
        <svg
          className="absolute z-0 top-2 right-3"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.25 2H11.75V1.25C11.75 1.05109 11.671 0.860322 11.5303 0.71967C11.3897 0.579018 11.1989 0.5 11 0.5C10.8011 0.5 10.6103 0.579018 10.4697 0.71967C10.329 0.860322 10.25 1.05109 10.25 1.25V2H5.75V1.25C5.75 1.05109 5.67098 0.860322 5.53033 0.71967C5.38968 0.579018 5.19891 0.5 5 0.5C4.80109 0.5 4.61032 0.579018 4.46967 0.71967C4.32902 0.860322 4.25 1.05109 4.25 1.25V2H2.75C2.15326 2 1.58097 2.23705 1.15901 2.65901C0.737053 3.08097 0.5 3.65326 0.5 4.25V13.25C0.5 13.8467 0.737053 14.419 1.15901 14.841C1.58097 15.2629 2.15326 15.5 2.75 15.5H13.25C13.8467 15.5 14.419 15.2629 14.841 14.841C15.2629 14.419 15.5 13.8467 15.5 13.25V4.25C15.5 3.65326 15.2629 3.08097 14.841 2.65901C14.419 2.23705 13.8467 2 13.25 2ZM14 13.25C14 13.4489 13.921 13.6397 13.7803 13.7803C13.6397 13.921 13.4489 14 13.25 14H2.75C2.55109 14 2.36032 13.921 2.21967 13.7803C2.07902 13.6397 2 13.4489 2 13.25V8H14V13.25ZM14 6.5H2V4.25C2 4.05109 2.07902 3.86032 2.21967 3.71967C2.36032 3.57902 2.55109 3.5 2.75 3.5H4.25V4.25C4.25 4.44891 4.32902 4.63968 4.46967 4.78033C4.61032 4.92098 4.80109 5 5 5C5.19891 5 5.38968 4.92098 5.53033 4.78033C5.67098 4.63968 5.75 4.44891 5.75 4.25V3.5H10.25V4.25C10.25 4.44891 10.329 4.63968 10.4697 4.78033C10.6103 4.92098 10.8011 5 11 5C11.1989 5 11.3897 4.92098 11.5303 4.78033C11.671 4.63968 11.75 4.44891 11.75 4.25V3.5H13.25C13.4489 3.5 13.6397 3.57902 13.7803 3.71967C13.921 3.86032 14 4.05109 14 4.25V6.5Z"
            fill="#0873F1"
          />
        </svg>
      </Input>
      <Input
        OnChange={(e) =>
          setData((prev) => ({
            ...prev,
            Professionality: e.target.value,
          }))
        }
        options={Data.professionalities.map((e) => (
          <option key={e.id} value={e.id}>
            {e.name}
          </option>
        ))}
        placeholder="Professionality"
        type="list">
        <svg
          className="absolute z-0 pointer-events-none top-2 right-3"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.52055 6.96912C5.57407 7.03019 5.64568 7.08012 5.72921 7.11462C5.81274 7.14911 5.90569 7.16714 6.00005 7.16714C6.09442 7.16714 6.18737 7.14911 6.2709 7.11462C6.35443 7.08012 6.42604 7.03019 6.47955 6.96912L11.7296 1.01079C11.7903 0.942065 11.826 0.86157 11.8326 0.77805C11.8392 0.69453 11.8166 0.611179 11.7672 0.537053C11.7177 0.462927 11.6434 0.400861 11.5522 0.357599C11.4611 0.314337 11.3566 0.291533 11.2501 0.291665H0.750055C0.643797 0.29201 0.539669 0.315107 0.448868 0.358473C0.358068 0.401838 0.284031 0.463832 0.23472 0.537787C0.185408 0.611741 0.162688 0.694858 0.169002 0.7782C0.175316 0.861541 0.210425 0.941954 0.270555 1.01079L5.52055 6.96912Z"
            fill="#0873F1"
          />
        </svg>
      </Input>
    </>
  );
}

export default AsPlayer;
