import React from "react";

const SampleDataLayout = ({ data }) => {
  console.log("SampleDataLayout 렌더링");

  return data.map((ele, idx) => (
    <div key={`${ele.id}${idx}`}>
      <p>userId : {ele.userId}</p>
      <p>
        <b>title : {ele.title}</b>
      </p>
      <p>body : {ele.body}</p>
      <hr />
    </div>
  ));
};

export default SampleDataLayout;
