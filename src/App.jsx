import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import Template from "./components/Template";
import adminRoute from "./middleware/adminRoute";
import guestRoute from "./middleware/guestRoute";
import logout from "./middleware/logout";
import AdminPage from "./pages/AdminPage";
import CartPage from "./pages/CartPage";
import IndexPage from "./pages/IndexPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductsCategoryPage from "./pages/ProductsCategoryPage";
import ProductsPage from "./pages/ProductsPage";
import SearchPage from "./pages/SearchPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "logout",
        loader: logout,
      },
      {
        element: <IndexPage />,
        path: "",
      },
      {
        path: "product/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "sign-in",
        element: <SignInPage />,
        loader: guestRoute,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
        loader: guestRoute,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:id",
        element: <ProductsCategoryPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "search/",
        element: <SearchPage />,
      },
      {
        path: "search/:query",
        element: <SearchPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminPage />,
    loader: adminRoute,
  },
]);

function App() {  

  return <RouterProvider router={router} />;
}

export default App;
