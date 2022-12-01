import Input from "../../../Input";

function forgotEmail({ handler, show }) {
  const submitHandler = (e) => {
    e.preventDefault();
    handler();
  };
  return (
    <form onSubmit={submitHandler} className={`form ${!show && "hidden"}`}>
      <p className="text-xs w-full text-center mb-5">
        Please Enter Your Email Address To Receive a Validation Code
      </p>
      <Input placeholder="Email Address" type="email" />

      <button className="form_btn">Send</button>
    </form>
  );
}

export default forgotEmail;
