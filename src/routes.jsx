// import { redirect } from "react-router";
import { Children } from "react";
import ErrorPage from "./components/ErrorPage";
import Store from "./components/Store";
import { Navigate } from "react-router";




const routes = [
  {
    path: "/",
    element: <Navigate to="/store/home" replace />,
    errorElement: <ErrorPage />,
  },
  {
    path: "store/:name",
    element: <Store />,
    errorElement: <ErrorPage />
  }
];

// const routes = [
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "shop",
//     element: <Shop />,
//   },
//   {
//     path: "cart",
//     element: <Cart />,
//   },
// ];

export default routes;
