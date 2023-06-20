import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import ServicePage from "../Pages/ServicePage/ServicePage";
import SingleService from "../Pages/SingleService/SingleService";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import TramsAndCondition from "../Pages/TramsAndCondition/TramsAndCondition";
import ReviewPage from "../Pages/ReviewPage/ReviewPage";
import Protected from "./Protected";
import MyReviews from "../Pages/MyReviews/MyReviews";
import EditReview from "../Pages/EditReview/EditReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/services",
        element: <ServicePage></ServicePage>,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/services/:id",
        element: <SingleService></SingleService>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/review/:id",
        element: (
          <Protected>
            <ReviewPage></ReviewPage>
          </Protected>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/my-reviews",
        element: (
          <Protected>
            <MyReviews></MyReviews>
          </Protected>
        ),
      },
      {
        path: "my-reviews/edit/:id",
        element: (
          <Protected>
            <EditReview></EditReview>
          </Protected>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/review/${params.id}`),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "trams-and-condition",
        element: <TramsAndCondition></TramsAndCondition>,
      },
    ],
  },
]);

export default router;
