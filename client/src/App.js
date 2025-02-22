import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import PatientDashboard from "./pages/patientDashboard";
import Login from "./pages/login";
import Home from "./pages/Home.jsx";
import Healthcare from "./pages/healthcare";
import Profile from "./pages/profile";
import Layout from "./layout.jsx";
import HealthTips from "./pages/healthtips.jsx";

const theme = createTheme({
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Login />} />
          <Route path="/patient" element={<PatientDashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/healthtips" element={<HealthTips />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
