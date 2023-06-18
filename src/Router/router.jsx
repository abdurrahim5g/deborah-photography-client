import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import ServicePage from "../Pages/ServicePage/ServicePage";
import SingleService from "../Pages/SingleService/SingleService";

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
    ],
  },
]);

export default router;
