import { createBrowserRouter } from "react-router";
import MaiLayout from "../Layouts/MainLayout/MaiLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Details from "../Pages/Details";
import ApplyForm from "../Pages/ApplyForm";
import AppliedJobs from "../Pages/AppliedJobs";
import PrivateRoute from "../Shared/PrivateRoute";
import MyJobPosts from "../Pages/MyJobPosts";
import SubmitJob from "../Pages/SubmitJob";
import JobApplication from "../Pages/JobApplication";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MaiLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/job/:id",
        Component: Details,
        loader: ({ params }) => fetch(`http://localhost:3000/job/${params.id}`),
      },

      {
        path: "/jobApply/:id",
        // Component: ApplyForm,
        element: (
          <PrivateRoute>
            {" "}
            <ApplyForm></ApplyForm>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/appliedJobs",
        element: (
          <PrivateRoute>
            {" "}
            <AppliedJobs></AppliedJobs>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/myJobPost",

        element: (
          <PrivateRoute>
            {" "}
            <MyJobPosts></MyJobPosts>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/myJobPost/applications/:id",

        element: (
          <PrivateRoute>
            <JobApplication></JobApplication>
          </PrivateRoute>
        ),
      },
      {
        path: "/submitJobPost",

        element: (
          <PrivateRoute>
            <SubmitJob></SubmitJob>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
