import { RouterProvider } from "@tanstack/react-router";
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import router from "./routes";
import Cookies from "./components/Cookies/Cookies";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Cookies />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
