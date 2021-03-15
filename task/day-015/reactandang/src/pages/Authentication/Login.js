import React, { Fragment, useState } from "react";
import { FormLogin } from "../../components";

function randBg() {
  return Math.random() < 0.5 ? "heads" : "tails";
}

const Login = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  const submitForm = () => setSubmitted(true);
  // console.log(props);
  return (
    <Fragment>
      {console.log(randBg())}
      {!isSubmitted ? <FormLogin submitForm={submitForm} /> : null}
    </Fragment>
  );
};

export default Login;
