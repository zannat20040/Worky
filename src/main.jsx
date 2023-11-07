import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Component/Home/Home.jsx";
import Root from "./Root.jsx";
import Login from "./Authentication/Login/Login.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import Authentication from "./Authentication/Authentication.jsx";
import Signup from "./Authentication/Signup/Signup.jsx";
import PrivateRoute from "./Private Route/PrivateRoute.jsx";
import AddJobs from "./Component/Add jobs/AddJobs.jsx";
import JobDetails from "./Component/Job Details/JobDetails.jsx";
import PostedJobs from "./Component/Posted Jobs/PostedJobs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addjobs",
        element: <PrivateRoute><AddJobs></AddJobs></PrivateRoute>
      },
      {
        path: "/addjobs/:id",
        element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader: ({params})=>fetch(`http://localhost:5000/addjobs`)
      },
      {
        path: "/postedjobs",
        element:<PrivateRoute><PostedJobs></PostedJobs></PrivateRoute>,
        loader: ()=>fetch(`http://localhost:5000/addjobs`)
      },
      
    ],
  },
  {
    path:'/authentication',
    element:<Authentication></Authentication>,
    children:[
      {
        path: "/authentication/login",
        element: <Login></Login>
      },
      {
        path: "/authentication/signup",
        element: <Signup></Signup>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
