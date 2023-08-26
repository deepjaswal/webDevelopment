
'use client'



import { instance } from '@/baseUrl/instance';
import React, { useState } from 'react'
import jwt from 'jsonwebtoken';

const layout = () => {
  const [loginData ,setloginData] = useState({
    "email" :"",
    "password" :""
  })
  // handle data changes
  const  handleChange = (e) => {
      const {name , value} = e.target;
      setloginData({...loginData , [name] : value})

  }

  // handle login success
  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const responseData = await instance.post(`/login` , loginData)
      console.log(responseData)
      if(responseData.status == 200){
        const token = jwt.decode(responseData.data.token);
        localStorage.setItem("token", JSON.stringify(token))
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
       <div className='container'>
      <form onSubmit={e => formSubmit(e)}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp" 
            placeholder="Enter email"
            name='email'
            onChange={e => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="exampleInputPassword1" 
            placeholder="Password" 
            name='password'
            onChange={e => handleChange(e)}

          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
     </div>
    </>
  )
}

export default layout