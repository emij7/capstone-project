import styled, { css } from "styled-components";
import { TButton } from "./button.types";

export const StyledButton = styled.button<TButton>`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  @media screen and (max-width: 600px) {
    min-width: 145px;
  }

  ${({ google }) => google && GoogleSignInButton}
  ${({ inverted }) => inverted && InvertedButton}
`;

const GoogleSignInButton = css`
  background-color: #4285f4;
  color: white;

  :hover {
    background-color: #326ac4;
    border: none;
    color: white;
  }
`;

const InvertedButton = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
