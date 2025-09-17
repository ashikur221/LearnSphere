import Dashboard from "@/components/admin/Dashboard";
import AdminLayout from "@/layout/AdminLayout";
import Layout from "@/layout/Layout";
import AboutPage from "@/pages/about/AboutPage";
import ContactPage from "@/pages/contact/ContactPage";
import CoursePage from "@/pages/course/CoursePage";
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
        element: <Dashboard/>
      }

    ],
  },
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
