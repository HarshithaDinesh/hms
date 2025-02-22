import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PatientDashboard from "./pages/patientDashboard";
import Login from "./pages/login";
import Healthcare from "./pages/healthcare";
import Profile from "./pages/profile";
import Registration from "./components/registration";

export default function Layout() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Router>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">My App</Typography>
        </Toolbar>
      </AppBar>

      {/* Side Navigation */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/patient"
              onClick={toggleDrawer}
            >
              <ListItemText primary="My Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/profile"
              onClick={toggleDrawer}
            >
              <ListItemText primary="My Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/healthcare"
              onClick={toggleDrawer}
            >
              <ListItemText primary="Healthcare Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/login" onClick={toggleDrawer}>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      {/* Routes */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Login />} />
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </Router>
  );
}
