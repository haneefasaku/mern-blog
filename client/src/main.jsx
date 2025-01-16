import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './pages/root';
import ErrorPage from './pages/error-page';
import Home from './pages/Home';
import About from './pages/About';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Dashbord from './pages/Dashbord';
import Projects from './pages/Projects';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:"/",
        element: <Home/>,
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"/signin",
        element: <Signin/>
      },
      {
        path:"/signup",
        element: <Signup/>
      },
      {
        path:"/dashbord",
        element: <Dashbord/>
      },
      {
        path:"/projects",
        element: <Projects/>
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
