import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Modal,
} from "@mui/material";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [cookies, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });

      if (response.status === 200) {
        setCookie("token", response.data.token, { path: "/", httpOnly: false });
        setOpen(true);
        setTimeout(() => {
          setOpen(false);
          navigate("/patient");
        }, 2000);
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data?.message || error.message);
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={5}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </Box>

      {/* Success Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "green",
            color: "white",
            padding: 2,
            borderRadius: 2,
            textAlign: "center",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          Login Successful!
        </Box>
      </Modal>
    </Container>
  );
};

export default Login;
