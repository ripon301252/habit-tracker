import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import Blogs from "../Pages/Blogs/Blogs";
// import Calendar from "../Pages/Month/MonthlyHabits/Calender";
import MonthPage from "../Pages/Month/MonthlyHabits/MonthPage";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/",
      //   element: <Calendar />,
      // },
      {
        path: "/month/:year/:month",
        element: <MonthPage />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);
