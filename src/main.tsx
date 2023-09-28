import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./app";
import { HomePage } from "./homePage";
import { NotFoundPage } from "./NotFoundPage";
import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/algorithms/*",
    element: <App />,
  },
  {
    path: "/*",
    element: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
