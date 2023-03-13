import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
// import { useAuth } from '../../utils/hooks/useAuth'

const useAuth=()=>{
    const token = localStorage.getItem('auth-token')
    if(token){
      return true
    } else {
      return false
    }
  }

const PublicRoute = () => {
    const auth = useAuth()

  return auth? <Navigate to="/"/> : <Outlet/>
}

export default PublicRoute