import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import ProductPage from "./pages/ProductPage";
import Template from "./components/Common/Template";

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
        path: "product",
        element: <ProductPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
