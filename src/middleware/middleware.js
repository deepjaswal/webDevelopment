'use client'

import Header from '@/components/Header/Header'
import TokenAuthication, { AuthContext } from '@/context/auth'
import { redirect } from 'next/dist/server/api-utils'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'

const Middleware = ({children}) => {
  // console.log(router)
  const {loginToken ,role} = useContext(AuthContext)
  console.log(loginToken)
  console.log(loginToken)
  if(!loginToken){
      return (
        <>
        <Header/>
        {children}
        </>
      )
  }
  if(loginToken || role == '1'){
    redirect('http://localhost:3000/clintDashboard/dashboard')
  }
}

export default Middleware