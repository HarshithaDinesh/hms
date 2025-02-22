import React from "react";
import { AppBar, Toolbar, Typography, Button, Container, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      {/* Navbar */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Healthcare Portal
          </Typography>
          <Button color="inherit" onClick={() => navigate("/healthtips")}>Health Tips</Button>
          <Button color="inherit" onClick={() => navigate("/login")}>Login</Button>
          <Button color="inherit" onClick={() => navigate("/register")}>Register</Button>
        </Toolbar>
      </AppBar>
      
      {/* Hero Section */}
      <Container maxWidth="md">
        <Box textAlign="center" mt={10} p={3}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Welcome to Our Healthcare & Preventive Care Portal
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            Monitor your health, track your fitness, and stay on top of your wellness goals.
            Designed for patients and healthcare providers to ensure easy access and better health outcomes.
          </Typography>
          <Box mt={4}>
            <Button variant="contained" color="primary" size="large" sx={{ mx: 1 }}>
              Get Started
            </Button>
            <Button variant="outlined" color="primary" size="large" sx={{ mx: 1 }}>
              Learn More
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default HomePage;