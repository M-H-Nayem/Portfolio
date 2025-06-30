import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import App from "../App";
import MainPage from "../Pages/MainPage";
import Contact from "../Components/Contact/Contact";

export let router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    children: [
      {
        index:true,
        element: <Home></Home>,
      },
      {
        path: "/project",
        element: <>projects</>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
  // {
  //   path: "/",
  //   element: <Home></Home>,
  // },
]);
