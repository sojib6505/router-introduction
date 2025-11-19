import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About/About.jsx'
import Home from './Components/Home/Home.jsx'
import Shop from './Components/Shop/Shop.jsx'
import Roots from './Components/Root/Roots.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    Component: Roots,
    children:[
      {index:true, Component: Home},
      {path:'about',Component:About},
      {path:'shop', Component: Shop}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
