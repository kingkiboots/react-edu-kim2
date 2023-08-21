import React from "react";
import TextFieldComponent from "../../common/components/TextFieldComponent";

const SampleTextFieldLayout = ({ postId, setPostId }) => {
  console.log("SampleTextFieldLayout 렌더링");

  const onChange = (e) => {
    // const { name, value } = e.target;
    const { value } = e.target;
    console.log("value", value);
    if (value < 0) return;
    else setPostId(value);
  };

  return (
    <TextFieldComponent
      value={postId}
      onChange={onChange}
      option={{ labelName: "postId : ", type: "number" }}
    />
  );
};

export default SampleTextFieldLayout;
