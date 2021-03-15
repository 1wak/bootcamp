import React from "react";
import { useHistory } from "react-router";
import { Success } from "../atoms";

const FormSuccess = () => {
  const history = useHistory();
  setTimeout(() => {
    history.push("/login");
  }, 2000);
  return (
    <section className="form">
      <Success />
      <h1 className="text-center">Register Success</h1>
    </section>
  );
};

export default FormSuccess;
