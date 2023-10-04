import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root.jsx";
import Home from "./Components/Home.jsx";
import AboutUs from "./Components/AboutUs.jsx";
import ContactUs from "./Components/ContactUs.jsx";
import User from "./Components/User/User.jsx";
import Github, { dataFetching } from "./Components/Github.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "user/:id",
        element: <User />,
      },
      {
        path: "github",
        loader: () => dataFetching(),
        element: <Github />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
