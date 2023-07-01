import "./App.css";

import { Fragment } from "react";
import { RouterProvider } from "react-router-dom";

import routers from "./routes/routers.js";
function App() {
  return (
    <Fragment>
      <RouterProvider router={routers} />
    </Fragment>
  );
}

export default App;
