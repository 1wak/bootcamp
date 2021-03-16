import React, { useState } from "react";
import { FormLogin, FormSuccess } from "../../components";

const Login = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  const submitForm = () => setSubmitted(true);
  return (
    <React.Fragment>
      {!isSubmitted ? <FormLogin submitForm={submitForm} /> : <FormSuccess />}
    </React.Fragment>
  );
};

export default Login;
