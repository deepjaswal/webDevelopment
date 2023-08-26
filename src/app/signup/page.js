'use client'

import { instance } from '@/baseUrl/instance'
import React, { useState } from 'react'

const layout = () => {
  const [formValue , setformValue] = useState({
    "email" :"",
    "password" :"",
    "role":null
  })
const [role , seRole] = useState();
const [validError ,setValiderror] = useState({})
console.log(role)
  // handle change events
  const handleChnage = (e) => {
      const {name, value} = e.target
      setformValue({...formValue, [name] : value})
  }
  // form submission event
  const handleSubmit = async (e) => {
    e.preventDefault();
    formValue.role = role;
    
   
    try {
      const errors =   validationError()
    setValiderror(errors);
      if(Object.keys(errors).length > 0){
        return validError
      }else{
        const registerResponse = await instance.post(`/signup` , formValue)
        console.log(registerResponse)
      }
    
    } catch (error) {
      console.log(error)
    }
  }
  //validation error
  const validationError = () => {
    const error = {};
    if(!formValue.email){
      error.email = 'please enter the email address'
    }
    if(!/^.*(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(formValue.password)){
      error.password = 'ensures that the password contains at least one lowercase letter, one uppercase letter, one digit, one special character'
    }
    if(!formValue.role){
      error.role = 'please select one role'
    }

    return error
  }


  return (
    <>
     <div className='container'>
      <form onSubmit={e => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            name='email'
            id="exampleInputEmail1" 
            aria-describedby="emailHelp" 
            placeholder="Enter email"
            onChange={e => handleChnage(e)}
          />
          <p color='red'>{validError.email}</p>
        </div>
        <div className="form-group">
          <label htmlForfor="exampleInputPassword1">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="exampleInputPassword1" 
            placeholder="Password" 
            name='password'
            onChange={e => handleChnage(e)}
          />
          <p color='red'>{validError.password}</p>
        </div>
        <div className="form-group">
          <label htmlForfor="exampleInputPassword1">Role</label>
          <select className="custom-select" id="inputGroupSelect04" onChange={e => seRole(e.target.value)}>
            <option selected></option>
            <option value="1">User</option>
            <option value="2">pasient</option>
        </select>
        <p color='red'>{validError.role}</p>

        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
     </div>
     </>
  )
}

export default layout