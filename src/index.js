import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Team from './pages/Team';
import DesignProgress from './pages/DesignProgress';
import WeeklySnapshots from './pages/WeeklySnapshots';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/design",
    element: <DesignProgress />,
  },
  {
    path: "/weekly",
    element: <WeeklySnapshots />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


