import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import ServicePage from "../Pages/ServicePage/ServicePage";
import SingleService from "../Pages/SingleService/SingleService";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("services.json"),
      },
      {
        path: "/services",
        element: <ServicePage></ServicePage>,
        loader: () => fetch("services.json"),
      },
      {
        path: "/services/:id",
        element: <SingleService></SingleService>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);

export default router;
