import { useState } from "react";
import {
  createUserDocumentFromAuth,
  newUserWithUserAndPassword,
} from "../../utils/firebase/firebase";
import { Button } from "../button/button.component";
import { FormInput } from "../form-input/form-input.component";
import "./sing-up.styles.scss";

export const SignUp = () => {
  const defaultFormValues = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formValues, setFormValues] = useState(defaultFormValues);
  const { displayName, email, password, confirmPassword } = formValues;

  const resetFormValues = () => {
    setFormValues(defaultFormValues);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { user } = await newUserWithUserAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormValues();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      }
      console.log("Unable to create user, encounted an error", error);
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your e-mail and password</span>
      <form onSubmit={handleSubmit} method="POST">
        <FormInput
          label={"Display Name"}
          type={"text"}
          onChangeHandler={handleChange}
          name={"displayName"}
          value={displayName}
        />
        <FormInput
          label={"Email"}
          type={"email"}
          onChangeHandler={handleChange}
          name={"email"}
          value={email}
        />
        <FormInput
          label={"Password"}
          type={"password"}
          onChangeHandler={handleChange}
          name={"password"}
          value={password}
        />
        <FormInput
          label={"Confirm Password"}
          type={"password"}
          onChangeHandler={handleChange}
          name={"confirmPassword"}
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};
