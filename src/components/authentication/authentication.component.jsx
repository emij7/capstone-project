import { SignIn } from "../sign-in-form/sign-in.component";
import { SignUp } from "../sign-up-form/sign-up.component";
import { AuthenticationContainer } from "./authentication.styles";

export const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  );
};
