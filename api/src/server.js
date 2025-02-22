const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS for API access

app.get("/", (req, res) => res.send("API is running..."));

// Import Routes
const userRoutes = require("./routes/user.routes");
app.use("/api/users", userRoutes);

const patientRoutes = require("./routes/patient.routes");
app.use("/api/patient", patientRoutes);

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
