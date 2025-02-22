import React, { useState } from 'react'
import axios from 'axios'
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
   
    async function register(){
await axios.post("http://localhost:3003/api/register",{email, name, password, age, gender, height, weight})
.then((res)=>{
    console.log(res.data)
}).catch((err=>{
    console.log(err)
}))

    }
  return (
    <>
    <h1>Registration</h1>
    <div>
        <input value={email} type='text' placeholder='enter email' onChange={(e)=>{setEmail(e.target.value)}}/>
    </div>
    <div>
        <input type='text' value={name} placeholder='enter name' onChange={(e)=>{setname(e.target.value)}}/>
    </div>
    <div>
        <input type='password' value={password} placeholder='enter password' onChange={(e)=>{setpassword(e.target.value)}}/>
    </div>
    <div>
        <input type='text' value={age} placeholder='enter age' onChange={(e)=>{setage(e.target.value)}}/>
    </div>
    <div>
        <input type='text' value ={gender} placeholder='enter gender' onChange={(e)=>{setgender(e.target.value)}}/>
    </div>
    <div>
        <input type='number' value={height} placeholder='enter height' onChange={(e)=>{setheight(e.target.value)}}/>
    </div>
    <div>
        <input type='number'value={weight} placeholder='enter weight' onChange={(e)=>{setweight(e.target.value)}}/>
    </div>
    <button onClick={register}>Register</button>
    </>
  )
}

export default Registration