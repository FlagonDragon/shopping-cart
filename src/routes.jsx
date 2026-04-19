// import { redirect } from "react-router";
import ErrorPage from "./components/ErrorPage";
import Store from "./components/Store";




const routes = [
  {
    path: "/",
    element: <Store />,
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
