import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Layout from "../layout/Layout";

import Home from "../pages/Home";
const routers = createBrowserRouter([
  {
    element: <Layout />,
    children: [{ path: "", element: <Home /> }],
  },
]);
export default routers;
