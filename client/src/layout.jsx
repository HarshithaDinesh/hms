import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Button,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemButton,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Layout() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              cursor: "pointer",
              color: "inherit",
            }}
          >
            Healthcare Wellness
          </Typography>

          {/* Push buttons to the right */}
          <Box sx={{ marginLeft: "auto" }}>
            <Button color="inherit" onClick={() => navigate("/healthtips")}>
              Health Tips
            </Button>
            <Button color="inherit" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button color="inherit" onClick={() => navigate("/register")}>
              Register
            </Button>
          </Box>
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
    </>
  );
}
