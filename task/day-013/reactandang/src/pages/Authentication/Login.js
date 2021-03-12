import React, { Fragment, useState } from "react";
import { FormLogin } from "../../components";

const Login = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  const submitForm = () => setSubmitted(true);
  return (
    <Fragment>
      {!isSubmitted ? <FormLogin submitForm={submitForm} /> : null}
    </Fragment>
  );
};

export default Login;
