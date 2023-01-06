import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import CourseDetails from "./Componants/pages/CourseDetails/CourseDetails";
import Courses from "./Componants/pages/Courses/Courses";
import Home from "./Componants/pages/Home/Home";
import Login from "./Componants/pages/Login/Login";


function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/courses",
      element: <Courses />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/courses/:id",
      element: <CourseDetails />,
    },
  ]);
  return (
    <div className="bg-white min-h-screen">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
