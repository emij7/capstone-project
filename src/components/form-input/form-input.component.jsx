import { FormInputLabel, Group, StyledFormInput } from "./form-input.styles";

export const FormInput = ({ label, type, onChangeHandler, name, value }) => {
  return (
    <Group>
      <StyledFormInput
        type={type}
        required
        onChange={onChangeHandler}
        name={name}
        value={value}
      />
      {label && (
        <FormInputLabel className={`${value.length > 0 ? "shrink" : ""}`}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};
