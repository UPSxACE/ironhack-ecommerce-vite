import { Link, Outlet, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { IoHeartOutline } from "react-icons/io5";
import { PiShoppingCartThin } from "react-icons/pi";

export default function Template() {
  let location = useLocation();

  return (
    <div>
      <header className="flex justify-center border-b">
        <div className="flex justify-between h-[49px] items-center max-w-screen-lg w-full">
          <Link className="font-semibold">IronTech</Link>
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
          <div className="flex gap-5 items-center text-xl">
            <IoHeartOutline></IoHeartOutline>
            <PiShoppingCartThin></PiShoppingCartThin>
          </div>
        </div>
      </header>
      <div className="min-h-[calc(100vh-50px)] px-12 py-4 flex flex-col items-center">
        <div className="max-w-screen-lg w-full flex-1 flex flex-col">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
