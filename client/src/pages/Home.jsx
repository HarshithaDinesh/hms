import React from "react";
import {
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";

const HomePage = () => {
  return (
    <Container maxWidth="md">
      <Box textAlign="center" mt={10} p={3}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Welcome to Our Healthcare & Preventive Care Portal
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Monitor your health, track your fitness, and stay on top of your
          wellness goals. Designed for patients and healthcare providers to
          ensure easy access and better health outcomes.
        </Typography>
        <Box mt={4}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mx: 1 }}
          >
            Get Started
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            sx={{ mx: 1 }}
          >
            Learn More
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
