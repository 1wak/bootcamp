import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    password2: "",
    name: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    e.persist();
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log("Ini hasil stringify: ", JSON.stringify(values));
      setErrors(validate(values));
      setIsSubmitting(true);

      if (isSubmitting === true) localStorage.setItem("values", values);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  });

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
