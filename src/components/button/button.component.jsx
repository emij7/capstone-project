import { StyledButton } from "./button.styles";

export const Button = ({ children, buttonType, ...otherProps }) => {
  return <StyledButton {...otherProps}>{children}</StyledButton>;
};
