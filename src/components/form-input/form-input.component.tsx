import { FormInputLabel, Group, StyledFormInput } from "./form-input.styles";

type FormInputProps = {
  label: string;
  type: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
  value: string;
};
// type FormInputProps = {}

export const FormInput = ({
  label,
  type,
  onChangeHandler,
  name,
  value,
}: FormInputProps) => {
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
