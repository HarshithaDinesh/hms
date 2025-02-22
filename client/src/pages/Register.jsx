import React, { useState } from "react";
import axios from "axios";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import {useNavigate} from 'react-router-dom'

function Registration() {
  let navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  

  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  async function register() {
    try {
      // const res = await axios.post("http://localhost:3003/api/register", {
      const res = await axios.post("http://localhost:5000/api/users/register", {
        email,
        firstName,
lastName,
        password,
        age,
        gender,
        height,
        weight,
        role: 'patient'
      });
      console.log(res.data.message);
      if(res.data.message==="User registered successfully"){
        navigate('/login')
      }else{
        alert("something went wrong")
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 5,
          p: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          bgcolor: "white",
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" align="center">
          Registration
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="First name"
          variant="outlined"
          fullWidth
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
        />
        <TextField
          label="Last name"
          variant="outlined"
          fullWidth
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
        />
        
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Age"
          type="number"
          variant="outlined"
          fullWidth
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <TextField
          label="Gender"
          variant="outlined"
          fullWidth
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <TextField
          label="Height (cm)"
          type="number"
          variant="outlined"
          fullWidth
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <TextField
          label="Weight (kg)"
          type="number"
          variant="outlined"
          fullWidth
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={register}
          fullWidth
        >
          Register
        </Button>
      </Box>
    </Container>
  );
}

export default Registration;