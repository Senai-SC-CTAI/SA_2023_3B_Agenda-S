import './index.css'
import React from 'react'
import { Screen1, Screen2 } from './screens/Home'
import Gerenciamento from './screens/Gerenciamento/App' 

import ReactDOM from 'react-dom/client'
import 
{ createBrowserRouter, 
  RouterProvider } from 'react-router-dom'

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Screen1/>
      },
      {
        path: '/screen2',
        element: <Screen2/>
      },
      {
        path: '/gerenciamento',
        element: <Gerenciamento/>
      },
      {
        path: '*',
        element: <h1>404</h1>
      },
    ]
  )

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
