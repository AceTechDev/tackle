import Otp from "../../Otp";
import React from "react";

function FormCodeVerificator({ changeEmail,show, func, submit }) {
  return (
    <div className={show ? "modal_Bg" : "opacity-0"}>
      <div className="Form_Container min-w-[310px]">
        <form onSubmit={submit} className="code_verificator">
          <label
            htmlFor="code"
            className="text-[#056CE5] font-semibold text-xl h-10 mb-2">
            Verification Code

          </label>
          <p className="text-xs w-full text-center mb-5">
            Please Enter The 4 Digit Code Sent To your email
          </p>
          <Otp func={func} />
          <div className="flex flex-col items-center justify-center w-[80%] mt-4">
            <button className="form_btn mx-2.5">Submit</button>
            <button type="button" onClick={() => changeEmail()} className="form_btn text-xs text-[#0873F1] bg-white hover:bg-white hover:text-[#0e52a0] font-bold mt-1">
              Change email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormCodeVerificator;
