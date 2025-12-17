import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import Shop from "../components/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../components/SingleBook";
import Login from "../components/Login";
import Register from "../components/Register";
import Dashboard from "../components/Dashboard/Dashboard";
import Main from "../components/Dashboard/Main";
import UploadBook from "../components/Dashboard/UploadBook";
import Table from "../components/Dashboard/Table";
import EditBooks from "../components/Dashboard/EditBooks";
import Users from "../components/Dashboard/Users";
import ManageAdmins from "../components/Dashboard/ManageAdmins";
import UploadMany from "../components/Dashboard/UploadMany";
import SeedBannerBooks from "../components/SeedBannerBooks";
import Contact from "../components/Contact";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import NotFound from "../components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blog /> },
      { path: "/contact", element: <Contact /> },
      { 
        path: "/books/:id", 
        element: <SingleBook />,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/books/${params.id}`)
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <Dashboard />,
    children: [
      { path: "", element: <PrivateRoute><Main /></PrivateRoute> },
      { path: "upload", element: <PrivateRoute><UploadBook /></PrivateRoute> },
      { path: "manage", element: <PrivateRoute><Table /></PrivateRoute> },
      { 
        path: "edit-books/:id", 
        element: <PrivateRoute><EditBooks /></PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/books/${params.id}`)
      },
      { path: "user", element: <PrivateRoute><Users /></PrivateRoute> },
      { path: "admins", element: <PrivateRoute><ManageAdmins /></PrivateRoute> },
      { path: "bulk-upload", element: <PrivateRoute><UploadMany /></PrivateRoute> },
      { path: "seed-books", element: <PrivateRoute><SeedBannerBooks /></PrivateRoute> },
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
]);

export default router;