import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// router
import {createBrowserRouter, RouterProvider } from 'react-router-dom'

// Pages
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Page404 from './pages/Page404.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Page404/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/projects",
        element: <Projects />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
