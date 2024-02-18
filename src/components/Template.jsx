import { Link, Outlet, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { IoHeartOutline } from "react-icons/io5";
import { PiShoppingCartThin } from "react-icons/pi";
import { CiMenuBurger } from "react-icons/ci";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Template() {
  let location = useLocation();
  function activeClass({ isActive, isPending }) {
    return   isPending ? "pending" : isActive ? "underline underline-offset-2": ""
  }

  return (
    <div>
      <header className="flex justify-center border-b">
        <div className="flex justify-between h-[49px] items-center max-w-screen-lg w-full">
          <Link className="font-semibold">IronTech</Link>
          <nav className="hidden gap-12 sm:flex">
            <NavLink to={"/"} className={activeClass}>
              <span>Home</span>
            </NavLink>

            <NavLink to={"/products"} className={activeClass}>
              <span>Products</span>
            </NavLink>

            <NavLink to={"/sign-in"} className={activeClass}>
              <span>Sign In</span>
            </NavLink>

            <NavLink to={"/sign-up"} className={activeClass}>
              <span>Sign Up</span>
            </NavLink>
          </nav>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex sm:hidden p-2">
              <CiMenuBurger></CiMenuBurger>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="sm:hidden">
              <DropdownMenuItem>
                <NavLink to={"/"}>
                  <span>Home</span>
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink to={"/products"}>
                  <span>Products</span>
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink to={"/sign-in"}>
                  <span>Sign In</span>
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink to={"/sign-up"}>
                  <span>Sign Up</span>
                </NavLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex gap-1 items-center text-xl">
            <Link to="/" className="p-2">
              <IoHeartOutline></IoHeartOutline>
            </Link>
            <Link to="/" className="p-2">
              <PiShoppingCartThin></PiShoppingCartThin>
            </Link>
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
