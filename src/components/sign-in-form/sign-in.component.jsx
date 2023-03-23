import {
  signInWithGooglePopup,
  signInWithMailAndPassword,
} from "../../utils/firebase/firebase";
import { useState } from "react";
import {} from "../../utils/firebase/firebase";
import { Button } from "../button/button.component";
import { FormInput } from "../form-input/form-input.component";
import "./sing-in.styles.scss";

export const SignIn = () => {
  const defaultFormValues = {
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(defaultFormValues);
  const { email, password } = formValues;

  const resetFormValues = () => {
    setFormValues(defaultFormValues);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInWithMailAndPassword(email, password);
      resetFormValues();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password");
          break;
        case "auth/user-not-found":
          alert("No user found");
          break;
        default:
          console.log("Unable to Log in, encounted an error", error);
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your e-mail and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={"google"}
            onClick={signInWithGoogle}
          >
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};