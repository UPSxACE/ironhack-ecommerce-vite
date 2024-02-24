import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CiMenuBurger } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";
import { PiShoppingCartThin } from "react-icons/pi";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Template() {
  function activeClass({ isActive, isPending }) {
    return isPending
      ? "pending p-2"
      : isActive
      ? "underline underline-offset-2 p-2"
      : "p-2";
  }

  return (
    <div>
      <header className="flex justify-center border-b px-4 sm:px-6 md:px-12">
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
              <NavLink to={"/"}>
                <DropdownMenuItem className={"hover:cursor-pointer"}>
                  <span>Home</span>
                </DropdownMenuItem>
              </NavLink>
              <NavLink to={"/products"}>
                <DropdownMenuItem className={"hover:cursor-pointer"}>
                  <span>Products</span>
                </DropdownMenuItem>
              </NavLink>
              <NavLink to={"/sign-in"}>
                <DropdownMenuItem className={"hover:cursor-pointer"}>
                  <span>Sign In</span>
                </DropdownMenuItem>
              </NavLink>
              <NavLink to={"/sign-up"}>
                <DropdownMenuItem className={"hover:cursor-pointer"}>
                  <span>Sign Up</span>
                </DropdownMenuItem>
              </NavLink>
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
      <div className="min-h-[calc(100vh-50px)] px-4 py-4 sm:px-6 sm:py-6  md:px-12 md:py-4 flex flex-col items-center">
        <div className="max-w-screen-lg w-full flex-1 flex flex-col">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
