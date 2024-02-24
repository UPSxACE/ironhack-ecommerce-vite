import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import {useState} from "react"

import Template from "./components/Template";
import adminRoute from "./middleware/adminRoute";
import guestRoute from "./middleware/guestRoute";
import logout from "./middleware/logout";
import AdminPage from "./pages/AdminPage";
import IndexPage from "./pages/IndexPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductsPage from "./pages/ProductsPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ProductsCategoryPage from "./pages/ProductsCategoryPage";

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
        element: <ProductsCategoryPage />
      }
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
