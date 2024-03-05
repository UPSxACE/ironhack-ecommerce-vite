import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";
import { PiShoppingCartThin } from "react-icons/pi";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Input } from "./ui/input";

export default function Template() {
  const [loggedIn, setLoggedin] = useState(
    Boolean(localStorage.getItem("accessToken"))
  );

  const location = useLocation();
  useEffect(() => {
    setLoggedin(Boolean(localStorage.getItem("accessToken")));
  }, [location]);

  function activeClass({ isActive, isPending }) {
    return isPending
      ? "pending p-2"
      : isActive
      ? "underline underline-offset-2 p-2"
      : "p-2";
  }

  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const query = formData.get("query");
    navigate("/search/" + query);
  }

  const isInHomepage = location.pathname === "/";

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

            {loggedIn ? (
              <NavLink to={"/logout"} className={activeClass}>
                <span>Sign Out</span>{" "}
              </NavLink>
            ) : (
              <>
                <NavLink to={"/sign-in"} className={activeClass}>
                  <span>Sign In</span>
                </NavLink>
                <NavLink to={"/sign-up"} className={activeClass}>
                  <span>Sign Up</span>
                </NavLink>
              </>
            )}
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
            <form onSubmit={onSubmit} className="hidden lg:block">
              <Input
                id="query-navbar"
                name="query"
                type="text"
                placeholder="Search product"
                className={clsx(
                  "transition-all duration-1000",
                  isInHomepage ? "w-0 border-transparent" : "w-[180px]"
                )}
              />
            </form>
            <Link to="/favourites" className="p-2">
              <IoHeartOutline></IoHeartOutline>
            </Link>
            <Link to="/cart" className="p-2">
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
