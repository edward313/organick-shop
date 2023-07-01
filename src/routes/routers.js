import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";

import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import NotFound from "../pages/NotFound";
const routers = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/product/:id", element: <ProductDetail /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
export default routers;
