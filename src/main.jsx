import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './pages/routes/Routes'
import UserAuthProvider from './providers/userAuthProvider/UserAuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserAuthProvider><RouterProvider router={Routes}/></UserAuthProvider>
  </React.StrictMode>,
)
