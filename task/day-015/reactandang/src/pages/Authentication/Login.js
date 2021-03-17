import React from "react";
import { FormLogin } from "../../components";

const Login = () => {
  // const [isSubmitted, setSubmitted] = useState(false);
  // const submitForm = () => setSubmitted(true);
  return (
    <React.Fragment>
      <FormLogin />
      {/* {!isSubmitted ? <FormLogin submitForm={submitForm} /> : <FormSuccess />} */}
    </React.Fragment>
  );
};

export default Login;
