import React from "react";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  // 화면 이동하는 방법: <Link> 및 <NavLink> or useNavigate()
  // Outlet : 한 레이아웃 내에서 화면들을 이동 시킬 경우 사용

  return (
    <div>
      <Link to="/">app1로</Link>
      <Link to="/app2">app2로</Link>
      <Link to="/app3">app3로</Link>
      <Outlet />
    </div>
  );
};

export default Sidebar;
