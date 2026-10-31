import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const userAuthStatus = ()  => {

    const { user } = useSelector(state => state.auth)
    const [isLoggedIn , setIsLoggedIn] = useState(false)
    const [checkingUser , setCheckingUser] = useState(true)

 

    useEffect(() => {
      
         setIsLoggedIn(user ? true : false)
         setCheckingUser(false)
     

    } ,[user])

    return { isLoggedIn , checkingUser}


      useEffect(() => {
      
         setIsLoggedIn(user ? true : false)
         setCheckingUser(false)
     

    } ,[user])

    return { isLoggedIn , checkingUser}
}

export default userAuthStatus