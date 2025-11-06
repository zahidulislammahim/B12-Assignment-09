import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import RootLayout from "../Pages/RootLayout";
import Games from "../Pages/Games";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import ForgotPassword from "../Pages/ForgotPassword";
import MyProfile from "../Pages/MyProfile";
import EditProfile from "../Pages/EditProfile";
import NotFoundPage from "../Pages/NotFoundPage";
import Loader from "../Pages/Loader";
import PrivateRoute from "./PrivateRoute";
import GameDetails from "../Components/GameDetails";
import Contact from "../Pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    hydrateFallbackElement: <Loader></Loader>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/games",
        element: <PrivateRoute><Games></Games></PrivateRoute>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },

      {
        path: "/forgot-password",
        element: <ForgotPassword></ForgotPassword>
      },
      {
        path: "/my-profile",
        element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
      },
      {
        path: "/edit-profile",
        element: <PrivateRoute><EditProfile></EditProfile></PrivateRoute>
      },
      {
        path: "/game-details",
        element: <PrivateRoute><GameDetails></GameDetails></PrivateRoute>
      },
    ],
  },
]);
