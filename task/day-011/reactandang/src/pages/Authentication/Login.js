import React from "react";
import { Link } from "react-router-dom";
import { Submit } from "../../components";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

export default class Login extends React.Component {
  emailInput = "Email is required";
  passwordInput = "Password is required";
  passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  errorValidation = () =>
    Yup.object().shape({
      email: Yup.string()
        .email("Your email address is not valid please kindly check carefull")
        .required(this.emailInput),
      password: Yup.string()
        .matches(this.passwordRegex, {
          message:
            "Your password must be minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character",
        })
        .required(this.passwordInput),
    });

  render() {
    return (
      <section className="form">
        <div className="auth__container">
          <h1>Login</h1>
          <div className="login">
            <div className="social clearfix">
              <a className="social__button social__button--facebook" href="/">
                <span className="fa">
                  <FaFacebookF />
                </span>
                Login with Facebook
              </a>
              <a className="social__button social__button--twitter" href="/">
                <span className="fa">
                  <FaTwitter />
                </span>
                Login with Twitter
              </a>
            </div>

            <div className="login__div login__div--center">
              <span className="">or login with</span>
            </div>

            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={this.errorValidation}
              onSubmit={async ({ email, password }) => {
                await localStorage.setItem("email", email);
                await localStorage.setItem("password", password);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <Field
                    name="email"
                    className="input"
                    type="email"
                    placeholder="Your email address"
                  />
                  {errors.email && touched.email && (
                    <div className="error__message">{errors.email}</div>
                  )}

                  <Field
                    name="password"
                    className="input"
                    type="password"
                    placeholder="Your password"
                  />
                  {errors.password && touched.password && (
                    <div className="error__message">{errors.password}</div>
                  )}

                  <div className="login__div">
                    <Submit title="Login" />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="switch__page">
            <span>
              Don't have an account? <Link to="/register">Register</Link>
            </span>
          </div>
        </div>
      </section>
    );
  }
}

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Input, Submit } from "../../components";
// // import { Field, Formik, Form } from "formik";
// // import * as yup from "yup";
// import { FaFacebookF, FaTwitter } from "react-icons/fa";
// import { userSchema } from "../../utils";

// const useLocalStorage = (key) => {
//   const [value, setValue] = useState(localStorage.getItem(key) || " ");
//   useEffect(() => {
//     localStorage.setItem(key, value);
//   });

//   return [value, setValue];
// };

// const Login = () => {
//   const [email, setEmail] = useLocalStorage("email");
//   const [pass, setPass] = useLocalStorage("pass");

//   const handleEmail = (e) => setEmail(e.target.value);
//   const handlePass = (e) => setPass(e.target.value);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let formData = {
//       email: e.target["email"].value,
//       password: e.target["pass"].value,
//       // ini bisa pake e.target[0].value gitu juga gak?
//       // Oke mas siap
//       // Harusnya bisa juga. Cuman kalau key value dalam array, mending langsung pasti aja tembak nama key array-nya
//       // Console.log aja dulu
//     };
//     const isValid = await userSchema.isValid(formData).then(function (valid) {
//       if (valid === true) {
//         console.log("Success");
//       } else {
//         console.log("Gagal");
//       }
//     });
//     return isValid;
//   };

//   return (
//     <section className="rmrm">
//       <div className="auth__container">
//         <h1>Login</h1>
//         <div className="login">
//           <div className="social clearfix">
//             <a className="social__button social__button--facebook" href="/">
//               <span className="fa">
//                 <FaFacebookF />
//               </span>
//               Login with Facebook
//             </a>
//             <a className="social__button social__button--twitter" href="/">
//               <span className="fa">
//                 <FaTwitter />
//               </span>
//               Login with Twitter
//             </a>
//           </div>

//           <div className="login__div login__div--center">
//             <span className="">or login with</span>
//           </div>

//           <for className="login__form" onSubmit={handleSubmit}>
//             <Input
//               name="email"
//               className="input"
//               type="email"
//               placeholder="Your email address"
//               onChange={handleEmail}
//             />
//             <Input
//               name="password"
//               className="input"
//               type="password"
//               placeholder="Your password"
//               onChange={handlePass}
//             />
//             <div className="login__div">
//               <Submit title="Login" />
//             </div>
//           </for>
//         </div>
//         <div className="switch__page">
//           <span>
//             Don't have an account? <Link to="/register">Register</Link>
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Login;

// export default class Login extends React.Component {
//   emailInput = "Kolom tidak boleh kosong";
//   passwordInput = "Kolom tidak boleh kosong";
//   passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//   errorValidation = () => {
//     yup.object().shape({
//       email: yup.string().email(this.emailInput).required(),
//       password: yup
//         .string()
//         .matches(this.passwordRegex, { message: "Minimal 10" })
//         .required(this.passwordInput),
//     });
//   };

//   render() {
//     return (
//       <section className="form">
//         <div className="auth__container">
//           <h1>Login</h1>
//           <div className="login">
//             <div className="social clearfix">
//               <a className="social__button social__button--facebook" href="/">
//                 <span className="fa">
//                   <FaFacebookF />
//                 </span>
//                 Login with Facebook
//               </a>
//               <a className="social__button social__button--twitter" href="/">
//                 <span className="fa">
//                   <FaTwitter />
//                 </span>
//                 Login with Twitter
//               </a>
//             </div>

//             <div className="login__div login__div--center">
//               <span className="">or login with</span>
//             </div>

//             <Formik
//               initialValues={{
//                 email: "",
//                 password: "",
//               }}
//               validationSchema={this.errorValidation}
//               onSubmit={async ({ email, password }) => {
//                 await localStorage.setItem("email", email);
//                 await localStorage.setItem("passwird", password);
//               }}
//             >
//               {({ errors, touched }) => (
//                 <form className="login__form" onSubmit={this.handleSubmit}>
//                   <Field
//                     name="email"
//                     className="input"
//                     type="email"
//                     placeholder="Your email address"
//                   />
//                   {errors.email && touched.email ? (
//                     <div>{errors.email}</div>
//                   ) : null}
//                   <Field
//                     name="password"
//                     className="input"
//                     type="password"
//                     placeholder="Your password"
//                   />
//                   {/* {errors.password && touched.password && (
//                     <div>{errors.password}</div>
//                   ) : null} */}
//                   <div className="login__div">
//                     <Submit title="Login" />
//                   </div>
//                 </form>
//               )}
//             </Formik>
//           </div>
//           <div className="switch__page">
//             <span>
//               Don't have an account? <Link to="/register">Register</Link>
//             </span>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// atas
