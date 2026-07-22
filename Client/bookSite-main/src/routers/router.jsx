import React, { Suspense, lazy } from 'react';
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import NotFound from "../components/NotFound";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

// Lazy-loaded components
const Shop = lazy(() => import("../components/Shop"));
const About = lazy(() => import("../components/About"));
const Blog = lazy(() => import("../components/Blog"));
const Contact = lazy(() => import("../components/Contact"));
const SingleBook = lazy(() => import("../components/SingleBook"));
const Login = lazy(() => import("../components/Login"));
const Register = lazy(() => import("../components/Register"));

// Dashboard Lazy-loaded components
const Dashboard = lazy(() => import("../components/Dashboard/Dashboard"));
const Main = lazy(() => import("../components/Dashboard/Main"));
const UploadBook = lazy(() => import("../components/Dashboard/UploadBook"));
const Table = lazy(() => import("../components/Dashboard/Table"));
const EditBooks = lazy(() => import("../components/Dashboard/EditBooks"));
const Users = lazy(() => import("../components/Dashboard/Users"));
const ManageAdmins = lazy(() => import("../components/Dashboard/ManageAdmins"));
const UploadMany = lazy(() => import("../components/Dashboard/UploadMany"));
const SeedBannerBooks = lazy(() => import("../components/SeedBannerBooks"));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

const withSuspense = (Component) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> }, // Keep Home eagerly loaded
      { path: "/shop", element: withSuspense(Shop) },
      { path: "/about", element: withSuspense(About) },
      { path: "/blog", element: withSuspense(Blog) },
      { path: "/contact", element: withSuspense(Contact) },
      { 
        path: "/books/:id", 
        element: withSuspense(SingleBook),
        loader: async ({ params }) => {
          if (params.id.startsWith('banner-')) {
            const { bannerBooks } = await import('../data/bannerBooks');
            return bannerBooks.find(b => b._id === params.id) || null;
          }
          const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/books/${params.id}`);
          if (!res.ok) return null;
          return res.json();
        }
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: withSuspense(Dashboard),
    children: [
      { path: "", element: <PrivateRoute>{withSuspense(Main)}</PrivateRoute> },
      { path: "upload", element: <PrivateRoute>{withSuspense(UploadBook)}</PrivateRoute> },
      { path: "manage", element: <PrivateRoute>{withSuspense(Table)}</PrivateRoute> },
      { 
        path: "edit-books/:id", 
        element: <PrivateRoute>{withSuspense(EditBooks)}</PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/books/${params.id}`)
      },
      { path: "user", element: <PrivateRoute>{withSuspense(Users)}</PrivateRoute> },
      { path: "admins", element: <PrivateRoute>{withSuspense(ManageAdmins)}</PrivateRoute> },
      { path: "bulk-upload", element: <PrivateRoute>{withSuspense(UploadMany)}</PrivateRoute> },
      { path: "seed-books", element: <PrivateRoute>{withSuspense(SeedBannerBooks)}</PrivateRoute> },
    ]
  },
  {
    path: "/login",
    element: withSuspense(Login)
  },
  {
    path: "/register",
    element: withSuspense(Register)
  }
]);

export default router;