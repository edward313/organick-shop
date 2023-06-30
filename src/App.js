import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header.js";
import Hero from "./components/Hero/Hero.js";
import { Fragment } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import routers from "./routes/routers.js";
function App() {
  return (
    <Fragment>
      <RouterProvider router={routers} />
    </Fragment>
  );
}

export default App;
