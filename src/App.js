import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./Componants/pages/Blog/Blog";
import Checkout from "./Componants/pages/Checkout/Checkout";
import CourseDetails from "./Componants/pages/CourseDetails/CourseDetails";
import Courses from "./Componants/pages/Courses/Courses";
import FAQ from "./Componants/pages/FAQ/FAQ";
import Home from "./Componants/pages/Home/Home";
import Login from "./Componants/pages/Login/Login";
import PrivateRoute from "./Componants/pages/PriveteRoute/PrivateRoute";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/courses",
      element: <Courses />,
      loader: () => {
        return fetch("https://dev-school-azure.vercel.app/courses").then(
          (res) => res.json()
        );
      },
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/faq",
      element: <FAQ />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/courses/:id",
      element: <CourseDetails />,
    },
    {
      path: "/checkout",
      element: (
        <PrivateRoute>
          <Checkout />
        </PrivateRoute>
      ),
    },
  ]);
  return (
    <div className="bg-white min-h-screen">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
