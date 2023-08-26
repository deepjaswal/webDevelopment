'use client'

import React, { createContext, useEffect, useState } from 'react'
export const AuthContext = createContext()
const TokenAuthication = ({children}) => {
  const [loginToken , setloginToken] = useState()
  const [role , setRole] = useState()
  useEffect(() => {
    if(setloginToken == ''){
      const localdata = localStorage.getItem('token')
      const role = localStorage.getItem('role')
      setloginToken(localdata)
      setRole(localdata.role)
    }
   
  },[])
  return (
    <AuthContext.Provider value={{loginToken ,role}}>
      {children}
    </AuthContext.Provider>
  )
}

export default TokenAuthication