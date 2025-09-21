
import VerifyOTP from "@/components/auth/VerifyOTP";
import AdminLayout from "@/layout/AdminLayout";
import Layout from "@/layout/Layout";
import AboutPage from "@/pages/about/AboutPage";
import AuthPage from "@/pages/auth/AuthPage";
import ForgetPassword from "@/pages/auth/ForgetPassword";
import ContactPage from "@/pages/contact/ContactPage";
import CoursePage from "@/pages/course/CoursePage";
import Dashboard from "@/pages/dashboard/Dashboard";
import Quiz from "@/pages/dashboard/Quiz";
import EnrolledCourse from "@/pages/enrolledCourse/EnrolledCourse";
import Home from "@/pages/home/Home";


import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      },
      {
        path: "/course",
        element: <CoursePage />
      },
      {
        path: "/enrolled-course",
        element: <EnrolledCourse />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/quiz",
        element: <Quiz />
      }

    ],
  },
  {
    path: "/auth",
    element: <AuthPage />
  },
  {
    path: '/forget-password',
    element: <ForgetPassword />
  },
  {
    path: '/verify-otp',
    element: <VerifyOTP />
  }

  // Admin routes
  // {
  //   path: "/dashboard",
  //   element: <AdminLayout />,
  //   children: [
  //     {
  //       path: "/dashboard",
  //       element: <Dashboard />, // ✅ Fixed typo
  //     },
  //   ],
  // },
]);

export default router;
