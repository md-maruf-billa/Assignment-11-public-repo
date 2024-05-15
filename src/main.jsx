import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './pages/routes/Routes'
import UserAuthProvider from './providers/userAuthProvider/UserAuthProvider'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserAuthProvider><RouterProvider router={Routes}/></UserAuthProvider>
  </React.StrictMode>,
)
