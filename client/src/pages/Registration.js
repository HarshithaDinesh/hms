import React, { useState } from 'react'
import FilledInput from '@mui/material/FilledInput';
// or
// import { FilledInput } from '@mui/material';

function Registration() {
   const[email, setEmail] =useState('')
   const[name, setname] =useState('')
   const[password, setpassword] =useState('')
   const[age, setage] =useState('')
   const[gender, setgender] =useState('')
   const[height, setheight] =useState('')
   const[weight, setweight] =useState('')
   console.log(email,
    name,
    password,
    age,
    gender,
    height,
    weight,)
  return (
    <>
    <h1>Registration</h1>
    <div>
        <input type='text' placeholder='enter email' onChange={(e)=>{setEmail(e.target.value)}}/>
    </div>
    <div>
        <input type='text' placeholder='enter name' onChange={(e)=>{setname(e.target.value)}}/>
    </div>
    <div>
        <input type='password' placeholder='enter password' onChange={(e)=>{setpassword(e.target.value)}}/>
    </div>
    <div>
        <input type='text' placeholder='enter age' onChange={(e)=>{setage(e.target.value)}}/>
    </div>
    <div>
        <input type='text' placeholder='enter gender' onChange={(e)=>{setgender(e.target.value)}}/>
    </div>
    <div>
        <input type='number' placeholder='enter height' onChange={(e)=>{setheight(e.target.value)}}/>
    </div>
    <div>
        <input type='number' placeholder='enter weight' onChange={(e)=>{setweight(e.target.value)}}/>
    </div>
    </>
  )
}

export default Registration