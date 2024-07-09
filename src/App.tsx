import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layouts
import MainLayout from "./layouts/main/MainLayout";
// pages
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
