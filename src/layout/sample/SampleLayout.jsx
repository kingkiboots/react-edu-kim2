import React, { useState } from "react";
import SampleTextFieldLayout from "./SampleTextFieldLayout";
import SampleButtonLayout from "./SampleButtonLayout";
import SampleDataLayout from "./SampleDataLayout";

const SampleLayout = () => {
  console.log("SampleLayout 렌더링");
  // 컴포넌트를 쪼개어 state를 최대한 밑으로 내리면 불필요한 렌더링을 줄일 수 있습니다.
  const [data, setData] = useState([]);
  const [postId, setPostId] = useState(null);

  return (
    <div style={{ margin: "2rem" }}>
      <SampleTextFieldLayout postId={postId} setPostId={setPostId} />
      <SampleButtonLayout data={data} setData={setData} postId={postId} />
      <SampleDataLayout data={data} />
    </div>
  );
};

export default SampleLayout;
