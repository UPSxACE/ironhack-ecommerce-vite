import { Outlet, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Template() {
  let location = useLocation();

  return (
    <div>
      <header>
        <h2>IronTech</h2>
        <nav>
          <Link to={'/'}>
            <p>Home</p>
          </Link>
          <Link to={'/products'}>
            <p>Products</p>
          </Link>
          <Link to={'/sign-in'}>
            <p>Sign In</p>
          </Link>
          <Link to={'/sign-up'}>
            <p>Sign Up</p>
          </Link>
        </nav>
      </header>

      <Outlet />
    </div>
  );
}
