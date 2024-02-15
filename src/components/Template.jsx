import { Outlet, useLocation } from "react-router-dom";

export default function Template() {
  let location = useLocation();

  return (
    <div>
      <header>Navbar</header>
      <h1>Currently on: {location.pathname}</h1>
      <Outlet />
    </div>
  );
}
