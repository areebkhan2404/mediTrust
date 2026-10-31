import React from 'react'
import userAuthStatus from '../hooks/userAuthStatus'
import LoaderScreen from './common/loader'
import {  Navigate , Outlet } from 'react-router-dom'

const PrivateComponent = () => {
       
       const { isLoggedIn , checkingUser} =  userAuthStatus()


         if(checkingUser) {
            return <LoaderScreen/> 
         }

  return isLoggedIn ? <Outlet /> : <Navigate to={"/login"} />
}

export default PrivateComponent