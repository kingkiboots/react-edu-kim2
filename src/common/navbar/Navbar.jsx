import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  // 화면 이동하는 방법: <Link> 및 <NavLink> or useNavigate()
  // Outlet : 한 레이아웃 내에서 화면들을 이동 시킬 경우 사용
  // <></> (a.k.a <React.Fragment></React.Fragment>) => 엘리먼트 반환 시 하나의 돔으로 반환을 해야하는데,
  // <div></div><span></span> 이렇게 같은 레벨의 돔을 두개 반환할 시 에러가 난다.
  // 이때 Fragment를 사용하여 두 돔을 묶는다면 하나의 돔 엘리먼트 반환함과 동시에 브라우저는 <Fragment/>는 생략함
  return (
    <>
      <div
        style={{
          margin: "2rem",
          display: "flex",
          placeContent: "space-between",
          width: "60%",
        }}
      >
        <Link to="/">app1로</Link>
        <Link to="/app2">app2로</Link>
        <Link to="/app3">app3로</Link>
        <Link to="/memoizationSample">memoization 샘플 화면으로</Link>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
