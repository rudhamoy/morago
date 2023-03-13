import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const useAuth=()=>{
    const token = localStorage.getItem('auth-token')
    if(token){
      return true
    } else {
      return false
    }
  }

const ProtectedRoutes = () => {
    const auth = useAuth()

  return auth?  <Outlet/> : <Navigate to="/login" /> 
}

export default ProtectedRoutes