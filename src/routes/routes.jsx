import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignUp from "../pages/SignUp";
import Tasks from "../pages/Tasks";
import Chat from "../pages/Chat";
import Setting from "../pages/Setting";
import PrivateRoute from "../components/layouts/PrivateRoute";
import Archive from "../pages/Archive";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Tasks />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
      {
        path: "/archive",
        element: <Archive />,
      },
    ],
  },
  {
    path: "/login",
    element: <SignUp />,
  },
]);
