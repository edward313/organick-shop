import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";

import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Shop from "../pages/Shop";
const routers = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/product/:id", element: <ProductDetail /> },
      { path: "/about-us", element: <About /> },
      { path: "/shop", element: <Shop /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
export default routers;
