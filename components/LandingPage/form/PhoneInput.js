import Image from "next/image";
import Input, { getCountryCallingCode } from "react-phone-number-input/input";
import "react-phone-number-input/style.css";

function PhoneInput({ value, onChange }) {
  return (
    <div className="input flex items-center">
      <label htmlFor="PI" className="flex items-center mx-1">
        <div className="min-h-[18px] min-w-[20px] mt-1">
          <Image src="/Flag_of_Austria 1.svg" width={20} height={18} />
        </div>
      </label>
      <Input
        id="PI"
        international
        placeholder="Phone Number"
        value={value}
        country="AT"
        onChange={onChange}
        className="ml-1.5 border-[#1A1B1B]/50 bg-transparent outline-none border-l pl-1 flex-1"
        required
      />
    </div>
  );
}

export default PhoneInput;
