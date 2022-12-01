import { useState } from "react";
import Router from "next/router";

import ForgotChange from "./ForgotChange";
import ForgotEmail from "./ForgotEmail";
import ForgotVerificator from "./ForgotVerificator";

function ForgotForm({ handler, setCode }) {
  const [showForm, setShowForm] = useState({
    email: true,
    verificator: false,
    change: false,
  });

  const showFormHandler = () => {
    setShowForm((prev) => ({
      ...prev,
      email: !prev.email,
      verificator: !prev.verificator,
    }));
  };
  const showCodeVerificatorHandler = () => {
    setShowForm((prev) => ({
      ...prev,
      verificator: !prev.verificator,
      change: !prev.change,
    }));
  };
  const showChangeHandler = () => {
    Router.push({
      pathname: "/dashboard",
    });
  };

  return (
    <>
      <ForgotEmail handler={showFormHandler} show={showForm.email} />
      <ForgotVerificator
        handler={showCodeVerificatorHandler}
        show={showForm.verificator}
        setCode={setCode}
      />
      <ForgotChange handler={showChangeHandler} show={showForm.change} />
    </>
  );
}

export default ForgotForm;
