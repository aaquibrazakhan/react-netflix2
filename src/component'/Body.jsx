import React from "react";
import Login from "./Login";
import Browser from "./Browser";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./SignUp";

function Body() {
  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    { path: "/browser", element: <Browser /> },
  ]);
  return (
    <div>
      <RouterProvider router={AppRouter} />
    </div>
  );
}

export default Body;
