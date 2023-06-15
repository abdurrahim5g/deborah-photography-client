import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [{ path: "/", element: <h2>Home</h2> }],
  },
]);

export default router;
