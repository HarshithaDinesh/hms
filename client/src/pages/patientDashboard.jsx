import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HotelIcon from "@mui/icons-material/Hotel";

const PatientDashboard = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      {/* Title */}
      <Typography variant="h4" gutterBottom>
        My Dashboard
      </Typography>

      {/* Goals Section */}
      <Typography variant="h6" gutterBottom>
        Goals
      </Typography>
      <Grid container spacing={2}>
        {/* Steps Card */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent sx={{ textAlign: "center" }}>
              <DirectionsWalkIcon fontSize="large" color="primary" />
              <Typography variant="h6">Steps</Typography>
              <Typography variant="body1">5000</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Active Time Card */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent sx={{ textAlign: "center" }}>
              <AccessTimeIcon fontSize="large" color="secondary" />
              <Typography variant="h6">Active Time</Typography>
              <Typography variant="body1">2 hours</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Sleep Card */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent sx={{ textAlign: "center" }}>
              <HotelIcon fontSize="large" color="success" />
              <Typography variant="h6">Sleep</Typography>
              <Typography variant="body1">8 hours</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Upcoming Reminders Section */}
      <Accordion sx={{ mt: 3 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Upcoming Reminders</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ListItemText primary="Drink Water - 10:00 AM" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Workout - 6:00 PM" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Take Medicine - 9:00 PM" />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      {/* Health Tip of the Day */}
      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6">Health Tip of the Day</Typography>
          <Typography variant="body1" color="text.secondary">
            Stay hydrated and drink at least 8 glasses of water a day!
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PatientDashboard;
