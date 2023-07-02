import { FC } from "react";
import { StyledButton } from "./button.styles";
import { TButton } from "./button.types";

export const Button: FC<TButton> = ({
  children,
  google,
  base,
  inverted,
  onClick,
  type,
  ...otherProps
}) => {
  return (
    <StyledButton
      google={google}
      base={base}
      inverted={inverted}
      onClick={onClick}
      type={type}
      {...otherProps}
    >
      {children}
    </StyledButton>
  );
};
