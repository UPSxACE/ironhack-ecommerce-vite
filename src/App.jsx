import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


import Template from "./components/Template";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import IndexPage from "./pages/IndexPage";
import ProductsPage from "./pages/ProductsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
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
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
