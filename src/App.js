import { useEffect, useState } from "react";
import "./App.css";
import { selectPosts } from "./api/sample/SampleApi";
import { Link } from "react-router-dom";

function App() {
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

  const element = <h1>HELLO WORLD!!!!</h1>;

  return (
    <div style={{ margin: "2rem" }}>
      {element}
      <Link to="/app2">app2 화면으로 가기</Link>
      <div>
        <label>postId :</label>
        <input type="number" value={postId ?? ""} onChange={onChange} />
      </div>
      <button onClick={fetch}>{buttonLabelName}!!!</button>
      {isDataExist && (
        <button
          onClick={() => {
            setData([]);
          }}
        >
          remove...
        </button>
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
    </div>
  );
}

export default App;
