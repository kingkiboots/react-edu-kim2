import React from "react";

const TextFieldComponent = ({ value, option, onChange }) => {
  return (
    <div>
      <label>{option.labelName}</label>
      <input
        type={option.type ?? "text"}
        value={value ?? ""}
        onChange={onChange}
        disabled={option.isDisabled}
        readOnly={option.isReadOnly}
      />
    </div>
  );
};

export default TextFieldComponent;
