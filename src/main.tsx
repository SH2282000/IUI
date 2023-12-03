import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./routes/Root"
import ErrorPage from './ErrorPage'
import Dashboard from './routes/Dashboard'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: "/dashboard/",
    element: <Dashboard />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)