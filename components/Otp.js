import { useRef } from "react";

function Otp({ func }) {
  const value = useRef({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
  });

  const inputfocus = (e) => {
    if (e.key === "Delete" || e.key === "Backspace") {
      const next = e.target.tabIndex - 2;
      if (next > -1) {
        e.target.form.elements[next].focus();
      }
    } else {
      const next = e.target.tabIndex;
      if (next < 5) {
        e.target.form.elements[next].focus();
      }
    }
  };

  const handleChange = (v, e) => {
    value.current = value[v] = e.target.value;

    func(value.otp1 + value.otp2 + value.otp3 + value.otp4);
  };
  return (
    <div className="flex justify-center w-full">
      <input
        required
        type="tel"
        autoComplete="off"
        className="otp_box"
        tabIndex="1"
        maxLength="1"
        value={value.otp1 || ""}
        onChange={(e) => handleChange("otp1", e)}
        onKeyUp={(e) => inputfocus(e)}
      />
      <input
        required
        type="tel"
        autoComplete="off"
        className="otp_box"
        tabIndex="2"
        maxLength="1"
        value={value.otp2 || ""}
        onChange={(e) => handleChange("otp2", e)}
        onKeyUp={(e) => inputfocus(e)}
      />
      <input
        required
        type="tel"
        autoComplete="off"
        className="otp_box"
        tabIndex="3"
        maxLength="1"
        value={value.otp3 || ""}
        onChange={(e) => handleChange("otp3", e)}
        onKeyUp={(e) => inputfocus(e)}
      />
      <input
        required
        type="tel"
        autoComplete="off"
        className="otp_box"
        tabIndex="4"
        maxLength="1"
        value={value.otp4 || ""}
        onChange={(e) => handleChange("otp4", e)}
        onKeyUp={(e) => inputfocus(e)}
      />
    </div>
  );
}

export default Otp;
