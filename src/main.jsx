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
    path: "/auth",
    element: <Login />,
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
