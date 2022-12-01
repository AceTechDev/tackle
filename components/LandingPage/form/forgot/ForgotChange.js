import Input from "../../../Input";
function ForgotChange({ handler, show }) {
  const submitHandler = (e) => {
    e.preventDefault();
    handler();
  };
  return (
    <form onSubmit={submitHandler} className={`form ${!show && "hidden"}`}>
      <p className="text-xs w-full text-center mb-5">
        Your New Passwod Must Be Different From Previously Used Password
      </p>
      <Input
        placeholder="Password"
        type="password"
        Class="pr-12 mt-2"
        required
      />
      <Input
        placeholder="Confirm Password"
        type="password"
        Class="pr-12"
        required
      />
      <button className="form_btn">Send</button>
    </form>
  );
}

export default ForgotChange;
