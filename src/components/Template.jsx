import { Outlet, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { IoHeartOutline } from "react-icons/io5";
import { PiShoppingCartThin } from "react-icons/pi";

export default function Template() {
  let location = useLocation();

  return (
    <div>
      <header className="flex justify-between border-b h-[50px] items-center">
        <h2 className="font-semibold ml-4">IronTech</h2>
        <nav className="flex gap-12">
          <NavLink to={"/"}>
            <p>Home</p>
          </NavLink>
          <NavLink to={"/products"}>
            <p>Products</p>
          </NavLink>
          <NavLink to={"/sign-in"}>
            <p>Sign In</p>
          </NavLink>
          <NavLink to={"/sign-up"}>
            <p>Sign Up</p>
          </NavLink>
        </nav>
        <div className="flex mr-5 gap-5 items-centerx">
          <IoHeartOutline></IoHeartOutline>
          <PiShoppingCartThin></PiShoppingCartThin>
        </div>
      </header>

      <Outlet />
    </div>
  );
}
