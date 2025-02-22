const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patient.controller");

router.post("/patient", patientController.createPatient);
router.get("/patient/:id", patientController.getPatientById);
router.put("/patient/:id/health", patientController.updateHealthData);
router.delete("/patient/:id", patientController.deletePatient);

module.exports = router;
