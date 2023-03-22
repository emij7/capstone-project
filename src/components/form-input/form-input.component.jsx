import "./form-input.styles.scss";

export const FormInput = ({ label, type, onChangeHandler, name, value }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        type={type}
        required
        onChange={onChangeHandler}
        name={name}
        value={value}
      />
      {label && (
        <label
          className={`${value.length > 0 ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};
