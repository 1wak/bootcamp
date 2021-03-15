import React, { useState } from "react";
import { FormRegister, FormSuccess } from "../../components";

const Register = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  const submitForm = () => setSubmitted(true);
  return (
    <React.Fragment>
      {!isSubmitted ? (
        <FormRegister submitForm={submitForm} />
      ) : (
        <FormSuccess />
      )}
    </React.Fragment>
  );
};

export default Register;
