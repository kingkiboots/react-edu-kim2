import React, { useEffect, useState } from "react";
import ButtonComponent from "./common/components/ButtonComponent";
import TextFieldComponent from "./common/components/TextFieldComponent";
import { selectPosts } from "./api/sample/SampleApi";
import { useNavigate } from "react-router-dom";

const App2 = () => {
  /**
   * Data state 쓸 때 안 쓸 때 비교
   */
  const [data, setData] = useState([]);
  const [postId, setPostId] = useState();
  // let postId = "";
  // const setPostId = (val) => {
  //   postId = val;
  // };
  // console.log("postId", postId);
  const [buttonLabelName, setButtonLabelName] = useState("fetch");
  // 화면 이동하는 hook => navigate('이동할 url')
  // navigate(-1) 뒤로 가기
  const navigate = useNavigate();

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

  const onChange = (e) => {
    // const { name, value } = e.target;
    const { value } = e.target;
    console.log("value", value);
    if (value < 0) return;
    else setPostId(value);
  };

  //변경 감지
  useEffect(() => {
    console.log("hi");
    if (isDataExist) setButtonLabelName("refetch");
    else setButtonLabelName("fetch");
  }, [isDataExist]);

  const element = <h1>HELLO WORLD!!!!2</h1>;

  /**
   * Def
   */
  //   const colDef = [
  //     {
  //       labelName: "글쓴이 번호",
  //       name: "userId",
  //     },
  //     {
  //       labelName: "제목",
  //       name: "title",
  //     },
  //     {
  //       labelName: "내용",
  //       name: "body",
  //     },
  //   ];

  return (
    <div style={{ margin: "2rem" }}>
      {element}
      <ButtonComponent
        onClick={() => navigate("/app3")}
        labelName="app3 화면으로 가기"
      />
      <ButtonComponent
        onClick={() => navigate(-1)}
        labelName="뒤로 가기"
      />
      {/* <div>
        <label>postId :</label>
        <input type="number" value={postId ?? ""} onChange={onChange} />
      </div> */}
      <TextFieldComponent
        value={postId}
        onChange={onChange}
        option={{ labelName: "postId : ", type: "number" }}
      />
      <ButtonComponent onClick={fetch} labelName={buttonLabelName} />
      {isDataExist && (
        <ButtonComponent
          onClick={() => {
            setData([]);
          }}
          labelName={"remove..."}
        />
      )}
      {data.map((ele, idx) => {
        return (
          <div key={`${ele.id}${idx}`}>
            <p>userId : {ele.userId}</p>
            <p>
              <b>title : {ele.title}</b>
            </p>
            <p>body : {ele.body}</p>
            <hr />
          </div>
        );
      })}
      {/* <TableComponent colDef={colDef} list={data} /> */}
    </div>
  );
};

export default App2;
