import React, { useCallback, useEffect, useMemo, useState } from "react";

const SampleForMemoizationLayout = () => {
  const [data, setData] = useState(0);
  //   const [data2, setData2] = useState();
  // useMemo, useCallback: 행동하는 시기: 렌더링 시

  //useMemo : 의존성 배열원리는 useEffect와 동일. 다만 렌더링을 하는 시점에 실행한다는 것이 차이점
  useMemo(() => {
    console.log("usememo 실행");
  }, []);

  console.log("안녕");

  useEffect(() => {
    console.log("useEffect 실행");
  }, [data]);

  // usecallback : 의존성 배열 안에 있는 변수가 바뀔 때에만 함수를 렌더링 함!
  const callbackFunc = useCallback(() => {
    console.log("usecallback 내에서의 data :", data);
  }, [data]);

  return (
    <div>
      <button type="button" onClick={callbackFunc}>
        usecallback btn
      </button>
      <button type="button" onClick={() => setData(data + 1)}>
        data + 1 하기
      </button>
      data : {data}
    </div>
  );
};

export default SampleForMemoizationLayout;
