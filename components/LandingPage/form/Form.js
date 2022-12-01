import "react-phone-number-input/style.css";
import Input from "../../Input";

import FormHeadPart from "./FormHeadPart";
import React, { useState } from "react";
import MyLoader, { FlexibleLoader } from "../../Common/Loading";
import ForgotForm from "./forgot/ForgotForm";
import AsClub from "./Register/AsClub";
import AsPlayer from "./Register/AsPlayer";
import QuitButton from "../../QuitButton";

function Form({
  show,
  submitHandler,
  loginHandler,
  handler,
  Data,
  setData,
  isLoading,
  withClub,
  setClub,
}) {
  const [code, setCode] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [showForgot, setShowForgot] = useState(false);

  const forgotHandler = () => {
    setShowLogin((prev) => !prev);
    setShowForgot((prev) => !prev);
  };

  const Register = () => {
    return (
      <div className="form_body">
        <FormHeadPart state={withClub} setState={setClub} />
        <form onSubmit={submitHandler} className="form">
          {withClub ? (
            <AsClub setData={setData} Data={Data} />
          ) : (
            <AsPlayer setData={setData} Data={Data} />
          )}
          <button className="form_btn">Sign Up</button>
          <button
            onClick={() => setShowLogin(true)}
            type="button"
            className="login_btn">
            Already have an account?
          </button>
        </form>
      </div>
    );
  };
  const Login = () => {
    return (
      <div className="form_body">
        <form onSubmit={loginHandler} className="form">
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
            Class="pr-12"
            OnChange={(password) =>
              setData((prev) => ({
                ...prev,
                password: password.target.value,
              }))
            }
            placeholder="Password"
            type="password">
            <button
              type="button"
              onClick={forgotHandler}
              className="text-[#0873F1] font-bold text-[10px] absolute top-2 right-2">
              Forgot
            </button>
          </Input>

          <button className="form_btn">Sign In</button>
          <button
            onClick={() => setShowLogin(false)}
            type="button"
            className="login_btn">
            Don't have an account?
          </button>
        </form>
      </div>
    );
  };

  return (
    <div className={show ? "modal_Bg" : "opacity-0"}>
      <div className="flex flex-col items-center Form_Container min-w-[300px]">
        {isLoading ? (
          <FlexibleLoader />
        ) : (
          <>
            <div className="modal-header">
              <div className="w-3" />
              <h6 className="mt-1 mb-1.5">
                {showLogin
                  ? "Login"
                  : showForgot
                  ? "Forgot Password"
                  : "Register"}
              </h6>
              <QuitButton func={showForgot ? forgotHandler : handler} />
            </div>
            {showLogin ? (
              Login()
            ) : showForgot ? (
              <ForgotForm show={showForgot} setCode={setCode} />
            ) : (
              Register()
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Form;
