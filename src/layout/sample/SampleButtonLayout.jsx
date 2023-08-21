import React, { useEffect, useState } from "react";
import ButtonComponent from "../../common/components/ButtonComponent";
import { selectPosts } from "../../api/sample/SampleApi";

const SampleButtonLayout = ({ data, setData, postId }) => {
  console.log("SampleButtonLayout 렌더링");

  const [buttonLabelName, setButtonLabelName] = useState("fetch");
  const isDataExist = data.length > 0;

  /**
   * Func
   */
  const fetch = async () => {
    const param = { postId }; // { postId: postId };
    await selectPosts(param)
      .then((res) => {
        if (Array.isArray(res)) setData(res);
        else setData([res]);
      })
      .catch((err) => console.log("err", err));
  };
  //변경 감지
  useEffect(() => {
    console.log("hi");
    if (isDataExist) setButtonLabelName("refetch");
    else setButtonLabelName("fetch");
  }, [isDataExist]);

  useEffect(() => {
    console.log("buttonLabelName 바뀌었습니다.");
  }, [buttonLabelName]);

  return (
    <>
      <ButtonComponent onClick={fetch} labelName={buttonLabelName} />
      {isDataExist && (
        <ButtonComponent
          onClick={() => {
            setData([]);
          }}
          labelName={"remove..."}
        />
      )}
    </>
  );
};

export default SampleButtonLayout;
