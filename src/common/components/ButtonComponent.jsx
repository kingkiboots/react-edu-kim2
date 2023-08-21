import React from "react";

const ButtonComponent = (props) => {
  const { onClick, labelName } = props;
  return (
    <button type="button" onClick={onClick}>
      {labelName}
    </button>
  );
};

export default ButtonComponent;
