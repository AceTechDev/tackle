import Otp from "../../../Otp";

function ForgotVerificator({ handler, show, setCode }) {
  const submitHandler = (e) => {
    e.preventDefault();
    handler();
  };
  return (
    <form onSubmit={submitHandler} className={`form ${!show && "hidden"}`}>
      <p className="text-xs w-full text-center mb-5">
        Please Enter The 4 Digit Code Sent To your email
      </p>
      <Otp func={setCode} />
      <button className="form_btn text-xs text-[#0873F1] bg-white hover:bg-white hover:text-[#0e52a0] font-bold mt-5">
        Resend Code
      </button>
      <button className="form_btn">Send</button>
    </form>
  );
}

export default ForgotVerificator;
