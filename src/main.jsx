import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./components/Users.jsx";
import DisplayUser from "./components/DisplayUser.jsx";
import UpDate from "./components/UpDate.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Users></Users>,
  },
  {
    path: "/display",
    element: <DisplayUser> </DisplayUser>,
    loader: () =>
      fetch("https://express-101-oiricq15y-jahangiralom99.vercel.app/users"),
  },
  {
    path: `/display/user/:id`,
    element: <UpDate></UpDate>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
