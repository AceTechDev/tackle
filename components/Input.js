import React from "react";

function Input({
  type,
  placeholder,
  children,
  Class,
  ContainerClass,
  Editable,
  Value,
  OnChange,
  options,
}) {
  type = type ? type : "text";
  return (
    <div className={`relative w-full z-10 ${ContainerClass}`}>
      {type === "list" ? (
        <select
          onChange={OnChange}
          defaultValue={"Professionality"}
          className={`input ${Class} py-0 bg-transparent`}
          name="Professionality"
          id="Professionality">
          {options}
        </select>
      ) : type === "date" ? (
        <input
          onChange={OnChange}
          type="text"
          onFocus={
            type === "date"
              ? (ee) => ee.target.type = "date"
              : (e) => (e.target.type = type)
          }
          max="2004-01-01"
          className={`input ${Class}`}
          placeholder={placeholder}
          value={Value}
          required
        />
      ) : (
        <input
          onChange={OnChange}
          type={type}
          className={`input ${Class}`}
          placeholder={placeholder}
          value={Value}
          required
        />
      )}
      {children}
      {Editable && (
        <svg
          className="absolute top-2 right-2 lg:right-3 z-0 pointer-events-none w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px]"
          width="18"
          height="18"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.25 15.25H17.75V16.5H0.25V15.25ZM14.875 4.625C15.375 4.125 15.375 3.375 14.875 2.875L12.625 0.625C12.125 0.125 11.375 0.125 10.875 0.625L1.5 10V14H5.5L14.875 4.625ZM11.75 1.5L14 3.75L12.125 5.625L9.875 3.375L11.75 1.5ZM2.75 12.75V10.5L9 4.25L11.25 6.5L5 12.75H2.75Z"
            fill="#f1c224"
          />
        </svg>
      )}
      {type === "list" && (
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
      )}
    </div>
  );
}

export default Input;
