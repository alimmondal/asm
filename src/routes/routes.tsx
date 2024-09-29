import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import ProductDetails from "../pages/ProductDetails";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import PrivateRoute from "./private/PrivateRoute";
import EditProducts from "../pages/EditProducts";
import Profile from "../pages/Profile";
import AddProducts from "../pages/AddProducts";
import AllProducts from "../pages/AllProducts";
import EditProfile from "../pages/EditProfile";
import Ssc from "../pages/Ssc";
import Hsc from "../pages/Hsc";
import Degree from "../pages/Degree";
import Article from "../pages/hsc/Article";
import Phrase from "../pages/hsc/Phrase";
import Completing from "../pages/hsc/Completing";
import Verbs from "../pages/hsc/Verbs";
import Preposition from "../pages/hsc/Preposition";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: () => fetch("http://localhost:5000/shoes"),
      },
      {
        path: "/ssc",
        element: <Ssc />,
      },
      {
        path: "/hsc",
        element: <Hsc />,
      },
      {
        path: "/degree",
        element: <Degree />,
      },
      {
        path: "/article",
        element: <Article />,
      },
      {
        path: "/preposition",
        element: <Preposition />,
      },
      {
        path: "/phrase",
        element: <Phrase />,
      },
      {
        path: "/completing",
        element: <Completing />,
      },
      {
        path: "/verbs",
        element: <Verbs />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
        // loader: ({ params }) =>
        // fetch(`http://localhost:5000/shoes/${params.id}`),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      // {
      //   path: "/dashboard",
      //   element: <Dashboard />,
      // },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        // path: "dashboard/home",
        index: true,
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "all-products",
        element: (
          <PrivateRoute>
            <AllProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "add-products",
        element: (
          <PrivateRoute>
            <AddProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "profile/edit/:id",
        element: <EditProfile />,
        // loader: ({ params }) =>
        // fetch(`http://localhost:5000/user/get/${params.id}`),
      },
      {
        path: "all-products/edit/:id",
        element: (
          <PrivateRoute>
            <EditProducts />
          </PrivateRoute>
        ),
        // loader: ({ params }) =>
        // fetch(`http://localhost:5000/shoes/${params.id}`),
      },
    ],
  },
]);
