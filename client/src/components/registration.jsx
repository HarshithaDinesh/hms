import React, { useState } from "react";
import axios from "axios";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

function Registration() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  async function register() {
    try {
      const res = await axios.post("http://localhost:3003/api/register", {
        email,
        name,
        password,
        age,
        gender,
        height,
        weight,
      });
      console.log(res.data);
    } catch (err) {
      console.error(err);
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
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
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
