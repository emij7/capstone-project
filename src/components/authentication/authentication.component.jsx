import { SignIn } from "../sign-in-form/sign-in.component";
import { SignUp } from "../sign-up-form/sign-up.component";
import "./authentication.styles.scss";

export const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};
