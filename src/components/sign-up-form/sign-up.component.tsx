import { useState } from "react";
import {
  createUserDocumentFromAuth,
  newUserWithUserAndPassword,
} from "../../utils/firebase/firebase";
import { Button } from "../button/button.component";
import { FormInput } from "../form-input/form-input.component";
import { SignUpContainer } from "./sing-up.styles";
import { User, UserCredential } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { ButtonsContainer } from "../sign-in-form/sing-in.styles";

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const userCredential: UserCredential | undefined =
        await newUserWithUserAndPassword(email, password);
      if (userCredential) {
        const user: User | null = userCredential.user;
        if (user) {
          await createUserDocumentFromAuth(user, { displayName });
          resetFormValues();
        }
      }
    } catch (error) {
      const firebaseError = error as FirebaseError;
      if (firebaseError.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      }
      console.log("Unable to create user, encounted an error", error);
    }
  };
  return (
    <SignUpContainer>
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
        <ButtonsContainer>
          <Button type="submit">Sign Up</Button>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  );
};
