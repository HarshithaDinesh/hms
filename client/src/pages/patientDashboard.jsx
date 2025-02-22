import React, { useState, useEffect } from "react";
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
  CircularProgress,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HotelIcon from "@mui/icons-material/Hotel";
import axios from "axios";

// Fetch patient data from API
const fetchUserData = async (patientId) => {
  try {
    const response = await axios.get(
      `http://localhost:3003/api/patient/${patientId}`
    );
    return response.data.patient;
  } catch (error) {
    console.error("Error fetching patient data:", error);
    return null;
  }
};

const reminders = [
  { text: "Drink Water", time: "10:00" },
  { text: "Workout", time: "18:00" },
  { text: "Take Medicine", time: "21:00" },
];

const PatientDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filteredReminders, setFilteredReminders] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const patientId =
        localStorage.getItem("patientId") || "67b9ad3c60c57631cfb24bd3"; // Replace with dynamic ID
      const data = await fetchUserData(patientId);
      if (data) {
        setUserData({
          steps: data.steps,
          activityTime: data.activityTime,
          sleep: data.sleep,
        });
      } else {
        setError(true);
      }
      setLoading(false);
    };
    getData();
  }, []);

  useEffect(() => {
    const updateReminders = () => {
      const now = new Date();
      const currentTime = now.getHours() * 60 + now.getMinutes();
      const upcoming = reminders.filter(({ time }) => {
        const [hours, minutes] = time.split(":").map(Number);
        return hours * 60 + minutes > currentTime;
      });
      setFilteredReminders(upcoming);
    };
    updateReminders();
    const interval = setInterval(updateReminders, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        My Dashboard
      </Typography>
      <Typography variant="h6" gutterBottom>
        Goals
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">
          Failed to load data. Please try again.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent sx={{ textAlign: "center" }}>
                <DirectionsWalkIcon fontSize="large" color="primary" />
                <Typography variant="h6">Steps</Typography>
                <Typography variant="body1">
                  {userData.steps || "N/A"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent sx={{ textAlign: "center" }}>
                <AccessTimeIcon fontSize="large" color="secondary" />
                <Typography variant="h6">Active Time</Typography>
                <Typography variant="body1">
                  {userData.activityTime || "N/A"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent sx={{ textAlign: "center" }}>
                <HotelIcon fontSize="large" color="success" />
                <Typography variant="h6">Sleep</Typography>
                <Typography variant="body1">
                  {userData.sleep || "N/A"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
      <Accordion sx={{ mt: 3 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Upcoming Reminders</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {filteredReminders.length > 0 ? (
            <List>
              {filteredReminders.map(({ text, time }, index) => (
                <ListItem key={index}>
                  <ListItemText primary={`${text} - ${time}`} />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography variant="body2" color="text.secondary">
              No upcoming reminders
            </Typography>
          )}
        </AccordionDetails>
      </Accordion>
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
