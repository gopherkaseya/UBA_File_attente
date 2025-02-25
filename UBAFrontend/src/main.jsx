import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from './pages/Login.jsx'
import { Services } from './pages/client/Services.jsx'
import { GestionClient } from './pages/agent/GestionClient.jsx'
import {GestionUtilisateur} from "./pages/admin/GestionUtilisateur.jsx";

const router = createBrowserRouter([
  {
    path:'/',
    element: (
      <div>
        <p>Hello</p>
      </div>
    )
  },
  {
    path:'/login',
    element : <Login/>
  },
  {
    path :'/client-portail',
    element: <Services/>
  },
  {
    path:'/gestion-client',
    element : <GestionClient/>
  },
  {
    path:'/gestion-utilisateur',
    element : <GestionUtilisateur/>
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>,
)
