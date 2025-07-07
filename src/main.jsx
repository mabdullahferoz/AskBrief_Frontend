import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router";
import Login from './components/login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/signup",
    element: <div>Sginup Form</div>,
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
