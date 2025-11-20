import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About/About.jsx'
import Home from './Components/Home/Home.jsx'
import Shop from './Components/Shop/Shop.jsx'
import Roots from './Components/Root/Roots.jsx'
import Users from './Components/Users/Users.jsx'
import Users2 from './Components/Users/Users2.jsx'
const userPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
const router = createBrowserRouter([
  {
    path:'/',
    Component: Roots,
    children:[
      {index:true, Component: Home},
      {path:'about',Component:About},
      {path:'shop', Component: Shop},
      {path:'users',
        loader:() => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path:'users2',
        element: <Suspense fallback={<p>Loading......</p>}>
             <Users2 userPromise={userPromise}></Users2>
        </Suspense>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
