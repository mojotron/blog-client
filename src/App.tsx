import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layouts
import MainLayout from "./layouts/main/MainLayout";
// pages
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
