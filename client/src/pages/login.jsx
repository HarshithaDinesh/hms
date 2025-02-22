import axios from "axios";
import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginn() {
    try {
      const res = await axios.post("http://localhost:3003/api/login", { email, password });
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
          Login
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={loginn} fullWidth>
          Login
        </Button>
      </Box>
    </Container>
  );
}

export default Login;
