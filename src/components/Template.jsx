import { Outlet } from "react-router-dom";

export default function Template() {
  return (
    <div>
      <header>Navbar</header>
      <Outlet />
    </div>
  );
}
