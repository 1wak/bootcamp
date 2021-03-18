export default function validateInfo(values) {
  let errors = {};

  if (!values.email) {
    errors.email = "Email required";
  } else if (
    // eslint-disable-next-line
    !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      values.email
    )
  ) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      values.password
    )
  ) {
    errors.password =
      "Your password must be minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character";
  }

  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }

  if (!values.name) {
    errors.name = "Name is required";
  } else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    errors.name = "Enter a valid name";
  }

  if (!values.phone) {
    errors.phone = "Phone number is required";
  } else if (!/^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$/g.test(values.phone)) {
    errors.phone = "Enter a valid phone number";
  }

  if (!values.address) {
    errors.address = "Address is required";
  }
  return errors;
}
