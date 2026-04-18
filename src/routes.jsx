import Page from "./Page";
import ErrorPage from "./ErrorPage";

const routes = [
  {
    path: "/",
    element: <Page />,
    errorElement: <ErrorPage />,
  },
//   {
//     path: "profile/:name",
//     element: <Profile />,
//   },
];

export default routes;
