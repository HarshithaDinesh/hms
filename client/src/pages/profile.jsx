import React from "react";
import { useState } from 'react';
import { TextField, Button, Grid, Typography,Container } from '@mui/material';

const Profile = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    age: '',
    height: '',
    weight: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted')
    // You can handle form submission here, e.g., sending the data to an API
    console.log(formData);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography textAlign={'center'} variant="h5" gutterBottom >
        Patient Profile Page
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Age"
              variant="outlined"
              fullWidth
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Height (in cm)"
              variant="outlined"
              fullWidth
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Weight (in kg)"
              variant="outlined"
              fullWidth
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      </Container>
  );
};

export default Profile;
